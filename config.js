module.exports = {

  twitter: {
    tokens: {
      consumer_key:         'tuDiQyYxJBFtLcCgNlA8l1ebu',
      consumer_secret:      'BgcoFBicQy8MEy8ERzuj82PqQAIR2VpN9iEHMTm8HyAFbYukvH',
      access_token:         '2402760295-PgYsTh9sYsmMT8M1HXOr7YWvU7Dk6KRMobsfTtz',
      access_token_secret:  'x2yzYaxltWAGaN9R3yVudzMMgXYyQQ47SdLzdSuqjDweJ'
    },
    // userId: '' //TEST account (twitter account ID, will be reading tweets from this user)
    userId: '25073877'       //TRUMP account (twitter account ID, will be reading tweets from this user)
  },

  tierion: {
    tokens: {
      access_token : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjU5Y2FiZmE0MWFiM2FlMjliNzk5YzNkYiIsInJscyI6MTAwLCJybGgiOjEwMDAsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE1MDY0NjM1NjIsImV4cCI6MTUwNjQ2NzE2MiwianRpIjoiMWQ4YjVkNmI5YjdmNDVmZTc0YTJkYTY4MGQ2Y2U1ODJkMDcyZjU4NyJ9.PxQwHYfIbN9PuDrSziJY1uKYjOdGZnQ37JXp4K9MVew",
      refresh_token : 'b18d914f8b3a6753e57e2eabb1c819da5ccfee6d'
    },
// root: payload that tierion sends when a block has been found on the network.
    // it's tricky to test automatically on local.
    // look at blockchain.info that updates with every block found
    root: 'https://tweet-chain.herokuapp.com/'
  },

  github: {
    remote_url: 'https://github.com/jsl15c/trumpTweets.git' //Repo that all new tweets will be pushed
  }
};
