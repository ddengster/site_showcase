
const express = require('express');
const cors = require('cors');
const bp = require('body-parser');
const bcrypt = require('bcryptjs');
// import express from 'express';
// import * as cors from 'cors';
// import * as bp from 'body-parser';
// import * as bcrypt from 'bcryptjs';

// import { verify_jwt, sign_jwt } from './auth';
const auth = require('./auth');

//@todo: change this number in production
var salt = bcrypt.genSaltSync(12);

const app = express();
app.use(bp.json()); 
app.use(bp.urlencoded({ extended: true }));
app.use(cors());

// function for jwt verification that you can use for routes, eg. see /user_chart
// reference: https://www.npmjs.com/package/jsonwebtoken
function jwt_verification(req, res, next) {
  const header_token = req.headers.token;
  // console.log("header_token: " + header_token);
  
  if (header_token) {
    // jwt headers are in the format "Bear {jwt_token}", so split it up
    const jwt_token = header_token.split(" ")[1];
    // console.log(jwt_token);

    var verified = auth.verify_jwt(jwt_token);
    if (!verified)
      res.status(403).json("Invalid token");
      
    next(); //continue onwards with whichever route you supply this function with
  } else {
    return res.status(401).json("NOT AUTHENTICATED");
  }
}

// Login route
app.post('/login', (req, res) => {
  // this should be replaced by a jwt token with an expiry
  if (!req.is("application/json"))
    return res.status(400).send("Wrong content-type");
  if (req.body.username == undefined || req.body.password == undefined)
    return res.status(400).send("Required fields not found");

  // console.log(req.body);
  // console.log(req.body.username);
  // console.log(req.body.password);
  
  // @note:
  
  // the server should be have a https layer above it otherwise you'll be sending
  // a plaintext password!
  // alternatively read this if you dont want to send plaintext passwords at all:
  // https://stackoverflow.com/questions/11580944/client-to-server-authentication-in-c-using-sockets

  // code to hash and store the password in db
  // var encrpytedPwd = bcrypt.hashSync(req.body.password, salt);
  // console.log(encrpytedPwd);
  
  var hashed_password = "$2a$12$U6Vs7zWIdCogL7/fqK1eVeIIRs8p05M5CLY4b6QC2dbxgvTmy3HWm";
  var valid = bcrypt.compareSync(req.body.password, hashed_password);
  
  //@todo: replace this with db search in production
  //credientials demo/123
  if (req.body.username == "demo" && valid)
  {
    // sign with userid, and the server's secret key
    const jwt_access_token = auth.sign_jwt();
    res.status(200).send({ token: jwt_access_token }); 
  }
  else
    res.status(403).send("Invalid credientials");
});

// user_chart restricted route
app.use('/user_chart', jwt_verification, (req, res) => {
  const data = [
    {
      name: 'A',
      uv: 100,
      pv: 100,
      amt: 200
    },
    {
      name: 'B',
      uv: 2000,
      pv: 300,
      amt: 400
    },
    {
      name: 'C',
      uv: 500,
      pv: 600,
      amt: 700
    },
    {
      name: 'D',
      uv: 1100,
      pv: 1200,
      amt: 2400
    },
  ];
  res.send(data);
});

app.listen(8080, () => console.log("API running on http://localhost:8080/"));

