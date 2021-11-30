const router = require('express').Router();
const { Op } = require('sequelize');
const { Recipe, User, Comment } = require('../models');



router.get('/', (req, res) => {
    console.log(req.session)
    Recipe.findAll ({
        where: {
            id: {
                [Op.between]: []
            }
        },
        attributes: [
            'id','title','ingredients','preperations','category'],

        order: [['created_at', 'DESC']],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => {
        const recipes = dbPostData.map(recipe => recipe.get({plain: true}));
        res.render('homepage', {
            recipes,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
  });


//Find all recipes
router.get('/recipes', (req, res) => {
    console.log(req.session)
    Recipe.findAll ({
        attributes: ['id', 'title', 'category'],
        order: [['created_at', 'DESC']],
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

router.get('/recipes/category/:category', (req, res) => {
    console.log(req.params.category)
    Recipe.findAll({
        where: {
            category: req.params.category
        },
        attributes: ['id', 'title', 'category'],
        order: [['created_at', 'DESC']],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => {
        if(!dbPostData) {
            res.status(404).json({message: 'No post found with this category'});
            return;
        }
        const recipes = dbPostData.map(recipe => recipe.get({ plain: true}));
        res.render('category', {
            recipes, 
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
    if(req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login-page', {layout: 'login'});
});

module.exports = router;