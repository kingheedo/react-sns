const express = require('express');
const multer = require('multer');
const path = require('path'); //노드에서 제공
const fs = require('fs');

const { Post, Comment, Image, User, Hashtag } = require('../models');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const router = express.Router();

try{
    fs.accessSync('uploads');
}catch(error){
    console.log('uploads 폴더가 없으므로 생성합니다.');
    fs.mkdirSync('uploads');
}
const upload = multer ({
    storage: multer.diskStorage({ //실습할 때 잠깐 디스크 저장소에 저장하지만 나중에 aws에 배포할떄는 s3서비스로 대체할 것이다.
        destination(req, file, done){
            done(null, 'uploads');
        },
        // 노드는 중복되는 파일의 이름을 덮어씌운다. 이를 해결하기 위해 일이름의 중복성을 시간을 파일이름 뒤에 나타내어 해결하려한다.
        filename(req, file, done){ //희도.png
            const ext = path.extname(file.originalname); // 확장자 추출(.png), 파
            const basename = path.basename(file.originalname, ext); //희도
            done(null, basename + '_' + new Date().getTime() + ext); //희도12345.png
        },
        }),
        limits: {fileSize: 20 * 1024 * 1024}, //20MB
});

router.get('/:postId', isNotLoggedIn, async(req, res, next) => { //개시글 불러오기
    try{
      const post = await Post.findOne({
          where : {id : req.params.postId},
          include: [{
              model: Post,
              as: 'Retweet',
              include:[{
                  model : User,
                  attributes: ['id', 'nickname'],
              },{
                  model : Image,
              }]
          },{
              model: User,
              attributes: ['id', 'nickname']
          },{
              model: Comment,
              include: [{
                  model :User,
                  attributes : ['id', 'nickname']
              }]
          },{
              model: Image,
          },{
              model: User,
              attributes: ['id','nickname'],
              as: 'Likers'
          }
        ]
      })
      res.status(200).json(post);
    }catch(error){
        console.error(error);
        next(error)
    }
})


router.post('/addpost', isLoggedIn, upload.none(), async(req, res, next) => { // 게시글 업로드
    try{
        const hashtags = req.body.content.match(/#[^\s#]+/g);
        const post = await Post.create({
            content: req.body.content,
            UserId: req.user.id,
        })
        if(hashtags){
          const result =  await Promise.all(hashtags.map((tag) => Hashtag.findOrCreate({
             where:  {name: tag.slice(1).toLowerCase()}
            }))); //[[노드, true], [리액트, true]]
            await post.addHashtags(result.map((v) => v[0]));
        }
        if(req.body.image){
            if(Array.isArray(req.body.image)) {
                const images = await Promise.all(req.body.image.map((image) => Image.create({src: image})));
                await post.addImages(images)
            }else{
                const image = await Image.create({src: req.body.image})
                await post.addImages(image)
            }
        }
        
        const fullPost = await Post.findOne({
            where: {id : post.id},
            include:[{
                model: Image,
            },{
                model: User,
                attributes: ['id', 'nickname']
            },{
                model: Comment,
                include: [{
                model: User, //댓글 작성자
                attributes: ['id', 'nickname'],
            }]
            },{
                model: User,
                attributes: ['id'],
                as: 'Likers'
            }]
        })
        res.status(201).json(fullPost);
        console.log(req.body)
    }catch(error){
        console.error(error);
        next(error)
    }
})


router.post('/images', isLoggedIn, upload.array('image'), async(req, res, next) => { //Post /post/images
    console.log(req.files);
    res.json(req.files.map((v) => v.filename))
})

router.post('/:postId/addcomment', isLoggedIn, async(req, res, next) => {
    try{
       const post = await Post.findOne({
            where: {id : req.params.postId}
        })
        if(!post){
            res.status(403).send('존재하지 않는 게시물입니다.');
        }
        const comment = await Comment.create({
            content : req.body.content,
            PostId: parseInt(req.params.postId,10),
            UserId: req.user.id,
        })
        const fullcomment = await Comment.findOne({
            where: {id: comment.id},
            include: [{
                model: User,
                attributes:['id', 'nickname']
            }]
        })
        res.status(201).json(fullcomment)
    }catch(error){
        console.error(error);
        next(error)
    }
})


router.patch('/:postId/like', isLoggedIn, async(req, res, next) => {
    try{
       const post = await Post.findOne({
           where: {id : req.params.postId}
       })
       if(!post){
        return  res.status(403).send('존재하지 않는 게시글입니다.');
       }
       await post.addLikers(req.user.id);
       res.status(201).json({UserId: req.user.id, PostId: post.id})
    }catch(error){
        console.error(error);
        next(error)
    }
})

router.delete('/:postId/unlike', isLoggedIn, async(req, res, next) => {
    try{
       const post = await Post.findOne({
           where: {id : req.params.postId}
       })
       if(!post){
        return  res.status(403).send('존재하지 않는 게시글입니다.');
       }
       await post.removeLikers(req.user.id);
             res.status(201).json({UserId: req.user.id, PostId: post.id})
    }catch(error){
        console.error(error);
        next(error)
    }
})

router.delete('/:postId/remove', isLoggedIn, async(req, res, next) => {
    try{
       await Post.destroy({
           where: {
               id : req.params.postId,
               UserId : req.user.id
            }
       })
       
       res.status(201).json({PostId: parseInt(req.params.postId, 10)})
    }catch(error){
        console.error(error);
        next(error)
    }
})

router.post('/:postId/retweet', isLoggedIn, async(req, res, next) => {
    try{
      const post = await Post.findOne({
        where: {id: req.params.postId},
        include: [{
            model: Post,
            as: 'Retweet',
        }],
    })    
       if(req.user.id === post.UserId || (post.Retweet && post.Retweet.UserId === req.user.id)){
           return res.status(403).send('자신의 글을 리트윗 할 수 없습니다.');
       }
       const retweetTargetId = post.RetweetId || post.id;
       const exPost = await Post.findOne({
           where: {
               UserId: req.user.id,
               RetweetId: retweetTargetId
           }
       });
        if(exPost){
           return res.status(403).send('이미 리트윗했습니다.');
       }
       const retweet = await Post.create({
           UserId: req.user.id,
           RetweetId: retweetTargetId,
           content: 'retweet'
       });
       const retweetWithPrevPost = await Post.findOne({
           where: {id: retweet.id},
           include: [{
               model: Post,
               as: 'Retweet',
               include:[{
                   model: User,
                   attributes: ['id', 'nickname'],
               },{
                   model: Image
               }]
           },{
               model: User,
               attributes: ['id', 'nickname']
           },{
               model: Image,
           },{
               model: Comment,
               include:[{
                   model :User,
                   attributes: ['id', 'nickname']
               }]
           },{
               model: User,
               as:'Likers',
               attributes: ['id', 'nickname']
           }]
       })
       res.status(201).json(retweetWithPrevPost);
    }catch(error){
        console.error(error);
        next(error)
    }
})
module.exports = router;