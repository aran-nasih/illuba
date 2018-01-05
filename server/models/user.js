const mongoose = require('mongoose')
const Item = require('./item')

let userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },

  email: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  storeName: {
    type: String,
    required: true
  },

  storeAddress: {
    type: String,
    required: true
  },

  items: [{
    type: String
  }]

})

let user = module.exports = mongoose.model('user', userSchema)