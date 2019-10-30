'use strict';

module.exports = {
  up: function(queryInterface, Sequelize)  {
    return queryInterface.bulkInsert('Groups', [{
      group: 'Akit-17'
    },
    {
      group: 'Kn-17'
    }], {});
  },

  down: function(queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
