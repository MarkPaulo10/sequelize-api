const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("../config/db.config");
const employees = require("./employees.model");

class UserModel extends Model {}

UserModel.init({
    _id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      unique: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    token: {
      type: DataTypes.STRING,
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    employeeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    created_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    modified_date: {
      type: DataTypes.DATE,
      allowNull: true,
    }
}, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    updatedAt: false,
    createdAt: false
});

UserModel.belongsTo(employees, {
  foreignKey: 'employeeId',
  as: 'employee'
})

module.exports = UserModel;