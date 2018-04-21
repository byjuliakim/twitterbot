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
			let id = { id: tweet.id_str }
			T.post('favorites/create', id, (err, response) => {
				if(err){
					console.log(err)
				}
				else {
					let username = response.user.screen_name;
					let tweetId = response.id_str;
					// console.log(response.text)
					console.log('Favorited: https://twitter.com/' + username + '/status/' + tweetId)
				}
			})
		})
	}
})