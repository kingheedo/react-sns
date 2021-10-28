const express = require('express');
const { Op } = require('sequelize');
const router = express.Router();
const {Post,User,Image,Hashtag,Comment} = require('../models')

router.get('/:hashtag', async(req, res, next) => {
    try{
        const where = {};
        if(parseInt(req.query.lastId,10)){
            where.id = {[Op.lt] : parseInt(req.query.lastId, 10)}
        }
        const posts = await Post.findAll({
            where,
            limit :10,

            order: [
                ['createdAt', 'DESC']
            ],
            include: [{
                model: Hashtag,
                where: {name: decodeURIComponent(req.params.hashtag)}
            },{
                model: User,
                attributes: ['id', 'nickname']
            },{
                model: Image,
            },{
                model: Comment,
                include:[{
                    model: User,
                    attributes: ['id', 'nickname'],
                    order: [
                        ['createdAt', 'DESC']
                    ],
                }]
            },{
                model: User,
                attributes: ['id', 'nickname'],
                as: 'Likers',
            },{
                model: Post,
                as: 'Retweet',
                include: [{
                    model: User,
                    attributes: ['id', 'nickname'],
                },{
                model: Image,
                }]
            }
        ]
        })
        res.status(200).json(posts)
    }catch{
        console.error(error);
        next(error);
    }
})

module.exports = router;