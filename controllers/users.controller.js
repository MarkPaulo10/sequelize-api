const UserModel = require("../models/users.model");

exports.get = async (req, res) => {
    const users = await UserModel.findAll();
    res.send({count: users.length, rows: users});
};

exports.getById = async (req, res) => {
    const _id = req.params.id;
    const user = await UserModel.findOne({ where: { _id } });
    res.send({data: user || {}});
};

exports.create = async (req, res) => {
    let { body } = req;
    let user = await UserModel.create(body);
    res.send(user);
};

exports.update = async (req, res) => {
    let response = await UserModel.update(req.body, { where: { _id: req.params._id } });
    res.send(response);
};