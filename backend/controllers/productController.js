const express = require("express");
const productsModel = require("../models/productModel");
const con = require("../util/database");

// const Sequelize = require('sequelize');
// const Op = Sequelize.Op;

exports.createProduct = function (req, res, next) {
  let reqBody = req.body;
  let arrval = [
    req.body.name,
    req.body.type,
    req.body.releaseDate,
    req.body.imgUrl,
    req.body.description,
    req.body.id,
  ];

  const insertData =
    "insert into movies (name, type, releaseDate, imgUrl, description, id) values (?,?,?,?,?,?)";
  con.query(insertData, arrval, (err, rows) => {
    if (err) throw err;
    res.send({ data: rows });
  });
};
exports.getAllProducts = function (req, res, next) {
  const queries = "select * from movies";
  con.query(queries, (err, rows) => {
    console.log(rows);
    if (err) throw err;
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).send({ success: true, data: rows });
    res.end();
  });
};
exports.getProductsByName = function (req, res, next) {
  let name = req.params.name;
  console.log(name);
  const queries =
    "select * from movies where name like" +
    con.escape("%" + req.params.name + "%");
  console.log(queries);
  con.query(queries, [req.params.name], (err, rows) => {
    console.log("hello");
    console.log(rows);
    if (err) throw err;
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).send({ success: true, data: rows });
    res.end();
  });
};

// exports.getAllProducts = function (req, res, next) {
//     productsModel.findAll().then(result => {
//       //console.log(result);
//       res.setHeader('Content-Type', 'application/json');
//       res.setHeader('Access-Control-Allow-Origin', '*');
//       res.status(200).send({ "success":true, data: result  });
//       res.end();
//       //return;
//     }).catch(err => {
//       console.log(err);
//     });

//   };

//   exports.getProductsByName = function (req, res, next) {
//     let name = req.params.name;
//     console.log(name);
//    let a = productsModel.findAll({where:{name: {[Op.substring]: req.params.name}}}).then(result => {
//       console.log("Hii",result);
//       if(result.length){
//         res.setHeader('Content-Type', 'application/json');
//         res.setHeader('Access-Control-Allow-Origin', '*');
//         res.status(200).send({ "success":true, data: result  });
//         res.end();
//       }
//       else{
//         res.setHeader('Content-Type', 'application/json');
//         res.setHeader('Access-Control-Allow-Origin', '*');
//         res.status(200).send({ "success":true, data: "No Data Found"});
//         res.end();
//       }

//       //return;

//     }).catch(err => {
//       console.log(err);
//     });

//   };

//   exports.getProductById = function (req, res, next) {
//     const name = req.params.name;
//     productsModel.findAll({where: {name: name}}).then(resp => {
//       console.log(resp[0].name);
//       res.send({ data: resp });

//     }).catch(err => {
//       console.log(err);
//     });
//   };
