const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const studentRouter = require("./routes/student.routes");

const app = express();

app.use(bodyParser.json());
app.use(cors());

// GET request for root URL.
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Student API" });
});


studentRouter(app);

module.exports = app;
