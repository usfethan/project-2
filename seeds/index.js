const sequelize = require('../config/connection');
const seedComments = require('./comment_seeds');
const seedRecipe = require('./recipe_seed');
const seedUsers = require('./user_seeds');




const seedAll = async () => {
    await sequelize.sync({ force: true});
   

    await seedUsers();
    

    await seedRecipe();
    

    await seedComments();
    

    process.exit(0);
};

seedAll();