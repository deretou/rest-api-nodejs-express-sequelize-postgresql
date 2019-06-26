'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    productID: DataTypes.UUID,
    name: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter the name'
      }
    },
    expireDate: DataTypes.DATE,
    categoryID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'ProductCategory',
        key: 'id',
        as: 'categoryID',
      }
    },
    //supplierID: DataTypes.INTEGER,
    unitPrice: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter the price'
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter the description'
      }
    },
    quantityInStock: DataTypes.INTEGER,
    pictureType: {
        type: DataTypes.STRING
      },
      pictureName: {
        type: DataTypes.STRING
      },
      pictureData: {
        type: DataTypes.BLOB
      }
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
     Product.belongsTo(models.ProductCategory, {
       foreignKey: 'categoryID',
       onDelete: 'CASCADE'
     });

    Product.hasMany(models.Inventory, {
        foreignKey: 'productID',
      });

  };
  return Product;
};