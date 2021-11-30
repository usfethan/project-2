const seedComments = require('./comment_seeds');
const seedRecipe = require('./recipe_seed');
const seedUsers = require('./user_seeds');

const sequelize = require('../config/connection');


const seedAll = async () => {
    await sequelize.sync({ force: true});
    console.log('-----------');

    await seedUsers();
    console.log('-----------');

    await seedRecipe();
    console.log('-----------');

    await seedComments();
    console.log('-----------');

    process.exit(0);
};

seedAll();