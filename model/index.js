const dbConfig = require("../db/config");

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
});
sequelize
  .authenticate()
  .then(() => {
    console.log("connected..");
  })
  .catch((err) => {
    console.log("Error" + err);
  });
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require("./userModel")(sequelize, DataTypes);
db.task = require("./taskModel")(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log("yes re-sync done!");
});

db.user.hasMany(db.task, {
  foreignKey: "user_id",
  as: "task", 
});

db.task.belongsTo(db.user, {
  foreignKey: "user_id",
  as: "user", 
});

module.exports = db;
