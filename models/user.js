'use strict';
const bcrypt = require('bcrypt')
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    address: DataTypes.STRING,
    job: DataTypes.STRING,
    phone: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,
    UrlImage: DataTypes.STRING,
    sallary: DataTypes.INTEGER
  }, {
    hooks: {
      afterValidate(User) {
        User.password = bcrypt.hashSync(User.password, bcrypt.genSaltSync(10))
      }
    }
  });
  User.associate = function (models) {
    // associations can be defined here
    User.belongsToMany(models.User, {
      through: 'TemanKencan',
      as: 'WomenId'
    })
    User.hasMany(models.Dislike, {
      foreignKey: 'UserId'
    })
  }
  // User.prototype.getUser = function () {
  //   return this.name.split(' ')[0] + 'yukAhh'
  // }
  return User;
};