const router = require('express').Router();
const { Games, User, Review} = require('../models')
const withAuth = require ('../utils/auth')

router.get('/', async (req, res)=>{
    try {
        const gameData = await Games.findAll({
            include: [
                {model:Review}
            ]
        })
        const games = gameData.map((game)=> game.get({plain:true}))
        res.render('homepage',  {games, logged_in:req.session.logged_in})
    } catch (err) {
        res.status(500).json(err)
    }
})
router.get('/games/:id', async (req, res)=> { console.log(req.params)
    try {
        const gameData2 = await Games.findByPk(req.params.id, {
            include: [{model:Review,
                attributes:[
                    'title',
                    'text',
                    'rating',
                    'date_posted',
                    'up_votes',
                    'down_votes'
                ]}]
        })
        // const reviewData2 = await Review.findAll({
        //     where: {games_id: req.params.id}
        // })
        const game = gameData2.get({plain: true})
        // const review2 = reviewData2.get({plain:true})
        console.log(game)
        // console.log(review2)
        res.render('reviewpage', {game})
    } catch (err){
        console.log(err)
        res.status(500).json(err)
    }
})
router.get('/reviews/:id', async (req, res)=> {
    try {
        const reviewData = await Review.findByPk(req.params.id, {
            include: [{model:Games}, {model: User}]
        })
        const review = reviewData.get({plain:true})
        console.log(review)
        res.render('reviewpage', {review})
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})
router.get('/popularGames', async (req, res)=> {
    try {
        const popGames = await Games.findAll({
        })
        const popular = popGames.map((game)=> game.get({plain:true}))
        res.render('populargames', {popular})
    } catch (err){
        res.status(500).json(err)
    }
})
router.get('/upcomingGames', async (req, res)=> {
    try {
        const upGames = await Games.findAll({
        })
        const upcoming = upGames.map((game)=> game.get({plain:true}))
        res.render('upcominggames', {upcoming})
    } catch (err){
        res.status(500).json(err)
    }
})

router.get('/reviewpage', async (req, res)=> {
    try {
        const revEl = await Review.findAll({
            include: [{model: User}]
        })
        const reviews = revEl.map((rev)=> rev.get({plain:true}))
        res.render('reviews', {reviews})
    } catch (err){
        res.status(500).json(err)
    }
})
router.get('/login', async (req, res)=> {
    if (req.session.logged_in) {
        res.redirect('/')
        return
    }
    res.render('login')
})

module.exports = router