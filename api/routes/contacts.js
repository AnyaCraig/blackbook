
const express = require('express');
const Contact = require('../models/Contact');


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
  .post(async (req,res) => {

    res.json({
      data: {
        path: req.path,
        method: req.method,
        payload: req.body,
      }
    })
  });

  contactsRouter.route('/:id')
  .delete(async (req,res, next) => {
    const { id } = req.params;

    try {
      const doc = await Contact.findByIdAndDelete(id);
      res.status(204).send(doc)
    } catch (e) {
      next(e)
    }
  });

module.exports = contactsRouter;