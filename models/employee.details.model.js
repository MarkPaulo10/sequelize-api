const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("../config/db.config");

class EmployeeDetailsModel extends Model {}

EmployeeDetailsModel.init({
    _id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    gender: {
        type: DataTypes.ENUM('M', 'F'),
        allowNull: false
    },
    bday: {
        type: DataTypes.DATE,
        allowNull: true
    },
    bplace: {
        type: DataTypes.STRING,
        allowNull: true
    },
    civilStatus: {
        type: DataTypes.ENUM('SINGLE','MARRIED','WIDOWED','ANNULED','SEPARATED'),
        allowNull: true
    },
    citizenship: {
        type: DataTypes.STRING,
        allowNull: true
    },
    dualCitizenshipDetails: {
        type: DataTypes.STRING,
        allowNull: true
    },
    residentialAddress: {
        type: DataTypes.STRING,
        allowNull: true
    },
    telephone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    cellphone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    height: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    weight: {
        type: DataTypes.DOUBLE,
        allowNull: true
    },
    bloodType: {
        type: DataTypes.STRING,
        allowNull: true
    },
    gsis: {
        type: DataTypes.STRING,
        allowNull: true
    },
    tin: {
        type: DataTypes.STRING,
        allowNull: true
    },
    sss: {
        type: DataTypes.STRING,
        allowNull: true
    },
    pagibig: {
        type: DataTypes.STRING,
        allowNull: true
    },
    philhealth: {
        type: DataTypes.STRING,
        allowNull: true
    },
    educBackground: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true
    },
    created_byId: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    modified_byId: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    created_date: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.NOW,
        allowNull: true
    },
    modified_date: { 
        type: DataTypes.DATE,
        allowNull: true
    },
}, {
    sequelize,
    modelName: 'EmployeeDetails',
    tableName: 'employee_details',
    updatedAt: false,
    createdAt: false
});

module.exports = EmployeeDetailsModel;