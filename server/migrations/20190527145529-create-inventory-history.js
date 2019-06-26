'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('InventoryHistories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      inventoryID: {
        type: Sequelize.INTEGER
      },
      productID: {
        type: Sequelize.INTEGER
      },
      healthbotID: {
        type: Sequelize.INTEGER
      },
      settingDate: {
        type: Sequelize.DATE
      },
      selectionID: {
        type: Sequelize.INTEGER
      },
      quantityInStock: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('InventoryHistories');
  }
};