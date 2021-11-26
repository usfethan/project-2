const sequelize = require('../config/connection');
const { Model, DataTypes} = require('sequelize');

class Comment extends Model {}

Comment.init (
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        comment_text: {
            type: DataTypes.TEXT('long'),
            allowNull: false,
            len: [1]
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        recipe_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'recipe',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    }
);

module.exports = Comment;