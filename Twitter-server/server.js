const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const server = express();

server.use(cors());
server.use(bodyParser.json());

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Twitter');
  console.log('db connected')
}

const userSchema = new mongoose.Schema({
  userNameText: String,
  userEmailText: String,
  userPasswordText: String,
});

const tweetSchema = new mongoose.Schema({
  tweetText: String,
});

const signInSchema = new mongoose.Schema({
  signInEmail: String,
  signInPassword: String,
});

const User = mongoose.model('users', userSchema);
const Tweet = mongoose.model('tweets', tweetSchema);
const SignIn = mongoose.model('signin', signInSchema);

// CRUD - Create
server.post('/Twitter', async (req, res) => {
  if (req.body.userNameText) {
    console.log("working");
    let user = new User();
    user.userNameText = req.body.userNameText;
    user.userEmailText = req.body.userEmailText;
    user.userPasswordText = req.body.userPasswordText;
    const asp = await user.save();
  
    console.log(asp);
    res.json(asp);
  } else if (req.body.tweetText) {
    console.log("working");
    let tweet = new Tweet();
    tweet.tweetText = req.body.tweetText;
    const doc = await tweet.save();
  
    console.log(doc);
    res.json(doc);
  } else if (req.body.signInEmail && req.body.signInPassword ) {
    console.log("working");
    let signIn = new SignIn();
    signIn.signInPassword = req.body.signInPassword;
    const dsasoc = await signIn.save();
  
    console.log(dsasoc);
    res.json(dsasoc);
  }else {
    res.status(400).json({ error: 'Invalid request body' });
  }
});

server.get('/Twitter', async (req, res) => {
    try {
      const latestTweet = await Tweet.findOne().exec();
        res.json(latestTweet);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'An error occurred' });
    }
  });

  server.get('/Twitter', async (req, res) => {
    try {
      const latestUser = await User.findOne().exec();
        res.json(latestUser);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'An error occurred' });
    }
  });

  server.get('/Twitter', async (req, res) => {
    try {
      const latestsignIn = await SignIn.findOne().exec();
        res.json(latestsignIn);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'An error occurred' });
    }
  });


// server.get('/Twitter', async (req, res) => {
//   try {
//     let latestData;
//     if (req.query.dataType === 'user') {
//       latestData = await User.findOne().exec();
//     } else if (req.query.dataType === 'tweet') {
//       latestData = await Tweet.findOne().exec();
//     } else {
//       res.status(400).json({ error: 'Invalid data type' });
//       return;
//     }
    
//     res.json(latestData);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: 'An error occurred' });
//   }
// });


server.listen(8080,()=>{
    console.log('server started')
})
