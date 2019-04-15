var fs=require('fs');
var help = fs.readFileSync('help.txt');

console.log(help.toString());
console.log('Read Completed');