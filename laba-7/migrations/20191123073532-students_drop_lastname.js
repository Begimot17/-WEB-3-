'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'Students',
      'lastname'
    );
  },

  down: function(queryInterface, Sequelize) {
    
  }
}
