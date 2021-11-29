const router = require('express').Router();
const { User, Recipe, Comment } = require('../models');
router.get ('/', (req, res) => {
    res.send('This is the homepage!!!');
})
//Find all recipes
router.get('/recipes', (req, res) => {
    console.log(req.session)
    Recipe.findAll ({
        attributes: ['id', 'title', 'category', 'image_url'],
        include: [ 
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => {
        const recipes = dbPostData.map(recipe => recipe.get({ plain: true}));
        res.render('category', { recipes, loggedIn: req.session.loggedIn });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/recipes/:id', (req, res) => {
    Recipe.findOne ({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'title', 'category'],
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
    .then(dbPostData => {
        if(!dbPostData) {
            res.status(404).json({message: 'No post found with this id!'});
            return;
        }
        const recipe = dbPostData.get({ plain: true});
        res.render('single-recipe', { recipe, loggedIn: req.session.loggedIn});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})

module.exports = router;