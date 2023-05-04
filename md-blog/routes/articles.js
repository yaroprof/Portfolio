//  це набір маршрутів, які обробляють HTTP-запити, що стосуються статей.
const express = require('express');
const router = express.Router();

router.get('/new', (req, res) => {
  res.render('articles/new')
});

router.post('/', (req, res) =>{

})

module.exports = router;
