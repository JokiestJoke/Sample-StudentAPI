const db = require("../models");
const Student = db.student;

// Create and save new student.
exports.createStudent = (req, res) => {
  const userName = req.body.userName;
  const email = req.body.email;
  const password = req.body.password;

  // Validate request.
  if (!req.body.userName || !req.body.email || !req.body.password) {
    res.status(400).send({
      message: "Content can not be empty!",
    });

    return;
  }

  // Create a new student.
  const student = {
    userName: userName,
    email: email,
    password: password,
  };

  // Save student in the database.
  Student.create(student)
    .then((data) => {
      res.send({
        message: `Student with username ${data.userName} added successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Student.",
      });
    });
};

// Retrieve all Students from the database.
exports.getAllStudents = (req, res) => {
  Student.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving students.",
      });
    });
};

// Find a student with a username.
exports.getStudent = (req, res) => {
  const userName = req.params.userName;

  Student.findOne({ where: { userName: userName } })
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find student with username ${userName}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error retrieving student with username ${userName}.`,
      });
    });
};

// Delete a student with a username.
exports.deleteStudent = (req, res) => {
  const userName = req.params.userName;

  Student.destroy({ where: { userName: userName } })
    .then((rowsAffected) => {
      if (rowsAffected > 0) {
        res.send({
          message: "Student was deleted successfully!",
        });
      } else {
        res.status(404).send({
          message: `Student with username ${userName} not found.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error deleting student with username ${userName}.`,
      });
    });
};
