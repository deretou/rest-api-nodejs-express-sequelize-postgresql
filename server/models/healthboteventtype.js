'use strict';
module.exports = (sequelize, DataTypes) => {
  const HealthbotEventType = sequelize.define('HealthbotEventType', {
    name: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter the name'
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter the description'
      }
    },
    securityLevel: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter the securityLevel'
      }
    }
  }, {});
  HealthbotEventType.associate = function(models) {
    // associations can be defined here
    HealthbotEventType.hasMany(models.HealthbotEvent, {
      foreignKey: 'healthbotEventTypeId',
    });
  };
  return HealthbotEventType;
};