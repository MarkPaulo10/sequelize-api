const express = require("express");
const UserController = require("../controllers/users.controller");
const router = express.Router();

router.get("/", UserController.get);
router.get("/:id", UserController.getById);
router.post("/", UserController.create);
router.put("/", UserController.update);

module.exports = router;