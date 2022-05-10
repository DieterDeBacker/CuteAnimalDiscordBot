const Discord = require("discord.js");
const client = new Discord.Client();

//functions holds all the commands stored in the ./commands folder
const functions = {};

//automatically reads what files are in ./commands folder and puts them in a require statement
//also adds the command to the object "functions"
//this way if you want to add a new command you would just add the "newcommand.js" file to the commands folder
require("fs")
  .readdirSync("./commands")
  .forEach(function (file) {
    tempFile = file.split(".");
    functions[tempFile[0]] = require("./commands/" + file);
  });

//gets called from bot.js -> commandHandler
module.exports = function (msg) {
  if (
    msg.channel.id == "843915342279213086" ||
    msg.channel.id == "449672291505405956"
  ) {
    if (msg.content.charAt(0) === "_") {
      //Found a valid command!
      //command = msg from user in Discord without the "!"
      let command = msg.content.substring(1);

      //calls the first module.exports from the file that has the name which is passed by the user in the variable command
      try {
        functions[command](msg);
      } catch (err) {
        console.log("Some error appeared, but it got handled! No worries!");
      }
    }
  }
};
