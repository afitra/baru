'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dislike = sequelize.define('Dislike', {
    UserId: DataTypes.INTEGER,
    DislikeId: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {});
  Dislike.associate = function (models) {
    // associations can be defined here
    Dislike.belongsTo(models.User, {
      foreignKey: 'UserId'
    })
  };
  return Dislike;
};