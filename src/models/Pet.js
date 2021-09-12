import { DataTypes } from 'sequelize';
import Database from '../DataBase/index';
const Pet =  Database.getInstace().cnn.define('Pet', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    unique: true,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tag: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'Pet'
});

module.exports = Pet;