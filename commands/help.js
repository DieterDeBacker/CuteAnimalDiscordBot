const Discord = require('discord.js');
const fs = require('fs');

//here you give descriptions to your commands
let allDescriptions = {
  animalroulette: 'Returns a random animal picture',
  cutecat: 'Returns a random picture of a cute cat',
  cutedog: 'Returns a random picture of a cute dog',
  cutegif: 'Returns a gif of a cute animal',
  cutemonkey: 'Returns a random picture of a cute monkey',
  cutereddit: 'Returns a random picture of a cute animal from som subreddit',
  cutestanimal: 'Returns the cutest animal around',
  help: 'Returns the list you just read',
};

let allFiles = fs.readdirSync('./commands');

//list with all possible commands -> gets updated automatically
let allCommands = [];
allFiles.forEach((element) => {
  const elements = element.split('.');
  let tempElement = elements[0];
  allCommands.push(tempElement);
});

//constructing the embeded message
const embedHelp = new Discord.MessageEmbed().setTitle(
  'Commands RealCuteAnimalsBot'
);

//filling the embeded message with commands and their description
for (let i = 0; i < allFiles.length; i++) {
  embedHelp.addFields({
    name: '_' + allCommands[i],
    value: allDescriptions[allCommands[i]],
  });
}

//help call -> shows all possible commando's users can use
module.exports = function (msg) {
  //generating random color
  function generateRandomColor() {
    let randomColor =
      '#' +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0');
    return randomColor;
  }
  //setting color of embed message to Random color
  embedHelp.setColor(generateRandomColor());
  msg.reply(embedHelp);
};
