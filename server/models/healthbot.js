'use strict';
module.exports = (sequelize, DataTypes) => {
  const Healthbot = sequelize.define('Healthbot', {
    codeid: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter the codeid'
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter the name'
      }
    },
    location: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter the location'
      }
    },
    installdate: DataTypes.DATE,
    timestamp: DataTypes.INTEGER,
    status: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter the status'
      }
    },
    serialnumber: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter the serial number'
      }
    }
  }, {});
  Healthbot.associate = function(models) {
    // associations can be defined here
     Healthbot.hasMany(models.HealthbotEvent, {
       foreignKey: 'healthbotId',
     });

     Healthbot.hasMany(models.Inventory, {
       foreignKey: 'healthbotId',
     });
  };
  return Healthbot;
};