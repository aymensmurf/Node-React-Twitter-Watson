const express = require('express');
const app = express();
const Twit = require('twit');
const config = require('./config');
const PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');

// const TwitterAPI = "https://api.twitter.com/1.1";
const port = process.env.PORT || 5000;

var T = new Twit(config);

var personalityInsights = new PersonalityInsightsV3({
    version_date: '2017-10-13',
    username: '12c7da63-a2a4-4576-bbdd-828ecee8d1f2',
    password: 'S02GnOwPNZZX'
});

//Search Tweets with keyword
app.get('/api/tweets/:keyward', (req, res) => {
    console.log("In tweets : " + req.params.keyward);

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

//Get screen_name tweets
app.get('/api/userTweets/:screen_name', (req, res) => {
    console.log("In userTweets : " + req.params.screen_name,);
    
    var params = {
        screen_name: req.params.screen_name,
        count: 3
    }

    T.get('statuses/user_timeline', params, (err, data, response) => {  
        var tweets = data.map(function(item){
            return {
                text : item.text,
                date : item.created_at,
                //User Info
                user_name : item.user.name,
                user_location : item.user.location,
                user_description : item.user.description,
                user_followers_count : item.user.followers_count, //Followers
                user_friends_count : item.user.friends_count, //Following
                user_favourites_count : item.user.favourites_count, //Likes
                user_statuses_count : item.user.statuses_count //Tweets

            }
        });

        res.send(tweets);
    });
});





//Test************************************************************
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

app.get('/api/personalityInsights', (req, res) => {
    var profileParams = {
        content: "You know, four years ago we went through the worst financial crisis since the Great Depression.Millions of jobs were lost, the auto industry was on the brink of collapse. The financial systemhad frozen up.And because of the resilience and the determination of the American people, we've begun to fight our way back. Over the last 30 months, we've seen 5 million jobs in the private sector created. The auto industry has come roaring back. And housing has begun to rise.I think we've got to invest in education and training. I think it's important for us to develop new sources of energy here in America, that we change our tax code to make sure that we're helping small businesses and companies that are investing here in the United States, that we take some of the money that we're saving as we wind down two wars to rebuild America and that we reduce our deficit in a balanced way that allows us to make these critical investments.", 
        content_type: 'text/plain',
        consumption_preferences: true,
        raw_scores: true
    };

    personalityInsights.profile(profileParams, function(error, profile) {
        if (error) {
          console.log(error);
        } else {
          res.send(profile);
        }
    });

});
//End Test********************************************************

app.listen(port, () => console.log(`App is up and running on ${port}`));

