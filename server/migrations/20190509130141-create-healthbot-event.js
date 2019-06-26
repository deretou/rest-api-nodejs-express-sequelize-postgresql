'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('HealthbotEvents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      uuid: {
         allowNull: false,
        type: Sequelize.UUID
      },
      healthbotId: {
          type: Sequelize.INTEGER,
          onDelete: 'CASCADE',
          references: {
            model: 'Healthbots',
            key: 'id',
            as: 'healthbotId',
          }
        },
        eventdate: {
          type: Sequelize.DATE
        },
        description: {
          type: Sequelize.STRING
        },
        healthbotEventTypeId: {
          type: Sequelize.INTEGER,
          onDelete: 'CASCADE',
          references: {
            model: 'HealthbotEventTypes',
            key: 'id',
            as: 'healthbotEventTypeId',
          }
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
    return queryInterface.dropTable('HealthbotEvents');
  }
};