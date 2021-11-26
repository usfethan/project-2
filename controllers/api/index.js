const router = require ('express').Router();

const userRoutes = require('./user_routes');
const recipeRoutes = require('./recipe_routes');
const commentRoutes = require('./comment_routes');


router.use('/users', userRoutes);
router.use('/recipes', recipeRoutes);
router.use('/comments', commentRoutes);

module.exports = router;