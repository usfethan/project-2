const { Comment } = require ('../models');

const commentdata = [
    {
        comment_text: 'its super delicous!!!',
        user_id: 1,
        recipe_id: 2,
    },
    {
        comment_text: "Its super tasty soup!!",
        user_id: 1,
        recipe_id: 1,
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;