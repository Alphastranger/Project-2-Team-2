const router = require('express').Router();
const { Game } = require('../../models');

router.get('/populargames', async (req, res) => {
    try {
        const gameData = await Game.findAll({
            order: [['score', 'DESC']],
        });

        const games = gameData.map((game) => game.get({ plain: true }));

        res.render('populargames',{
            games,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// router.get('/games/:id', async (req, res) => {
//     res.render('games');
// });

module.exports = router;