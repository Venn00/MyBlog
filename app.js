"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const home = require("./src/routers/home");

app.set("views", `${__dirname}/src/views`);
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`)); //기본 경로 설정


app.use("/",home);

module.exports = app;