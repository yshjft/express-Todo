const local=require('./localStrategy');
const {User}=require('../models');

module.exports=(passport)=>{
    passport.serializeUser((user, done)=>{
        //req.session에 user.id를 저장한다.
        done(null, user.id); 
    });

    //req.session에 id를 통해 DB조회
    //조회한 user 정보를 req.user에 저장한다.     
    passport.deserializeUser((id, done)=>{
        User.findOne({where : {id}})
            .then(user=>done(null, user))
            .catch(error=>done(error));
    });

    local(passport);
}