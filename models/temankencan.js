'use strict';
module.exports = (sequelize, DataTypes) => {
  const TemanKencan = sequelize.define('TemanKencan', {
    WomenId: DataTypes.INTEGER,
    MenId: DataTypes.INTEGER,
    Appointment: DataTypes.STRING
  }, {});
  TemanKencan.associate = function (models) {

  };
  return TemanKencan;
};