// 'use strict';

module.exports = (req, res, next) => {
  req.query.name ? next() : req.query.name === '' ? next('errrorrr') : null;
}



