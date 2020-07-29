const express=require('express');

const router=express.Router();

router.get('/', (req, res)=>{
  res.render('index', {
    title : 'Todo list',
    user : null,
  });
});


router.get('/join', (req, res)=>{
  res.render('join',{
    title : 'join',
    user:null,
  });
});

router.get('/login', (req, res)=>{
  res.render('login',{
    title : 'login',
    user:null,
  });
});

router.get('/todos', (req, res)=>{
  res.render('todos',{
    title : 'todos',
    user:null,
    todos:null,
  });
});

router.get('/write', (req, res)=>{
  res.render('write',{
    title : 'write',
    user:null,
  });
});

router.get('/edit', (req, res)=>{
  res.render('edit',{
    title : 'edit todo',
    user:null,
  });
});

module.exports=router;