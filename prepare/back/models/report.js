const DataTypes = require('sequelize');
const { Model } = DataTypes;
module.exports = class Report extends Model{
    static init(sequelize){
        return super.init({
        id: { 
            type: DataTypes.INTEGER, 
            primaryKey: true, 
            autoIncrement: true, 
        },
        content:{
            type : DataTypes.STRING(30),
            allowNull: false,
            unique: false,
        }
        },{
            modelName: 'Report',
            tableName: 'reports',
            charset: 'utf8',
            collate: 'utf8_general_ci', //이모티콘 저장
            sequelize,
        })
    }
    static associate(db){
        db.Report.belongsToMany(db.Post,{through : 'ReportPost'})
    }
};