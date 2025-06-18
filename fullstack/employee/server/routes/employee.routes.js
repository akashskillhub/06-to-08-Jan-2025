const { getEmployee, addEmployee, updateEmployee, deleteEmployee } = require("../controllers/employee.controller")

const router = require("express").Router()

router
    .get("/", getEmployee)
    .post("/", addEmployee)
    .put("/:eid", updateEmployee)
    .delete("/:eid", deleteEmployee)

module.exports = router