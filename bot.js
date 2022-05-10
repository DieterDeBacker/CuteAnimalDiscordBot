//importing libraries
require('dotenv').config();
const Discord = require('discord.js');

//Declaring new bot variable
const bot = new Discord.Client();

//loggin in the bot with token form the .env file
bot.login(process.env.TOKEN_BOT);

//require executes the first module.exports call in the file ./commands
const commandHandler = require('./commands.js');

//Let's us know the bot is ready for use
bot.once('ready', () => {
  console.log('Ready for posting some cute animals, sheeee!');
});

//if user types message in Discord the commandHandler is called, which calls the first module.exports function that's in the file from the require statement
//in this case it will call module.exports from ./commands.js
bot.on('message', commandHandler);
