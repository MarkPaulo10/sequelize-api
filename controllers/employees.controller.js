const EmployeeModel = require("../models/employees.model");

exports.get = async (req, res) => {
    const employees = await EmployeeModel.findAll();
    res.send(employees);
};

exports.getById = (req, res) => {
    res.send({
      name: req.params.id,
    });
};

exports.create = async (req, res) => {
    let { body } = req;
    let employee = await EmployeeModel.create(body);
    res.send(employee);
};

exports.update = async (req, res) => {
    let response = await EmployeeModel.update(req.body, { where: { _id: req.params._id } });
    res.send(response);
};