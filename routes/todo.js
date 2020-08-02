const express=require('express');
const {isLoggedIn, isNotLoggedIn}=require('./middlewares');
const {Todo}=require('../models');

const router=express.Router();

router.post('/write', isLoggedIn, async(req, res)=>{
    const {title, date, text}=req.body;
    await Todo.create({
        title,
        date,
        text,
        userId : req.user.id
    });

    res.redirect('/todos');
});

router.patch('/complete', isLoggedIn, (req, res)=>{
    Todo.update({complete : req.body.complete}, {where : {id :req.body.id}})
        .then(result=>{
            res.send('success');
        })
        .catch(error=>{
            console.error(error);
            next(error);
        });
});

router.patch('/edit', isLoggedIn, (req, res)=>{

});

router.delete('/delete', isLoggedIn, (req, res)=>{

});

router.patch('/up', isLoggedIn, (req, res)=>{

});

router.patch('/down', isLoggedIn, (req, res)=>{

});

module.exports=router;