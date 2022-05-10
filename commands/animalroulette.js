const fs = require('fs');
let dirCute = './cuteRoulette';

//determines the amount of pictures in the dir specified in dirCute
fs.readdir(dirCute, (err, files) => {
  numberOfPicsInFolder = files.length;
});

module.exports = function (msg) {
  //generating random number between 1 and the amount of pics in ./cuteRoulette
  const randomPic = Math.floor(Math.random() * numberOfPicsInFolder) + 1;
  msg.reply(`Look at this cute animal!`, {
    files: [`./cuteRoulette/${randomPic}.jpg`],
  });
};
