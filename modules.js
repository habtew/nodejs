const path = require("path")
const util = require("util")
const v8 = require("v8")

console.log(path.basename(__filename))

const dirUploads = path.join(__dirname, "habtamu", "welde", "gebre")

console.log(dirUploads)

util.log(path.basename(__filename))

util.log(v8.getHeapStatistics())