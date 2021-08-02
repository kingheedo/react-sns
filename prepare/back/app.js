const express = require('express');
const db = require('./models');
const app = express();
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

db.sequelize.sync()
.then(() => {
    console.log('db 연결 성공')
})
.catch(console.error);

app.use('/', express.static(path.join(__dirname, 'uploads')))

app.use(morgan('dev'));
passportConfig();
dotenv.config();

app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET //쿠키와 이 secret을 알면 백엔드의 데이터를 복원할 수 있다. 위험하므로 숨겨야한다.
}))
app.use(passport.initialize());
app.use(passport.session())

app.use(cors({
    origin : 'http://localhost:3060',
    credentials: true,
}))

app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.get('/api', (req, res) =>{
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