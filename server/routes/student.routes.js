const student = require("../controllers/student.controller");
const express = require("express");

const router = express.Router();

// Create a new student
router.post("/", student.createStudent);

// Retrieve all students.
router.get("/", student.getAllStudents);

// Retrieve a single student with username.
router.get("/:userName", student.getStudent);

// Delete a student with username.
router.delete("/:userName", student.deleteStudent);

module.exports = function (app) {
  app.use("/api/students", router);
};
