require("dotenv").config();
const express = require("express"),
  PORT = process.env.PORT || 4000,
  db = require("./db"),
  app = express();

app.listen(PORT, () => {
  console.log(`API SERVER RUNNING AT http://localhost:${PORT}`);
});
