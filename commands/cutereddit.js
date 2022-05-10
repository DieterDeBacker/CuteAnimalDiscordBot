let snoowrap = require('snoowrap');
require('dotenv').config();

const r = new snoowrap({
  userAgent: 'test',
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  username: process.env.USERNAME_REDDIT,
  password: process.env.PASSWORD_REDDIT,
});

let subreddits = ['IllegallySmolCats'];

// r.getSubreddit('snoowrap').getRandomSubmission().then(console.log)
module.exports = async function (msg) {
  let subUrl;
  let randomNumber = Math.floor(Math.random() * subreddits.length);
  try {
    do {
      subUrl = await r
        .getSubreddit(subreddits[randomNumber])
        .getRandomSubmission().url;
    } while (subUrl.includes('redgifs'));
    msg.reply(subUrl);
  } catch (err) {
    console.log('Get caught!');
    msg.reply('Error occured, try the command again! Sorry :(');
  }
};
