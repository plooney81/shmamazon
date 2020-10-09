var express = require('express');
var router = express.Router();
const db = require('../models');

/* GET users listing. */
router.get('/register', function(req, res, next) {
  res.render('users/register');
});

router.post('/register', (req, res)=>{
  const { firstName, lastName, email } = req.body
  db.User.create({
    first_name: firstName,
    last_name: lastName,
    email: email
  })
  .then((user)=>{
    res.json(user);
  })
})

// router.get('/orders', (req, res)=>{
//   db.Orders.findAll()
//     .then((orders)=>{
//       res.render('users/orders', {
//         locals:{
//           orders: orders
//         }
//       });
//     })
// })
module.exports = router;
