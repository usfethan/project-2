const router = require('express').Router();
const comment = require('../../modules');

//GET all comments
router.get('/', (req, res) => {
    comment.findAll () 
    .then(dbCommentData => res.json(dbCommentData))
    .cath(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//POST comment
router.post('/', (req,res) => {
    if(req.session) {
        comment.create({
            commet_text: req.body.comment_text,
            recipe_id: req.body.recipe_id,
            user_id: req.body.user_id,
        })
        .then(dbCommentData => res.json(dbCommentData))
        .cath(err => {
            console.log(err);
            res.status(400).json(err);
        });
    }
});

module.exports = router;