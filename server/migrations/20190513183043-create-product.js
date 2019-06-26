'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productID: {
        allowNull: false,
        type: Sequelize.UUID
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      expireDate: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      categoryID: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'ProductCategories',
          key: 'id',
          as: 'categoryID',
        }
      },/*
      supplierID: {
        type: Sequelize.INTEGER
      },*/
      unitPrice: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      quantityInStock: {
        type: Sequelize.INTEGER
      },
      pictureType: {
          type: Sequelize.STRING
        },
      pictureName: {
          type: Sequelize.STRING
        },
      pictureData: {
          type: Sequelize.BLOB('long')
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
    return queryInterface.dropTable('Products');
  }
};