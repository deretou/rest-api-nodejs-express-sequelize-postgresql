'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductCategory = sequelize.define('ProductCategory', {
    uuid: DataTypes.UUID,
    name: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter the name'
      }
    },
    categoryCreationDate: DataTypes.DATE,
    description: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter the description'
      }
    },
     pictureType: {
         type: DataTypes.STRING
       },
    pictureName: {
         type: DataTypes.STRING
       },
    pictureData: {
         type: DataTypes.BLOB
       },
    observation: DataTypes.TEXT
  }, {});
  ProductCategory.associate = function(models) {
    // associations can be defined here

     ProductCategory.hasMany(models.Product, {
        foreignKey: 'categoryID',
      });

  };
  return ProductCategory;
};