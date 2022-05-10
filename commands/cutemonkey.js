const fs = require('fs');
let dirCute = './cuteMonkey';
let numberOfPicsInFolder = 0;

//determines the amount of pictures in the dir specified in dirCute
fs.readdir(dirCute, (err, files) => {
  numberOfPicsInFolder = files.length;
});

module.exports = function (msg) {
  //generating random number between 1 and the amount of pics in ./BaddiePics
  const randomPic = Math.floor(Math.random() * numberOfPicsInFolder) + 1;
  msg.reply('Damn, this monkey CUTE as hell!', {
    files: [`./cuteMonkey/${randomPic}.jpg`],
  });
};
