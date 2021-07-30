const express = require('express');
const { User, Post, Comment } = require('../models');
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
const {isLoggedIn, isNotLoggedIn} = require('./middlewares')

router.get('/login', async(req, res, next) => {
   try{
        if(req.user){
            const fullUserWithoutPassword = await User.findOne({
            where : {id: req.user.id},
            attributes: {
                exclude: ['password']
            },
            include: [{
                model: Post,
                attributes: ['id'],
            },{
                model: User,
                as: 'Followings',
                attributes: ['id'],
            },{
                model : User,
                as: 'Followers',
                attributes: ['id'],
            }]
        })
        return res.status(200).json(fullUserWithoutPassword);
        }else{
            res.status(200).json(null);
        }
    }catch(error){
        console.error(error);
        next(error)
    }
    
})

router.get('/followers', isLoggedIn, async(req, res ,next) => {
    try{
        const user = await User.findOne({
            where: {id: req.user.id},
        })
        if(!user) {
            res.status(403).send('없는 사용자입니다.')
        }
        const followers = await user.getFollowers();
        res.status(203).json(followers);
    }catch(err){
        console.error(err);
        next(err)
    }
})
router.get('/followings', isLoggedIn, async(req, res ,next) => {
    try{
        const user = await User.findOne({
            where: {id: req.user.id}
        })
        if(!user) {
            res.status(403).send('없는 사용자입니다.')
        }
        const followings = await user.getFollowings();
        res.status(203).json(followings);
    }catch(err){
        console.error(err);
        next(err)
    }
})
router.get('/:userId', async(req, res, next) => {
   try{
        const fullUserWithoutPassword = await User.findOne({
        where: {id: req.params.userId},
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
    if(fullUserWithoutPassword){
        const data =  fullUserWithoutPassword.toJSON();
        data.Posts = data.Posts.length;
        data.Followers = data.Followers.length;
        data.Followings = data.Followings.length;
        res.status(200).json(data)
    }else{
        res.status(404).json('존재하지 않는 사용자입니다.')
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

router.patch('/nickname', isLoggedIn, async(req, res ,next) => {
    try{
        await User.update({
            nickname: req.body.nickname,
        },{
            where: { id: req.user.id}
        })
        res.status(200).json({nickname : req.body.nickname})
    }catch(err){
        console.error(err);
        next(err)
    }
})
router.post('/signUp', isNotLoggedIn, async(req, res, next) => {
   try{
     const exUserEmail = await User.findOne({
        where: {email: req.body.email}
    })
    const exUserNickName = await User.findOne({
        where: {nickname: req.body.nickname}
    })
    if(exUserEmail){
        return res.status(403).send('이미 존재하는 이메일입니다.')
    }
    if(exUserNickName){
       return res.status(403).send('이미 존재하는 닉네임입니다.')
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
router.patch('/:userId/follow', isLoggedIn, async(req, res ,next) => {
    try{
        const user = await User.findOne({
            where: {id: req.params.userId}
        })
        if(!user) {
            res.status(403).send('없는 사용자입니다.')
        }
        await user.addFollowers(req.user.id);
        res.status(200).json({id: user.id, nickname: user.nickname})
    }catch(err){
        console.error(err);
        next(err)
    }
})

router.delete('/:userId/unfollow', isLoggedIn, async(req, res ,next) => {
    try{
        const user = await User.findOne({
            where: {id: req.params.userId}
        })
        if(!user) {
            res.status(403).send('없는 사용자입니다.')
        }
        await user.removeFollowers(req.user.id);
        res.status(200).json({id: user.id, nickname: user.nickname})
    }catch(err){
        console.error(err);
        next(err)
    }
})


router.delete('/follower/:userId', isLoggedIn, async(req, res, next) => {
    try{
        const user = await User.findOne({
            where: {id: req.params.userId}
        })
        if(!user) {
            res.status(403).send('없는 사용자입니다.')
        }
        await user.removeFollowings(req.user.id);
        res.status(200).json({UserId: parseInt(req.params.userId,10)})
    }catch(error){
        console.error(error);
        next(error)
    }
})
module.exports = router;
