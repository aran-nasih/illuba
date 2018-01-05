var express = require('express');
var router = express.Router();
let Item = require('../models/item');
let User = require('../models/user');
let LatestItems = require('../models/latestItems');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getuser', (req, res) => {
  if (req.isAuthenticated()) {
    res.send({user: req.user, isLoggedIn: true});
    return;
  }
  res.send();
});

// Get specific item
router.get('/item/:itemid', (req, res) => {
  Item.findById(req.params.itemid, (err, item) => {
    if (err) {
      console.log("nabu");
      return;
    }
    console.log(item)
  })
})

// GET ITEMS FOR HOME
router.get('/getitems', (req, res) => {
  LatestItems.find({}, (err, latestItems) => {
    if (err) {
      console.log("Failed getting latest items in getitem route")
      return;
    }
    let arrayOfItems = [];
    latestItems.forEach((currentLatestItems) => {
      Item.findById(currentLatestItems.itemId, (err, item) => {
        if (err) {
          console.log("Failed getting item from latestItem itemId");
          return;
        }
        arrayOfItems.push(item);
      })
    })
    
    setTimeout(() => {
      res.send({items: arrayOfItems})
    }, 10)
  })  
})

module.exports = router;
