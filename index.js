const mongoose = require('mongoose');
const User = require('./User');

mongoose.connect('mongodb://127.0.0.1:27017/appdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true})
  .then(console.log('connection to db is successfull'));

const user = new User({ name: 'Slav1', age: 29 });
user.save()
  .then(() => console.log('user saved'))
  .catch((error) => console.error(error))
  .finally(() => mongoose.disconnect());