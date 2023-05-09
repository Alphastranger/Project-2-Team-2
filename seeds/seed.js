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

    for (const review of reviewData){
        const reviews = await Review.create(
          { ...review, 
            games_id: games[0].id}
        )}
}
seedDatabase()