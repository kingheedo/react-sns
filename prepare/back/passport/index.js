const passport = require('passport');
const local =   require('./local');
const {User} = require('../models');

module.exports = () => {
    passport.serializeUser((user, done) => { //백엔드 서버에서 쿠키랑 저장할 유저아이디 
                                                // 유저 아이디는 deserializeUser로 전달
        done(null, user.id) 
    });

    passport.deserializeUser((async(id, done) => {
        try{
            const user = await User.findOne({where: {id}});
            done(null,user) //req.user로 유저를 들고있는다.
        }catch(error){
            console.error(error);
            done(error);
        }
    }))
    local();
}