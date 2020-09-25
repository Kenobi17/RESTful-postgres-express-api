require("dotenv").config();
const express = require("express"),
  PORT = process.env.PORT || 4000,
  app = express();

app.listen(PORT, () => {
  console.log(`API SERVER RUNNING AT http://localhost:${PORT}`);
});
