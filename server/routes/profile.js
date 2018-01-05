const express = require('express');
const router = express.Router();
const Item = require('../models/item');
const User = require('../models/user');
const LatestItems = require('../models/latestItems');


router.get('/', (req, res) => {
  const path = req._parsedOriginalUrl.path;
  const username = path.substring(1, path.length)
  User.findOne({username: username}, (err, user) => {
    if (err) {
      console.log("Failed getting user in get profile")
      return;
    }
    if (user === null) {
      res.send({userNotFound: true})
      return;
    }
    if (req.isAuthenticated()) {
      if (req.user.username === user.username) {
        res.send({user: user, isOwner: true, isLoggedIn: req.isAuthenticated()})
        return;
      }
    }
    res.send({user: user, isOwner: false, isLoggedIn: req.isAuthenticated()})
  })
})


// GET ITEMS OF USER
router.get('/items', (req, res) => {
  const username = (req._parsedOriginalUrl.path).split('/')[1];
  User.findOne({username: username}, (err, user) => {
    if (err) {
      console.log("Failed getting user to get their items");
      return;
    }
    let counter = 0;
    let lengthOfItems = user.items.length;
    let arrayOfItems = [];
    
    user.items.forEach(element => {
      Item.findById(element, (err, item) => {
        if (err) {
          console.log("Failed getting item for specific user")
        }
        counter++;
        arrayOfItems.push(item);
        if (counter === lengthOfItems) {
          res.send({items: arrayOfItems});
        }
      })
    });
  })
})


// UPDATE PROFILE INFO
router.post('/update', (req, res) => {
  let body = req.body;
  if (req.isAuthenticated() && (req.user.username === req.body.oldInfo.username)) {
    User.findOne({username: body.username}, (err, user) => {
      if (err) {
        console.log("Failed finding user in update profile")
        return;
      }
      if (user !== null && user.username !== body.oldInfo.username) {
        res.send({usernameAvailable: true})
        return
      } else {
        let updatedInfo = {
          username: body.username, email: body.email, storeName: body.storeName, storeAddress: body.storeAddress
        }
        User.update({username: req.user.username}, updatedInfo, (err) => {
          if (err) {
            console.log("Failed Updating User Info");
            return;
          }
          // console.log(body.username);
          res.send({updated: true})
        })
      }
    })
  }
})


// ADD NEW ITEM
router.post('/additem', (req, res) => {
  if (!req.isAuthenticated()) {
    console.log("No user logged in in additem")
    return;
  }
  const data = req.body.data
  
  User.findOne({username: req.user.username}, (err, currentUser) => {
    if (err) {
      console.log("Failed finding user in additem")
      return;
    }

    console.log(data.tags)
    let newItemSchema = new Item();
    newItemSchema.itemName = data.name;
    newItemSchema.itemPrice = data.price;
    newItemSchema.itemCity = data.city;
    newItemSchema.itemTags = data.tags;
    newItemSchema.itemColor = data.color;
    newItemSchema.itemOwner = currentUser._id;
    newItemSchema.itemOwnerUsername = currentUser.username;

    newItemSchema.save((err, item) => {
      if (err) {
        console.log("Failed saving new item");
        return;
      }
      currentUser.items.push(item._id);
      currentUser.save((err) => {if (err) console.log("Failed saving itemId in user")});
      let newLatestItem = new LatestItems();
      newLatestItem.userId = currentUser._id;
      newLatestItem.itemId = item._id;
      newLatestItem.save((err) => {if (err) console.log("Failed adding new latest item")})
    })
  })
})


// GET SINGLE ITEM
router.get('/:item', (req, res) => {
  const itemId = req.params.item;
  Item.findById(itemId, (err, item) => {
    if (err) {
      console.log("Failed getting item in username/item")
      return;
    }
    let itemOwnerLoggedIn = false;
    if (req.isAuthenticated() && item.itemOwner == req.user._id)
      itemOwnerLoggedIn = true;
    res.send({item: item, isOwner: itemOwnerLoggedIn})
  })
})


// DELETE ITEM
router.post('/:item/delete', (req, res) => {
  if (req.isAuthenticated()) {
    let itemBody = req.body.item;
    if (itemBody.itemOwner == req.user._id) {
      Item.remove({_id: itemBody._id}, (err) => {
        let deleted = false;
        if (err) {
          console.log("Failed deleting item")
          deleted = false;
        } else
          deleted = true;
          LatestItems.remove({itemId: itemBody._id}, (err) => {if (err) console.log("Failed removing latestitem")})
          User.findOne({username: itemBody.itemOwnerUsername}, (err, user) => {
            if (err) {
              console.log("Failed getting user in delete item")
              return;
            }
            const userItems = user.items;
            const index = userItems.indexOf(itemBody._id);
            userItems.splice(index, 1);
            user.save((err) => {if (err) console.log("Failed saving user in delete item")})
          })
        res.send({deleted: deleted})
      })
    }
  }
})
 
module.exports = router;