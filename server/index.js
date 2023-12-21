const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const router = require("./router");
const controllers = require("./controllers");

require("dotenv").config();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use("/", router);

app.listen(port);
console.log(`Listening at http://localhost:${port}`);
