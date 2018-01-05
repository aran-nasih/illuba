const mongoose = require('mongoose');

let latestItemsSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true
  },

  itemId: {
    type: String,
    required: true
  }
})

let latestItems = module.exports = mongoose.model('latestItems', latestItemsSchema);