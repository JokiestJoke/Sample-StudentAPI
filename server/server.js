const app = require("./app");
const db = require("./models");

db.sequelize.sync()
  .then(() => {
    console.log("Database synced.");
  })
  .catch((err) => {
    console.log("Error in database sync: " + err.message);
  });

app.listen(3001, () => {
  console.log("---------------------------");
  console.log("Server running on port 3001");
  console.log("---------------------------");
});
