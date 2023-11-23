const express = require("express");
const app = express();
var cors = require("cors");

const apiRouter = require("./routes/api.js");


app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: false }));

app.use(cors()); 

app.use("/api", apiRouter);

module.exports = app;
