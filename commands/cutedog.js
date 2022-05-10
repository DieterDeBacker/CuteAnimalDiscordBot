const fs = require('fs');
let dirCute = './cuteDog';
let numberOfPicsInFolder = 0;

//determines the amount of pictures in the dir specified in dirCute
fs.readdir(dirCute, (err, files) => {
  numberOfPicsInFolder = files.length;
});

module.exports = function (msg) {
  //generating random number between 1 and the amount of pics in ./BaddieBoob
  const randomPic = Math.floor(Math.random() * numberOfPicsInFolder) + 1;
  msg.reply('This dog has some nice cuteness, sheeeee!', {
    files: [`./cuteDog/${randomPic}.jpg`],
  });
};
