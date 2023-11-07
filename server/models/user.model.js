module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
      userID: {
        type: DataTypes.INTEGER
      },
      username: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      },
      /*
      password: {
        type: DataTypes.STRING
      },
      isStudent: {
        type: DataTypes.BOOLEAN
      },
      isIntructor: {
        type: DataTypes.BOOLEAN
      },
      isAdministrator: {
        type: DataTypes.BOOLEAN
      }
      */


    });
  
    return User;
  };
  