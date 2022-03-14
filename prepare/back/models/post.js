const DataTypes = require('sequelize');
const { Model } = DataTypes;
module.exports = class Post extends Model{
    static init(sequelize){
        return super.init({
        content:{
            type : DataTypes.TEXT,
            allowNull: false,
        },
        },{
            modelName: 'Post',
            tableName: 'posts',
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci', //이모티콘 저장
            sequelize,
        })
    }
    static associate(db){
        db.Post.belongsTo(db.User);
        db.Post.hasMany(db.Comment);
        db.Post.hasMany(db.Image);
        db.Post.belongsToMany(db.User, {through : 'Like', as: 'Likers'}); //addLikers
        db.Post.belongsToMany(db.User, {through : 'Bookmark', as : 'Bookmarkers'});
        db.Post.belongsToMany(db.Hashtag, {through : 'PostHashtag'});
        db.Post.belongsTo(db.Post, {as: 'Retweet'}) //post.addRetweet
        db.Post.belongsToMany(db.Report, {through : 'ReportPost'});

    }
    
};