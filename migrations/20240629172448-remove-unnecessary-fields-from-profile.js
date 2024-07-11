'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Profiles', 'dateOfBirth');
    await queryInterface.removeColumn('Profiles', 'address');
    await queryInterface.removeColumn('Profiles', 'willingToRelocate');
    await queryInterface.removeColumn('Profiles', 'ownACar');
    await queryInterface.removeColumn('Profiles', 'immigrationStatus');

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Profiles', 'dateOfBirth', {
      type: Sequelize.DATEONLY,
    });
    await queryInterface.addColumn('Profiles', 'address', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('Profiles', 'willingToRelocate', {
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn('Profiles', 'ownACar', {
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn('Profiles', 'immigrationStatus', {
      type: Sequelize.STRING,
    });
  }
};
