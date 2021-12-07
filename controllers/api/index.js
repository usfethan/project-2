const router = require("express").Router();

const userRoutes = require("./userroutes");
const recipeRoutes = require("./reciperoutes");
const commentRoutes = require("./commentroutes");

router.use("/users", userRoutes);
router.use("/recipes", recipeRoutes);
router.use("/comments", commentRoutes);


module.exports = router;