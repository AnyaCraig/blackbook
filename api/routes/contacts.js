
const express = require('express');
const Contact = require('../models/Contact');
// const { get } = require('mongoose');

const contactsRouter = express.Router();

contactsRouter.route('/')

  .get( async (req,res, next) => {

    try {
      const docs = await Contact.find();

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

module.exports = contactsRouter;