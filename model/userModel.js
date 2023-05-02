module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("user", {
    name: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
  });

  return Product;
};
