const express=require('express');
const {isLoggedIn, isNotLoggedIn}=require('./middlewares');
const router=express.Router();

router.get('/', (req, res)=>{
  res.render('index', {
    title : 'Todo list',
    user : req.user,
  });
});


router.get('/join', isNotLoggedIn, (req, res)=>{
  res.render('join',{
    title : 'join',
    user:req.user,
    joinError :req.flash('joinError'),
  });
});

router.get('/login', isNotLoggedIn, (req, res)=>{
  res.render('login',{
    title : 'login',
    user:req.user,
    loginError:req.flash('loginError'),
  });
});

router.get('/todos', isLoggedIn, (req, res)=>{
  res.render('todos',{
    title : 'todos',
    user:req.user,
    todos:null,
  });
});

router.get('/write', isLoggedIn, (req, res)=>{
  res.render('write',{
    title : 'write',
    user:req.user,
  });
});

router.get('/edit', isLoggedIn, (req, res)=>{
  res.render('edit',{
    title : 'edit todo',
    user:req.user,
  });
});

module.exports=router;