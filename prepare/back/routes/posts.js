const express = require('express');
const { Op } = require('sequelize');
const { Post, User, Image, Comment } = require('../models');
const router = express.Router();

router.get('/', async(req, res, next) => {
    try{
        const where = {}
        if(parseInt(req.query.lastId, 10)){
            where.id = {[Op.lt] : parseInt(req.query.lastId ,10)}
            
        }

        const posts = await Post.findAll({
        where,
        limit: 10,
        order: [['createdAt', 'DESC']],
        // 20,19,18,17,16,15 ~  1
        include :[{
            model: User,
            attributes: ['id', 'nickname']
        },{
            model: Image
        },{
            model: Comment,
            include: [{
                model: User,
                attributes: ['id', 'nickname'],
                order: [[Comment, 'createdAt', 'DESC']],
            }]
        },{
            model: User,
                attributes: ['id'],
                as: 'Bookmarkers'
        },{
            model: User,
                attributes: ['id'],
                as: 'Likers'
            },{
                model: Post,
                as:'Retweet',
                include:[{
                   model: User,
                   attributes: ['id', 'nickname'],
               },{
                   model: Image
               }]
            }],
        });
        if(posts){
        res.status(200).json(posts);
        }else{
            res.status(403).send('없는 사용자입니다.')
        }
    }catch(err){
        console.error(err);
        next(error);
    }
})

module.exports = router;