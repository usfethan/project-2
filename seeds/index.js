const seedUser = require('./user_seed');
const seedRecipe = require('./recipe_seed');
const seedComment = require('./comment_seed');

const sequelize = require('../config/connection');
const { async } = require('rxjs');

const seedAll = async () => {
    await sequelize.sync({ force: true});

    await seedCommentSeed();
    await seedUserSeed();
    await seedRecipeSeed();

    process.exit(0);
};

seedAll();