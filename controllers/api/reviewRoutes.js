const router = require('express').Router();
const { Review, User } = require('../../models');
const withAuth = require('../../utils/auth');
//Post a new review
router.post('/', withAuth, async (req,res) =>{
    try {
        const newReview = await Review.create({
            ...req.body,
            title: req.session.title,
            text: req.session.text,
        })
        res.status(200).json(newReview)
    } catch (err) {
        res.status(400).json(err)
    }
});
//Update a review
router.put('/reviews/:id', withAuth, async (req, res)=>{
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