'use strict';
const seed = require('../seedGenerate')
module.exports = {
  up: (queryInterface, Sequelize) => {
    return seed.generate(2000, 1983, 10)
      .then(data => {
        console.log(data)
        return queryInterface.bulkInsert('Users', data, {})
      })
      .catch(err => {
        console.log(err)
      })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Users', null, {});
  }
};