const router = require("express").Router();
const { Recipe, User, Comment } = require("../../models");



//Get all recipes
router.get("/recipes", (req, res) => {
    console.log(req.session)
    Recipe.findAll({
        attributes: ["id", "title", "ingredients", "preperations","category", "url" ],
        order: [["created_at", "DESC" ]],
        include: [
            {
                model: Comment,
                attributes: ["id", "comment_text", "user_id", "recipe_id" ],
                include: {
                    model: User,
                    attributes: ["username"]
                }
            },
        ]
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//by category get all recipes
router.get("/:category", (req, res) => {
    Recipe.findAll({
        where: {
            category: req.params.category
        },
        attributes: ["id", "title", "ingredients", "preperations","category", "url"],
        order: [["created_at", "DESC" ]],
        include: [
            {
                model: Comment,
                attributes: ["id", "comment_text", "user_id", "recipe_id" ],
                include: {
                    model: User,
                    attributes: ["username"]
                }
            }
        ]
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


//Single recipe
router.get("/:recipes", (req, res) => {
    Recipe.findOne({
        where: {
            recipe: req.params.recipes
        },
        attributes: ["id", "title", "ingredients", "preperations","category", "url"],
        order: [["created_at", "DESC" ]],
        include: [
            {
                model: Comment,
                attributes: ["id", "comment_text", "user_id", "recipe_id" ],
                include: {
                    model: User,
                    attributes: ["username"]
                }
            }
        ]
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;