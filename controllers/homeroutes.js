const { User } = require("../models");
const router = require ("express").Router();
const withAuth = require("../utils/auth.js");

router.get('/homepage', withAuth, async(req, res) => {
    try {
        const userData = await User.findAll({
            attributes: {exclude: ['password']},
            order: [['name', 'ASC']],
        });
        const users = userData.map((project) => project.get({plain: true}));
        res.render('homepage', {
            users, loggedIn: req.session.logged_in,
        });
    } catch(err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

module.exports = router;