const fs = require("fs")


// fs.renameSync("./javascript.md", "js.md")

// console.log("config file renamed")

fs.rename("./js.md", "./my-dir/js.md", function(err){
    if (err){
        throw err
    }
    console.log("file moved succesfully")
})