const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const { Post, Comment, Image, User, Hashtag, Report } = require('../models');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const router = express.Router();
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk')
try{
    fs.accessSync('uploads');
}catch(error){
    console.log('uploads 폴더가 없으므로 생성합니다.');
    fs.mkdirSync('uploads');
}

AWS.config.update({
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    region: 'ap-northeast-2',
})

const upload = multer ({
    storage: multerS3({
        s3: new AWS.S3(),
        bucket: 'pressheart-s3',
        key(req, file, cb){
            cb(null, `original/${Date.now()}_${path.basename(file.originalname)}`)
        }
}),
    limits: {fileSize: 20 * 1024 * 1024}
})

router.post('/:postId/report', async(req, res, next) => {
    try{
        const post = await Post.findOne({
            where : {id: req.params.postId}
        })
       const report = await Report.create({
            content : req.body.content,    
      })
      post.addReports(report)
      res.status(201).send('Report 접수성공')
    }catch(error){
        console.error(error);
        next(error)
    }
})

router.patch('/:postId/edit', isLoggedIn, async(req, res, next) => {
    try{
        const exPost = await Post.findOne({
            where : {id: req.params.postId}
        })
        if(exPost.UserId !== req.user.id){
      return res.status(403).send('본인이 작성한 게시글만 수정할 수 있습니다.')
        }
       await Post.update({
            content : req.body.contentText,
           
      },{
          where: {
              id : req.params.postId,
              UserId : req.user.id,
          },
        })
      
      res.status(201).json({content : req.body.contentText, PostId : parseInt(req.params.postId, 10)})
    }catch(error){
        console.error(error);
        next(error)
    }
})

router.get('/:postId', isNotLoggedIn, async(req, res, next) => {
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
          },{
              model: User,
              attributes: ['id','nickname'],
              as: 'Bookmarkers'
          }
        ]
      })
      res.status(200).json(post);
    }catch(error){
        console.error(error);
        next(error)
    }
})


router.post('/addpost', isLoggedIn, upload.none(), async(req, res, next) => {
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
                model: User,
                attributes: ['id', 'nickname'],
            }]
            },{
                model: User,
                attributes: ['id'],
                as: 'Likers'
            },{
                model: User,
                attributes: ['id'],
                as: 'Bookmarkers'
            }]
        })
        res.status(201).json(fullPost);
    }catch(error){
        console.error(error);
        next(error)
    }
})


router.post('/images', isLoggedIn, upload.array('image'), async(req, res, next) => {
    console.log('req.files',req.files);
    res.json(req.files.map((v) => v.location.replace(/\/original\//, '/thumb/')));
})

router.delete('/:postId/image/:imageId', isLoggedIn, async(req, res, next) => {
    try{
        console.log('imageid',req.params.imageId)
        console.log('postId',req.params.postId)
        await Image.destroy({
        where : {
            id : req.params.imageId,
            PostId : req.params.postId
        }
    })
    res.status(203).json({PostId : parseInt(req.params.postId,10), ImageId : parseInt(req.params.imageId,10)})
    }catch(error){
        console.error(error);
        next(error);
    }
    
})

router.post('/:postId/comment', isLoggedIn, async(req, res, next) => {
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

router.patch('/:postId/bookmark', isLoggedIn, async(req, res, next) => {
    try{
       const post = await Post.findOne({
           where: {id : req.params.postId}
       })
       if(!post){
           return res.status(403).send('존재하지 않는 게시글 입니다.');
       }
       await post.addBookmarkers(req.user.id);
             res.status(201).json({UserId: req.user.id, PostId : post.id})
    }catch(error){
        console.error(error);
        next(error)
    }
})

router.patch('/:postId/unbookmark', isLoggedIn, async(req, res, next) => {
    try{
       const post = await Post.findOne({
           where: {id : req.params.postId}
       })
       if(!post){
           return res.status(403).send('존재하지 않는 게시글 입니다.');
       }
       await post.removeBookmarkers(req.user.id);
             res.status(201).json({UserId: req.user.id, PostId : post.id})
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
           },{
               model: User,
               as:'Bookmarkers',
               attributes: ['id']
           }]
       })
       res.status(201).json(retweetWithPrevPost);
    }catch(error){
        console.error(error);
        next(error)
    }
})
module.exports = router;