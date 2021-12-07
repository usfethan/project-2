const { User, Recipe, Comment } = require("../models");
const router = require ("express").Router();
const withAuth = require("../utils/auth.js");

//login page
router.get("/login", async (req, res) => {
    try {
        res.render("login", {
            loggedIn: req.session.loggedIn,
        });
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//homepage
router.get("/homepage", withAuth, async (req, res) => {
    try {
        res.render("homepage", {
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//Recipes
router.get("/recipe", async (req, res) => {
    try {
        res.render("recipe", {
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;