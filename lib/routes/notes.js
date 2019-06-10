const { Router } = require('express');
const Note = require('../models/Note');

module.exports = Router()
  .get('/', (req, res, next) => {
    try {
      res.send('poop');
    } catch(e) {
      next(e);
    }
  });
