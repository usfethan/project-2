const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Recipe extends Model {}

Recipe.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ingredients: {
            type: DataTypes.TEXT("long"),
            allowNull: false,
        },
        preperations: {
            type: DataTypes.TEXT("long"),
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        url: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isUrl: true
            }
        } 
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: "recipe"
    }
);

module.exports = Recipe;