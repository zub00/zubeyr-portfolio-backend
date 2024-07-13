'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Add 'createdAt' column
    await queryInterface.addColumn('contacts', 'createdAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    });

    // Add 'updatedAt' column
    await queryInterface.addColumn('contacts', 'updatedAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
    });

    // Remove 'message' column
    await queryInterface.removeColumn('contacts', 'message');
  },

  down: async (queryInterface, Sequelize) => {
    // Remove 'createdAt' column
    await queryInterface.removeColumn('contacts', 'createdAt');

    // Remove 'updatedAt' column
    await queryInterface.removeColumn('contacts', 'updatedAt');

    // Add 'message' column back
    await queryInterface.addColumn('contacts', 'message', {
      type: Sequelize.STRING,
      allowNull: true
    });
  }
};
