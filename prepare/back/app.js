const express = require('express');
const db = require('./models');
const hashtagRouter = require('./routes/hashtag')
const postRouter = require('./routes/post');
const postsRouter = require('./routes/posts');
const userRouter = require('./routes/user');
const cors = require('cors');
const passport = require('passport');
const passportConfig = require('./passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');
const hpp = require('hpp');
const helmet = require('helmet');
dotenv.config();
const app = express();

db.sequelize.sync()
.then(() => {
    console.log('db 연결 성공')
})
.catch(console.error);

app.use('/', express.static(path.join(__dirname, 'uploads'))) //localhost3065/ 경로

passportConfig();

if(process.env.NODE_ENV === 'production'){
    app.use(morgan('combined'));
    app.use(hpp());
    app.use(helmet());
    app.use(cors({
    origin : 'https://pressheart.com',
    credentials: true,
}))
}else{
    app.use(morgan('dev'));
    app.use(cors({
    origin : true,
    credentials: true,
}))
}

app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET, //쿠키와 이 secret을 알면 백엔드의 데이터를 복원할 수 있다. 위험하므로 숨겨야한다.
    cookie: {
        httpOnly: true,
        secure: false,
        domain: process.env.NODE_ENV === 'production' && '.pressheart.com'
    }
}))
app.use(passport.initialize());
app.use(passport.session())



app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.get('/', (req, res) =>{
    res.send('hello express');
})

app.use('/hashtag', hashtagRouter);
app.use('/post', postRouter);
app.use('/posts', postsRouter);
app.use('/user', userRouter);

app.use((err, req, res, next) => {
})

app.listen(3065, () =>{
    console.log('서버 실행중')
})