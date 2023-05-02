const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class Game extends Model {}

Game.init(
    {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: Datatypes.STRING,
            allowNull: false,
        },
        image: {
            type: Datatypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
        genre: {
            type: Datatypes.STRING,
        },
        release_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        platform: {
            type: Datatypes.STRING,
        }
    },
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'games',
}
);

module.exports = Game;