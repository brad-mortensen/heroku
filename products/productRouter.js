const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send(`Get /products`);
});

router.get('/:id', (req, res) => {
  res.send(`Get /api/products${req.params.id}`);
});


module.exports = router;