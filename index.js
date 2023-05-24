const mongoose = require('mongoose');
const User = require('./User');
const url = "mongodb+srv://mongo-admin:pass@cluster0.b0wdnst.mongodb.net/todoListDB";
//mongodb-admin = username, pass = password, todolistDB = db name
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true})
  .then(console.log('mongoose connection to db is successfull'));

const user = new User({ name: 'Slav1', age: 29 });
user.save()
  .then(() => console.log('mongoose user saved'))
  .catch((error) => console.error(error))
  .finally(() => mongoose.disconnect());