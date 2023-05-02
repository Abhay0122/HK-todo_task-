module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("task", {
    desc: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
      default: "false",
    },
  });

  return Product;
};
