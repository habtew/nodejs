const fs = require("fs")

fs.mkdir("my-dir", (err)=>{
    if (err){
        console.log(err)
    }
    else{
        console.log("directory created")
    }

})