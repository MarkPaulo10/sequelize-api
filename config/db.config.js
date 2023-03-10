const Sequelize = require("sequelize");

module.exports = new Sequelize({
    hostname: "localhost",
    database: "hris-db",
    username: "root",
    password: "123",
    logging: false,
    dialect: "postgres",
});