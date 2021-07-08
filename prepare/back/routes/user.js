const express = require('express');
const { User, Post, Comment } = require('../models');
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
const {isLoggedIn, isNotLoggedIn} = require('./middlewares')

router.post('/signUp', isNotLoggedIn, async(req, res, next) => {
   try{
     const exUser = await User.findOne({
        where: {email: req.body.email}
    })
    if(exUser){
        res.status(403).send('이미 존재하는 이메일입니다.')
    }
    const hasedPassword = await bcrypt.hash(req.body.password, 12);
   await User.create({
        email: req.body.email,
        password: hasedPassword,
        nickname: req.body.nickname,
    })
    res.status(200).send('회원가입이 완료되었습니다.')
   }catch(error){
       console.error(error);
       next(error)
   }
})

router.get('/login', async(req, res, next) => {
   try{
       if(req.user){
        const user = await User.findOne({
        where: {id: req.user.id},
        attributes: {
            exclude: ['password']
        },
        include: [
        {
            model: Post,
            attributes: ['id']
        },{
            model: User,
            as: 'Followings',
            attributes:['id']
            
        },
        {
            model: User,
            as: 'Followers',
            attributes:['id']
        }]
    });
    res.status(200).json(user)
    } else{
        res.status(200).json(null);
    }
    
   }catch(err){
       console.error(err);
       next(err);
    }
});

router.post('/login',isNotLoggedIn, (req, res, next) => {
    passport.authenticate('local', (err, user, info) =>{
    if(err){
        console.error(err);
        return next(err);
    }
    if(info) {
        return res.status(401).send(info.reason);
    }
    return req.login(user, async(loginErr) => { //login 한다음 실행되는게  passport index의 serialize가 실행되고 user정보가 들어간다.
        if(loginErr){
            console.error(loginErr);
            return next(loginErr);
        }
        const fullUserWithoutPassword = await User.findOne({
            where: {id: user.id},
            attributes: {
                exclude: ['password']
            },
            include: [{
                model: Post,

            },{
                model: User,
                as:'Followings'
            },{
                model: User,
                as:'Followers'
            }]
        })
        return res.status(200).json(fullUserWithoutPassword);
    } )
})(req,res,next)
});
router.post('/logout',isLoggedIn, (req, res, next) => {
    req.logout();
    req.session.destroy(); //세션에 저장된 쿠키랑 아이디 없애기
    res.send('ok');
});
module.exports = router;
