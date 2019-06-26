'use strict';
module.exports = (sequelize, DataTypes) => {
  const Inventory = sequelize.define('Inventory', {
    productID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Product',
        key: 'id',
        as: 'productID',
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
    settingDate: DataTypes.DATE,
    selectionID: DataTypes.INTEGER,
    quantityInStock: DataTypes.INTEGER
  }, {});
  Inventory.associate = function(models) {
    // associations can be defined here

     Inventory.belongsTo(models.Healthbot, {
       foreignKey: 'healthbotId',
       onDelete: 'CASCADE'
     });

     Inventory.belongsTo(models.Product, {
       foreignKey: 'productID',
       onDelete: 'CASCADE'
     });

  };
  return Inventory;
};