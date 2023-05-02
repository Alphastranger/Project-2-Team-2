const User = require('./User');
const Games = require('./games');
const Review = require('./review');

User.hasMany(Review, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});
Review.belongsTo(User, {
    foreignKey: 'user_id',
});
Games.hasMany(Review, {
    foreignKey: 'games_id',
    onDelete: 'CASCADE',
}),
Review.belongsTo(Games, {
    foreignKey: 'games_id'
})

module.exports = { User, Games, Review };