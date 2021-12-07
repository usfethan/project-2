const seedComments = require('./comment_seeds');
const seedRecipe = require('./recipe_seeds');
const seedUsers = require('./user_seeds');
const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true});
   

    await seedUsers();
    await seedRecipe();
    await seedComments();
 
    process.exit(0);
};

seedAll();