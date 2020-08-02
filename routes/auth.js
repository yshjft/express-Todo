const express=require('express');
const passport=require('passport');
const bcrypt=require('bcryptjs');
const {isLoggedIn, isNotLoggedIn}=require('./middlewares');
const {User}=require('../models');

const router=express.Router();

//join
router.post('/join', isNotLoggedIn, async (req, res, next)=>{
    const {email, nick, password}=req.body;

    try{
        const exUser=await User.findOne({where : {email}});
        if(exUser){
            req.flash('joinError', 'this email already in use');
            return res.redirect('/join');
        }
        const hash= await bcrypt.hash(password, 14);
        await User.create({
            email,
            nick,
            password : hash,
        });
        return res.redirect('/');
    }catch(error){
        console.error(error);
        return next(error);   
    }
});

//login
router.post('/login', isNotLoggedIn, (req, res, next)=>{
    passport.authenticate('local', (authError, user, info)=>{
        if (authError){
            console.error(authError);
            return next(authError);
        }
        if(!user){
            console.log("!!!");
            req.flash('loginError', info.message);
            return res.redirect('/login');
        }
        return req.login(user, (loginError)=>{
            if(loginError){
                console.error(loginError);
                return next(loginError);
            }
            return res.redirect('/');
        });
    })(req, res, next)
});

//logout
router.get('/logout', isLoggedIn, (req, res)=>{
    //req.user 객체 제거
    req.logout();
    //req.session 내용 제거
    req.session.destroy();
    res.redirect('/');
});

module.exports=router;