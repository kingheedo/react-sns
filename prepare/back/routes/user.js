const express = require('express');
const { User } = require('../models');
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');

router.post('/signUp', async(req, res, next) => {
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
dispatch(loginRequestAction({email,password}))
router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) =>{
    if(err){
        console.error(err);
        next(err)
    }
    if(info) {
        return res.status(401).send(info.reason);
    }
    return req.login(user, async(loginErr) => {
        if(loginErr){
            console.error(loginErr);
            return next(loginErr);
        }
        return res.status(200).json(user);
    } )
})(req,res,next)
});
module.exports = router;
