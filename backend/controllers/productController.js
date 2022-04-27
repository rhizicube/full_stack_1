const express = require("express");
const productsModel = require("../models/productModel");
const con = require("../util/database");

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

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
      //console.log(result);
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.status(200).send({ "success":true, data: result  });
      res.end();
      //return;
    }).catch(err => {
      console.log(err);
    });
   
  };

  exports.getProductsByName = function (req, res, next) {
    let name = req.params.name;
    console.log(name);
   let a = productsModel.findAll({where:{name: {[Op.substring]: req.params.name}}}).then(result => {
      console.log("Hii",result);
      if(result.length){
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(200).send({ "success":true, data: result  });
        res.end();
      }
      else{
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(200).send({ "success":true, data: "No Data Found"});
        res.end();
      }
     
      //return;
      
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