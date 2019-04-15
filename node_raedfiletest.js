var fs=require("fs");

var help = fs.readFileSync("help.txt");

console.log(help.toString());