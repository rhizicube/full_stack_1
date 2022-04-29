const createError = require("http-errors");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
//app.use(express.json());
const productRouter = require("./routes/productRouter");
const sequelize = require("./util/database");
var cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use('/products', productRouter);

app.use(function (req, res, next) {
    next(createError(404));
  });
  
  app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
  
    res.status(err.status || 500);
    res.send("error");
  });

  // sequelize.sync()
  // .then((result) => {
  //   // console.log(result);
  //   app.listen(8000);
  // })
  // .catch((err) => {
  //   console.log(err);
  // });
   app.listen(8000);

  module.exports = app;
