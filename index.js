const mongoose = require('mongoose');
const express = require('express');
const User = require('./User');
const app = express();

app.use(express.urlencoded({extended: true}));



mongoose.connect('mongodb://127.0.0.1:27017/appdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true})
  .then(console.log('connection to db is successfull'));

/* const user = new User({ name: 'Aang', age: 1 });
user.save()
  .then(() => console.log('user saved'))
  .catch((error) => console.error(error))
  .finally(() => mongoose.disconnect()); */

  app.get('/', async (req, res) => {
    try {
      const users = await User.find().exec();
      console.log(users);
      res.send(users); // Optionally, you can send the articles as a response to the client
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

app.listen(3000, ()=>{
  console.log('server is up and listening to port 3000');
})