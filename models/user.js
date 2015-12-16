var mongoose = require('mongoose');
var bcrypt   = require('bcrypt');
var validate = require('mongoose-validator');

var emailValidator = validate({validator: 'isEmail'});

var UserSchema = mongoose.Schema({
  username:{ type: String, required: true},
  email: { type: String, required: true, unique: true, validate:emailValidator },
  password: { type: String, required: true, minlength:8}
});

UserSchema.set('toJSON', {
  transform: function(doc, ret, options) {
    var returnJson = {
      id: ret._id,
      email: ret.email,
      username: ret.username,
    };
    return returnJson;
  }
});

UserSchema.methods.authenticated = function(password, callback) {
  bcrypt.compare(password, this.password, function(err, res) {
    if (err) {
      callback(err);
    } else {
      callback(null, res ? this : false);
    }
  });
};

UserSchema.pre('save', function(next) {
  if (!this.isModified('password')) {
    next();
  } else {
    this.password = bcrypt.hashSync(this.password, 10);
    next();
  }
});

module.exports = mongoose.model('User', UserSchema);
