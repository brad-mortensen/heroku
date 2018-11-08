const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send(`Get /orders`);
});

router.get('/:id', (req, res) => {
  res.send(`Get /api/orders/${req.params.id}`);
});


module.exports = router;