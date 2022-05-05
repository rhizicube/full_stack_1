const express = require("express");
const userModel = require("../models/userModel");
const con = require("../util/database");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

const Sequelize = require("sequelize");
const Op = Sequelize.Op;

exports.createUser = async function (req, res, next) {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  console.log(firstName);
  if (!(email && password && firstName && lastName)) {
    res.status(400).send("All input is required");
  }

    // const oldUser = await userModel.findOne( {where:{email: req.body.email}} );
    // if (oldUser) {
    //   return res.status(409).send("User Already Exist. Please Login");
    // }

  //Encrypt user password
  encryptedPassword = await bcrypt.hash(password, 10);
  console.log("Hi user");
  userModel
    .create({
      firstName: firstName,
      lastName: lastName,
      email: email.toLowerCase(),
      password: encryptedPassword
    })
    
    .then((result) => {
      console.log(result);
      res.send({ data: result });
    })
    .catch((err) => {
      console.log(err);
    });
    const token = jwt.sign(
        { userModel_id: userModel._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      // save user token
      userModel.token = token;
};
