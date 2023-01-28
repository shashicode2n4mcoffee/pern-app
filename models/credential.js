'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Credentials extends Model {
    static associate(models) {
      // define association here
    }
  }
  Credentials.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Credentials',
    }
  )
  return Credentials
}
