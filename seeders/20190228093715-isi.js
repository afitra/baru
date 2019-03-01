'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});

    */
    let arr = [{
      WomenId: 1,
      MenId: 1,
      Appointment: 'kediri',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      WomenId: 1,
      MenId: 1,
      Appointment: 'kediri',
      createdAt: new Date(),
      updatedAt: new Date()
    }]
    return queryInterface.bulkInsert("TemanKencans", arr, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('TemanKencans', null, {});
  }
};