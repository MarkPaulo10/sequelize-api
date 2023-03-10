const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("../config/db.config");
const employee_details = require('./employee.details.model');

class EmployeeModel extends Model {}

EmployeeModel.init({
    _id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    fname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mname: {
        type: DataTypes.STRING,
        allowNull: true
    },
    lname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    suffix: {
        type: DataTypes.STRING,
        allowNull: true
    },
    bday: {
        type: DataTypes.DATE,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    jobTitle: {
        type: DataTypes.STRING,
        allowNull: true
    },
    monthlySalary: {
        type: DataTypes.DOUBLE,
        allowNull: true
    },
    employee_detailsId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    created_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    modified_date: {
        type: DataTypes.DATE,
        allowNull: true,
    }
},{
    sequelize,
    modelName: 'Employee',
    tableName: 'employees',
    updatedAt: false,
    createdAt: false
});

EmployeeModel.belongsTo(employee_details, {
    foreignKey: 'employee_detailsId',
    as: 'employee_details'
});

module.exports = EmployeeModel;