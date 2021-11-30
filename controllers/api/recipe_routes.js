const router = require('express').Router();
const { User, Recipe, Comment } = require('../../models');

//Get all recipes
router.get('/', (req, res) => {
    Recipe.findAll ({
        attributes: ['id', 'title', 'preperations','category'],
        order: [['created_at', 'DESC']],

        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'user_id', 'recipe_id'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                      model: User,
                     attributes: ['username']
            }
        ]
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
//GET all recipes by category
router.get('/:category', (req, res) => {
    Recipe.findAll({
        where: {
            category: req.params.category
        },
        attributes: ['id', 'title', 'ingredients', 'preperations', 'category'],
        oder: [['created_at', 'DESC']],
        include: [
            {
            model: Comment,
            attributes: ['id', 'comment_text', 'user_id', 'recipe_id'],
            include: {
                model: User,
                attributes: ['username']
            }
        },
        {
            model: User,
            attributes: ['username']
        }
    ]
})
.then(dbPostData => res.json(dbPostData))
.catch(err => {
    console.log(err);
    res.status(500).json(err);
   });
});

//Get one recipe
router.get('/:id', (req, res) => {
    Recipe.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'title', 'category'],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => {
        if(!dbPostData) {
            res.status(404).json ({ message: 'No post found with this id!'});
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;