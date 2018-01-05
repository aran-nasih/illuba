const Mongoose = require('mongoose');

// Create schema
let itemSchema = Mongoose.Schema({
  itemName: {
    type: String,
    require: true
  },

  itemPrice: {
    type: Number,
    require: true
  },
  
  itemCity: {
    type: String,
    require: true
  },
  
  itemTags: [String],
  
  itemColor: {
    type: String,
    require: false
  },

  itemOwner: {
    type: String,
    required: true
  },

  itemOwnerUsername: {
    type: String,
    required: true
  },
});

// Export
let item = module.exports = Mongoose.model('item', itemSchema);