
const express = require('express');
const Address = require('../models/Address');
// const { get } = require('mongoose');

const addressesRouter = express.Router();

addressesRouter.route('/')

  .get( async (req,res, next) => {

    try {
      const docs = await Address.find();

      console.log("DOCS", docs);
      res.status(200).send(docs);

  } catch(err) {
      console.log(err);
      next(err);
    }
  })
  .post((req,res) => {

    res.json({
      data: {
        path: req.path,
        method: req.method,
        payload: req.body,
      }
    })
  });

module.exports = addressesRouter;