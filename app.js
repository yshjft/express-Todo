// 배포 환경 : npm start
// 개발 환경 : npm dev
const express=require('express');
const morgan=require('morgan');
const session=require('express-session');
const cookieParser=require('cookie-parser');
const path=require('path');
const flash=require('connect-flash');
const passport=require('passport');
const helmet=require('helmet');
const hpp=require('hpp');
const RedisStore=require('connect-redis')(session);
const redis=require('redis');
require('dotenv').config();

const pageRouter=require('./routes/page');
const authRouter=require('./routes/auth');
const todoRouter=require('./routes/todo');
const {sequelize}=require('./models');
const passportConfig=require('./passport');
const logger=require('./logger');

const app=express();
sequelize.sync();
passportConfig(passport);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 8087);


if(process.env.NODE_ENV==='production'){
  app.use(morgan('combined'));
  app.use(helmet());
  app.use(hpp());
}else{
  app.use(morgan('dev'));
}
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser(process.env.SECRET_CODE));

const client=redis.createClient({
  host : process.env.REDIS_HOST,
  port : process.env.REDIS_PORT,
  password : process.env.REDIS_PASSWORD,
  logErrors : true,
});
const sessionOption={
  resave : false,
  saveUninitialized : false,
  secret : process.env.SECRET_CODE,
  cookie :{
    httpOnly : true,
    secure: false,
  },
  store:new RedisStore({client : client}),
};
if(process.env.NODE_ENV === 'production'){
  sessionOption.proxy=true;
}
app.use(session(sessionOption));
app.use(flash());
app.use(passport.initialize());;
app.use(passport.session());



app.use('/', pageRouter);
app.use('/auth', authRouter);
app.use('/todo', todoRouter);

app.use((req, res, next)=>{
  const error = new Error('Not Found');
  error.status=404;
  // logger.info('hello');
  // logger.error(error.message);
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