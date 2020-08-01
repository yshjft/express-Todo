exports.isLoggedIn=(rqe, res, next)=>{
    //passport가 req객체에 isAuthenticated() 메서드를 추가한다.
    if(req.isAuthenticated()){
        next() 
    }else{
        res.status(404).send('로그인 필요');
    }
};

exports.isNotLoggedIn=(req, res, next)=>{
    if(!req.isAuthenticated()){
        next();
    }else{
        res.redirect('/');
    }
};