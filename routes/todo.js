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

router.patch('/edit', isLoggedIn, (req, res)=>{
    const {id, title, date, text}=req.body;
    Todo.update({title : title, date : date, text : text}, {where : {id : id}})
        .then((result)=>{
            res.redirect('/todos');
        })
        .catch((error)=>{
            console.error(error);
            next(error);
        });
});

router.delete('/delete', isLoggedIn, (req, res)=>{
    Todo.destroy({where : {id : req.body.id}})
     .then((result)=>{
         res.send('remove');
     })
     .catch((error)=>{
         console.error(error);
         next(error);
     })
});

router.patch('/up', isLoggedIn, (req, res)=>{

});

router.patch('/down', isLoggedIn, (req, res)=>{

});

module.exports=router;