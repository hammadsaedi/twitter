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

console.log("done till here!")
const User = mongoose.model('User', userSchema);

const tweetSchema = new mongoose.Schema({
  tweetText: String,
});
const Tweet = mongoose.model('tweets', tweetSchema);




// CRUD - Create
// server.post('/Twitter',async (req,res)=>{
     
//     let user = new User();
//     user.userNameText = req.body.userNameText;
//     user.userEmailText = req.body.userEmailText;
//     user.userPasswordText = req.body.userPasswordText;
//     const doc = await user.save();

//     console.log(doc);
//     res.json(doc);
// })

// server.post('/Twitter',async (req,res)=>{
     
//   let tweet = new Tweet();
//   tweet.tweetText = req.body.tweetText;
//   const doc = await tweet.save();

//   console.log(doc);
//   res.json(doc);
// })

console.log("done till!")
server.post('/Twitter', async (req, res) => {
  if (req.body.userNameText && req.body.userEmailText && req.body.userPasswordText) {
    console.log("working");
    let user = new User();
    user.userNameText = req.body.userNameText;
    user.userEmailText = req.body.userEmailText;
    user.userPasswordText = req.body.userPasswordText;
    const doc = await user.save();
  
    console.log(doc);
    res.json(doc);
  } else if (req.body.tweetText) {
    console.log("working");
    let tweet = new Tweet();
    tweet.tweetText = req.body.tweetText;
    const doc = await tweet.save();
  
    console.log(doc);
    res.json(doc);
  } else {
    res.status(400).json({ error: 'Invalid request body' });
  }
});


//<ul>
// {tweets.map(tweet=><li key={tweet._id}>{tweet.tweetText}</li>)}
// </ul>
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
      const latestTweet = await User.findOne().exec();
        res.json(latestTweet);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'An error occurred' });
    }
  });


  // server.get('/Twitter', async (req, res) => {
  //   try {
  //     const latestTweet = await Tweet.findOne().exec();
  //       res.json(latestTweet);
  //   } catch (err) {
  //     console.log(err);
  //     res.status(500).json({ error: 'An error occurred' });
  //   }
  // });

// server.get('/demo',async (req,res)=>{
//     const docs = await User.find({});
//     res.json(docs)
// })
server.get('/Twitter', async (req, res) => {
  try {
    let latestData;
    
    if (req.query.dataType === 'user') {
      latestData = await User.findOne().exec();
    } else if (req.query.dataType === 'tweet') {
      latestData = await Tweet.findOne().exec();
    } else {
      res.status(400).json({ error: 'Invalid data type' });
      return;
    }
    
    res.json(latestData);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'An error occurred' });
  }
});


server.listen(8080,()=>{
    console.log('server started')
})
