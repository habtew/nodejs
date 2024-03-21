const fs = require("fs")

let ipsum = fs.readFileSync('./README.md', "UTF-8")

console.log(ipsum)