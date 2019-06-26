'use strict';
module.exports = (sequelize, DataTypes) => {
  const InventoryHistory = sequelize.define('InventoryHistory', {
    inventoryID: DataTypes.INTEGER,
    productID: DataTypes.INTEGER,
    healthbotID: DataTypes.INTEGER,
    settingDate: DataTypes.DATE,
    selectionID: DataTypes.INTEGER,
    quantityInStock: DataTypes.INTEGER
  }, {});
  InventoryHistory.associate = function(models) {
    // associations can be defined here
  };
  return InventoryHistory;
};