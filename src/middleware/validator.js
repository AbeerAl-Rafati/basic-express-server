// 'use strict';

module.exports = (req, res, next) => {
  if (req.query.name) {
    next()
  } else if (req.query.name === '') {

    next('errrorrr');
  }
}


