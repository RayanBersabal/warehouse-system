'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      items.hasMany(models.stockIn, { as: 'stockin', foreignKey: 'itemDataId',});
      items.hasMany(models.stockOut, { as: 'stockout', foreignKey: 'itemDataId',});
      items.belongsTo(models.categories, {as: 'category', foreignKey: 'categoryId'});
    }
  };
  items.init({
    name: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'items',
  });
  return items;
};