const mongoose = require('mongoose');
const User = require('./User');

mongoose.connect('mongodb://localhost:27017/appdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

console.log('connected');

const user = new User({ name: 'Slav', age: 28 });
user.save().then(() => console.log('user saved'));
