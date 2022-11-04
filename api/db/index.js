const Sequelize = require("sequelize");

const db = new Sequelize("tmdb_p5", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = db;