'use strict';
module.exports = (sequelize, DataTypes) => {
  const feedback = sequelize.define('feedback', {
    UserId: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    comment: DataTypes.STRING
  }, {});
  feedback.associate = function(models) {
    // associations can be defined here
  };
  return feedback;
};