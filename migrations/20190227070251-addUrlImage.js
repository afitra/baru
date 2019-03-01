'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
     return queryInterface.addColumn(
       'Users','UrlImage',{type: Sequelize.STRING})
  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.removeColumn('Users','UrlImage',{})
  }
};
