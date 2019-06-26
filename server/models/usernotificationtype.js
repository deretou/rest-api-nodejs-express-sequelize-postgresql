'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserNotificationType = sequelize.define('UserNotificationType', {
    name: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter the name'
      }
    },
    uuid: DataTypes.UUID,
    description: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter the description'
      }
      
    }
  }, {});
  UserNotificationType.associate = function(models) {
    // associations can be defined here
    UserNotificationType.hasMany(models.UserNotification, {
      foreignKey: 'notifTypeID',
    });
  };
  return UserNotificationType;
};