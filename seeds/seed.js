const sequelize = require('../config/connection')
const { Games , Review, User } = require('../models')

const gamesData = require ('./gamesData.json')
const reviewData = require('./reviewData.json')
const seedDatabase = async () => {
    await sequelize.sync({force: true})
    const games = await Games.bulkCreate(gamesData, {
        individualHooks: true,
        returning: true,
    });
    const reviews = await Review.bulkCreate(reviewData)
}
seedDatabase()