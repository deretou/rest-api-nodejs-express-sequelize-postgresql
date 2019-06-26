'use strict';
module.exports = (sequelize, DataTypes) => {
  const HealthbotEvent = sequelize.define('HealthbotEvent', {
    uuid: {
      type: DataTypes.UUID,
      allowNull: {
        args: false
      }
    },
    healthbotId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Healthbot',
          key: 'id',
          as: 'healthbotId',
        }
      },
      eventdate: DataTypes.DATE,
      description: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
          msg: 'Please enter the description'
        }
      },
      healthbotEventTypeId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'HealthbotEventType',
          key: 'id',
          as: 'healthbotEventTypeId',
        }
      }
    }, {});
    HealthbotEvent.associate = function (models) {
      // associations can be defined here
      HealthbotEvent.belongsTo(models.HealthbotEventType, {
        foreignKey: 'healthbotEventTypeId',
        onDelete: 'CASCADE'
      });

      HealthbotEvent.belongsTo(models.Healthbot, {
        foreignKey: 'healthbotId',
        onDelete: 'CASCADE'
      });
    };
  return HealthbotEvent;
};