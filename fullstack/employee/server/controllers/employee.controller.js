const Employee = require("../models/Employee")

const getEmployee = async (req, res) => {
    const result = await Employee.find()
    res.json({ message: "employee fetch success", result })
}
const addEmployee = async (req, res) => {
    // console.log(req.body)
    await Employee.create(req.body)
    res.json({ message: "employee create success" })
}
const updateEmployee = async (req, res) => {
    await Employee.findByIdAndUpdate(req.params.eid, req.body)
    res.json({ message: "employee update success" })
}
const deleteEmployee = async (req, res) => {
    console.log(req.params.eid)
    await Employee.findByIdAndDelete(req.params.eid)
    res.json({ message: "employee delete success" })
}
module.exports = { getEmployee, addEmployee, deleteEmployee, updateEmployee }