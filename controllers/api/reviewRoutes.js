const router = require('express').Router();
const { Review, User } = require('../../models');
const withAuth = require('../../utils/auth');
//Post a new review
router.post('/', async (req,res) =>{
    try {
        const newReview = await Review.create({
            ...req.body,
            // games_id: req.params.id
            // title: req.session.title,
            // text: req.session.text,
            // rating: req.session.rating,
            // date_posted: req.session.createdAt,
        })
        res.status(200).json(newReview)
    } catch (err) {
        res.status(400).json(err)
    }
});
router.get('/', async (req, res) => {
    try {
        const reviewData = await Review.findAll({
        });

        // const review = reviewData.map((game) => game.get({ plain: true }));
        res.json(reviewData)
        // res.render('populargames',{
        //     review,
        //     logged_in: req.session.logged_in
        // });
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});
//Update a review
router.put('/', async (req, res)=>{
    try {
        const reviewData = await Review.update({
            include: [
            { model: User,
                where: {
                id: req.params.id,
                user_id: req.session.user_id,
                
            }}
        ]
        })
        res.status(200).json(reviewData)
    } catch (err) {
        res.status(500).json(err)
    }
})
//Delete a review
router.delete('/reviews/:id', withAuth, async (req,res)=>{
    try {
        const reviewDel = await Review.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            }
        })
        res.status(200).json(reviewDel)
    } catch (err) {
        res.status(500).json(err)
    }
})
module.exports = router