const User = require('./user');
const Recipe = require('./recipe');
const Comment = require('./comment');

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Recipe.hasMany(Comment, {
    foreignKey: 'recipe_id'
});

Comment.belongsTo(Recipe, {
    foreignKey: 'recipe_id'
});

module. exports = { User, Recipe, Comment};