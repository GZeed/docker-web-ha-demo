const express = require('express');
const  router = express.Router();
const generateName = require('sillyname');
const sillyName = generateName();

let counter = 0;


module.exports = function (app) {
  app.use('/', router);
};

router.get('/data', function(req, res, next) {
  counter += 1;
  console.log(counter);
  const payload = {
    waiter: sillyName,
    counter: counter
  }
  return res.json(payload);
});

router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Demo',
  });
});
