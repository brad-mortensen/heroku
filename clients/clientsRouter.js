const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send(`Get /clients`);
});

router.get('/:id', (req, res) => {
  res.send(`Get /api/clients/${req.params.id}`);
});


module.exports = router;