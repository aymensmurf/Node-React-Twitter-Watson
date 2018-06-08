const express = require('express');
const app = express();
const Twit = require('twit');
const config = require('./config');

var port = process.env.PORT || 5000;
var T = new Twit(config);

// const TwitterAPI = "https://api.twitter.com/1.1";

app.get('/api/tweets/:keyward', (req, res) => {
    var params = {
        q: req.params.keyward,
        count: 3
    }

    T.get('search/tweets', params, (err, data, response) => {  
        var stats = data.statuses;

        var tweets = stats.map(function(item){
            return {
                text : item.text,
                screen_name: item.user.screen_name,
                profile_image_url: item.user.profile_image_url
            }
        });

        //var tweets = stats.map(({text, user : {screen_name}}) => ({text, screen_name}));
        res.send(tweets); //res.json(tweets);
    });
});

app.get('/api/userTweets/:screen_name', (req, res) => {
    var params = {
        screen_name: req.params.screen_name,
        count: 3
    }

    T.get('statuses/user_timeline', params, (err, data, response) => {  
        var tweets = data.map(function(item){
            return {
                text : item.text
            }
        });

        res.send(tweets);
    });
});

app.get('/api/tweets', (req, res) => {
    var params = {
        q: 'from:@Ninja',
        count: 1
    }

    T.get('search/tweets', params, (err, data, response) => {  
        var stats = data.statuses;
        res.send(stats);
    });
});

app.get('/api/userTweets', (req, res) => {
    var params = {
        screen_name: 'Ninja',
        count: 1
    }

    T.get('statuses/user_timeline', params, (err, data, response) => {  
        var stats = data;
        res.send(stats);
    });
});

app.listen(port, () => console.log(`App is up and running on ${port}`));

