'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserNotification = sequelize.define('UserNotification', {
    uuid: DataTypes.UUID,
    description: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter the name'
      }
    },
    userID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
        as: 'userID',
      }
    },
    notifTypeID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'UserNotificationType',
        key: 'id',
        as: 'notifTypeID',
      }
    },
    dateNotif: DataTypes.DATE,
    read: {
        type: DataTypes.BOOLEAN,
        allowNull: {
          args: false
        }
      }
  }, {});
  UserNotification.associate = function(models) {
    // associations can be defined here

      UserNotification.belongsTo(models.UserNotificationType, {
        foreignKey: 'notifTypeID',
        onDelete: 'CASCADE'
      });

      UserNotification.belongsTo(models.User, {
          foreignKey: 'userID',
          onDelete: 'CASCADE'
        });

  };

  return UserNotification;
};