'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserGroup = sequelize.define('UserGroup', {
    uuid: DataTypes.UUID,
    name: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter the name'
      }
    },
    groupCreationDate: DataTypes.DATE,
    description: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter the description'
      }
    },
    observation: DataTypes.TEXT
  }, {});
  UserGroup.associate = function(models) {
    // associations can be defined here
  };
  return UserGroup;
};