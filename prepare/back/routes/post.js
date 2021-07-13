const express = require('express');
const { Post, Comment, Image, User } = require('../models');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const router = express.Router();

router.get('/loadpost', isNotLoggedIn, async(req, res, next) => {
    try{
        Post.findAll
    }catch(error){
        console.error(error);
        next(error)
    }
})

router.post('/addpost', isLoggedIn, async(req, res, next) => {
    try{
        const newPost = await Post.create({
            content: req.body.content,
            UserId: req.user.id,
        })
        const fullPost = await Post.findOne({
            where: {id : newPost.id},
            include:[{
                model: User,
                attributes: ['id', 'nickname']
            },{
                model: Comment,
                attributes:['id', 'nickname']
            },{
                model: Image
            },{
                model: User,
                attributes: ['id'],
                as: 'Likers'
            }]
        })
        res.status(201).json(fullPost);
    }catch(error){
        console.error(error);
        next(error)
    }
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
module.exports = router;