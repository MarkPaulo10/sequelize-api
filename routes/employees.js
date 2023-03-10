const express = require("express");
const EmployeeController = require("../controllers/employees.controller");
const router = express.Router();

router.get("/", EmployeeController.get);
router.get("/:id", EmployeeController.getById);
router.post("/", EmployeeController.create);
router.put("/", EmployeeController.update);

module.exports = router;