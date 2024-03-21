const fs = require("fs")

let md = `
    This is really cool
    ===================

    Es6 is cool because it respects white spaces

    * list1
    * list2
    * list3
    * list4
    * list5
`

fs.writeFile("javascript.md", md.trim(), (err)=>{
    if (err){
        throw err
    }
    fs.appendFileSync("javascript.md", "\n\n### This is actaully cool")
    console.log('created file')
})