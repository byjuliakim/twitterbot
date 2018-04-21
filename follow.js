var Twitter = require('twitter');
var config = require('./config.js');

var T = new Twitter(config);

var params = {
	q: '#ladieslearningcode',
	count: '10',
	result_type: 'recent',
	lang: 'en'
}

T.get( 'search/tweets', params, function(err, data, response){
	if(err) {
		console.log(err);
	}
	else {
		// console.log(data)
		var tweets = data.statuses
		console.log(tweets)
		tweets.forEach( tweet => {
			let screen_name = { screen_name: tweet.user.screen_name };
			T.post('friendships/create', screen_name, (err, response) => {
				if(err){
					console.log(err)
				}
				else {
					// console.log(response)
					console.log('Followed: ', screen_name.screen_name)
				}
			})
		})
	}
})