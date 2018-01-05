const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const Users = require('../models/user')
const Passport = require('passport')

/* SIGNUP. */
router.post('/signup', (req, res, next) => {
  let data = req.body.data;
  let usernameAvailable = true;
  Users.find({}, 'username', (err, user) => {
    if (err) {
      console.log("Failed getting user in signin")
      return;
    }
    for (let i = 0; i < user.length; i++) {
      if (user[i].username == data.username) {
        usernameAvailable = false;
        console.log('avialable username');
        return false;
      }
    }
  })

  setTimeout(() => {
    if (usernameAvailable) {
      let newUser = new Users();
      newUser.username = data.username;
      newUser.email = data.email;
      newUser.password = data.password;
      newUser.storeName = data.storeName;
      newUser.storeAddress = data.storeAddress;
    
      bcrypt.genSalt(10, (err, salt) => {
        if (err) console.log("Failed generating salt bcrypt")
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) {
            console.log("Error hashing password")
            return
          }
          newUser.password = hash
          newUser.save((err) => {
            if (err) {
              console.log("Error saving user into mongo")
              return;
            }
            res.send({userRegistered: true, usedUsername: false})
          })
        })
      })
    }
    else {
      res.send({usedUsername: true, userRegistered: false})
    }
  }, 100)
});

//Login Post
router.post('/signin', Passport.authenticate('local'), (req, res, next) => {
  if (req.user) {
    res.send({login: true, user: req.user});
  }
});

router.get('/signout', (req, res) => {
  req.logout()
  req.session.destroy();
  res.send()
})

module.exports = router;