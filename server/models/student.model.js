module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define("student", {
    userName: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    }
  });

  return Student;
};
