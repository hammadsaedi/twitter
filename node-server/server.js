const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/demo');
  console.log('db connected')
}
const tweetT = new mongoose.Schema({
    tweetText: String
});

const Tweet = mongoose.model('tweettext', tweetT);


const server = express();

server.use(cors());
server.use(bodyParser.json());

// CRUD - Create
server.post('/demo',async (req,res)=>{
     
    let tweet = new Tweet();
    tweet.tweetText = req.body.tweetText;
    const doc = await tweet.save();

    console.log(doc);
    res.json(doc);
})
//<ul>
// {tweets.map(tweet=><li key={tweet._id}>{tweet.tweetText}</li>)}
// </ul>
server.get('/demo', async (req, res) => {
    try {
      const latestTweet = await Tweet.findOne().exec();
        res.json(latestTweet);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'An error occurred' });
    }
  });

// server.get('/demo',async (req,res)=>{
//     const docs = await User.find({});
//     res.json(docs)
// })

server.listen(8080,()=>{
    console.log('server started')
})
