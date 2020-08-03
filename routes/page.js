const express=require('express');
const {isLoggedIn, isNotLoggedIn}=require('./middlewares');
const {Todo} = require('../models');

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

router.get('/todos', isLoggedIn, async(req, res)=>{
  const _id=req.user.id;
  const _todos=await Todo.findAll({
    attributes :['id', 'title', 'date', 'text', 'priority'],
    where : {userId : _id},
    order : [['priority', 'DESC'], ['date', 'ASC']],
  });
  

  for(let i=0; i<_todos.length; i++){
    let year= _todos[i].date.getFullYear();
    let month=_todos[i].date.getMonth()+1;
    if(month < 10){
      month="0"+month;
    }
    let date=_todos[i].date.getDate();
    if(date < 10){
      date="0"+date;
    }
    const  _fullDate=year+"."+month+"."+date;
    _todos[i].fullDate=_fullDate ;
  }

  res.render('todos',{
    title : 'todos',
    user:req.user,
    todos:_todos,
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