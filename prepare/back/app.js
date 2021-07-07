const express = require('express');
const db = require('./models');
const app = express();
const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const cors = require('cors');

db.sequelize.sync()
.then(() => {
    console.log('db 연결 성공')
})
.catch(console.error);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors({
    origin : 'http://localhost:3060',
    credentials: true,
}))

app.get('/api', (req, res) =>{
    res.send('hello express');
})

app.use('/post', postRouter);
app.use('/user', userRouter);

app.listen(3065, () =>{
    console.log('서버 실행중')
})