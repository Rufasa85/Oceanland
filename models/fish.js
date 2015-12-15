var mongoose = require('mongoose');

var FishSchema = mongoose.Schema({
  name: String,
  creator: mongoose.Schema.Types.ObjectId,
  picture: String,
  edible: Boolean
});

module.exports = mongoose.model('Fish', FishSchema);