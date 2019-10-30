'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    age: DataTypes.DATE,
    idGroup: DataTypes.INTEGER
  }, {});
  Student.associate = function (models) {
    // associations can be defined here
  };
  return Student;
};