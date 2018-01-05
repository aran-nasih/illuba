const express = require('express');
const router = express.Router();
const Item = require('../models/item')
const User = require('../models/user')

// GET HASHTAG
router.post('/gettag', (req, res) => {
  Item.find({itemTags: req.body.hashtag}, (err, items) => {
    if (err) {console.log("Failed getting hashtag"); return;}
    res.send({items: items})
  })
})


// GET QUERY SEARCH
router.post('/getquery', (req, res) => {
  const query = req.body.query;
  User.find( {$or:[{storeName: query}, {username: query}] }, (err, users) => {
    Item.find({itemName: query}, (err, items) => {
      console.log(users);
      res.send({items: items, profiles: users})
    })
  })
})

module.exports = router;