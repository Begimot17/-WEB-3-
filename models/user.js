'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
      Id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    Login: {
        type: DataTypes.STRING
    },
    Password: {
        type: DataTypes.STRING
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};