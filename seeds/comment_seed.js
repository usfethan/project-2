const { Comment } = require ('../models');

const commentdata = [
    {
        comment_text: 'its super delicous!!!',
        user_id: 2,
        recipe_id: 2
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;