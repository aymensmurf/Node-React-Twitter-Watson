const express = require('express');
const app = express();
const Twit = require('twit');
const config = require('./config');

var port = process.env.PORT || 5000;
var T = new Twit(config);

var params = {
    q: "from:Ninja",
    count: 100
}

app.get('/api/tweets', (req, res) => {
    var fetchedTweets = T.get('search/tweets', params, (err, data, response) => {  
        var stats = data.statuses;

        var tweets = [
            {
                text: "",
                screen_name: ""
            }
        ];

        for (var i in stats){
            tweets[i] = stats[i].text;
        }

        res.json(tweets);
    });
});

app.listen(port, () => console.log(`App is up and running on ${port}`));