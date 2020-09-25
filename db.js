const { Pool } = require("pg");

const db = new Pool({
  user: PGUSER,
  password: PGPASSWORD,
  database: PGDATABASE,
  host: PGHOST,
  port: PGPORT,
});

module.exports = db;
