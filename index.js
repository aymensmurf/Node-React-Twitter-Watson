const express = require('express');
const app = express();
const Twit = require('twit');
const config = require('./config');

var port = process.env.PORT || 5000;
var T = new Twit(config);

app.get('/api/tweets/:keyward', (req, res) => {
    console.log(req.params);

    var params = {
        q: req.params.keyward,
        count: 3
    }

    T.get('search/tweets', params, (err, data, response) => {  
        var stats = data.statuses;

        var tweets = stats.map(function(item){
            return {
                text : item.text,
                screen_name: item.user.screen_name
            }
        });

        //var tweets = stats.map(({text, user : {screen_name}}) => ({text, screen_name}));
        res.send(tweets); //res.json(tweets);
    });
});

app.listen(port, () => console.log(`App is up and running on ${port}`));

