module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: process.env.PASSWORD, 
  DB: process.env.DATABASE,
  dialect: "mysql",
};

// NOTE:[IMP]
// * You have to create a table(schema) with the same name as you provided in 'DB'.
// * You have to write your own mysql workbench password in the 'PASSWORD'

