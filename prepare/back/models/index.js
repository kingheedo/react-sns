const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require("../config/config")[env]
const db = {};

const report = require('./report');
const comment = require('./comment');
const hashtag = require('./hashtag');
const image = require('./image');
const post = require('./post');
const user = require('./user');

const sequelize = new Sequelize(config.database, config.username, config.password, config)

db.Report = report;
db.Comment = comment;
db.Hashtag = hashtag;
db.Image = image;
db.Post = post;
db.User = user;

Object.keys(db).forEach(modelName => {
  db[modelName].init(sequelize);
})


//각 model의 associate를 실행해서 연결
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
