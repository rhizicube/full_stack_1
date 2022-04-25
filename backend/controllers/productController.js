const express = require("express");
const productsModel = require("../models/productModel");
const con = require("../util/database");

exports.createProduct = function (req, res, next) {
  const name = req.body.name;
  const type = req.body.type;
  const releaseDate = req.body.releaseDate;
  const imgUrl = req.body.imgUrl;
  const description = req.body.description;
  productsModel.create({
    name: name,
    type: type,
    releaseDate: releaseDate,
    imgUrl: imgUrl,
    description: description
  }).then(result => {
    console.log(result);
    res.send({ data: result });
  }).catch(err => {
    console.log(err);
  })
};

exports.getAllProducts = function (req, res, next) {
    productsModel.findAll().then(result => {
      console.log(result);
      res.send({ data: result });
    }).catch(err => {
      console.log(err);
    });
    
  };
  
  exports.getProductById = function (req, res, next) {
    const name = req.params.name;
    productsModel.findAll({where: {name: name}}).then(resp => {
      console.log(resp[0].name);
      res.send({ data: resp });
  
    }).catch(err => {
      console.log(err);
    });
  };