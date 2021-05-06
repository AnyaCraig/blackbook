const express = require('express');

const usersRouter = express.Router();

usersRouter.route('/')
  .get((req, res, next) => {
    res.json({
      data: {
        payload: 'This will eventually serve users'
      }
    })
  });

module.exports = usersRouter;
