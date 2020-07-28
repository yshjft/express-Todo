const express=require('express');
const morgan=require('morgan');
const session=require('express-session');
const cookieParser=require('cookie-parser');
const path=require('path');
const flash=require('connect-flash');
require('dotenv').config();

const pageRouter=require('./routes/page');

const app=express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 8087);

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser(process.env.SECRET_CODE));
app.use(session({
  resave : false,
  saveUninitialized : false,
  secret : process.env.SECRET_CODE,
  cookie :{
    httpOnly : true,
    secure: false,
  }
}));
app.use(flash());

app.use('/', pageRouter);

app.use((req, res, next)=>{
  const error = new Error('Not Found');
  error.status=404;
  next(error);
});

app.use((error, req, res, next)=>{
  res.locals.message=error.message;
  res.locals.error=req.app.get('env')==='development' ? error : {};
  res.render('error');
});

app.listen(app.get('port'), ()=>{
  console.log(app.get('port'),"번 포트에서 대기 중");
})