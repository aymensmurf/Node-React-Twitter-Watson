const express = require('express');
const app = express();
const Twit = require('twit');
const config = require('./config');

var port = process.env.PORT || 5000;
var T = new Twit(config);

var params = {
    q: "from:Ninja",
    count: 3
}

app.get('/api/tweets', (req, res) => {
    console.log('ok');
    var fetchedTweets = T.get('search/tweets', params, (err, data, response) => {  
        var stats = data.statuses;

        var tweets = stats.map(({text, user : {screen_name}}) => ({text, screen_name}));

        res.json(tweets);
    });
});

app.listen(port, () => console.log(`App is up and running on ${port}`));

