const express = require("express");
const app = express();
const cors = require("cors");
const controllers = require("./controllers");

require("dotenv").config();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/dist")));
const db = require("./db");

app.listen(port, () => {
  db.connectToServer((err) => {
    if (err) {
      console.error(err);
    }
  });
  console.log(`Server is running on port: ${port}`);
});
