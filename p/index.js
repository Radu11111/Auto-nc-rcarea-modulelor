//Autoloading
//AUTO IMPORT/EXPORT
const fs = require('fs')

const dir = fs.readdirSync('./p')
//Varianta 1
// dir.forEach((fileName)=> {
//     if(!fileName.endsWith('.json') && fileName != 'index.js') 
//     {
//         let fileNameWithoutExt = fileName.substring(0, fileName.indexOf('.js'))
//         console.log(fileNameWithoutExt)
//         module.exports[fileName] = require('./'+fileName)
//     }
// })

//un mod alternativ de autoîncărcarea modulelor -varianta 2 :

//dir
//.filter()- no index.js,no .json -->Done
let dirFilter = dir.filter((fileName) => !fileName.endsWith('.json') && fileName != 'index.js')

//.map()- remove '.js' --Done
// .map()-require() --Done
let dirWithoutExt = dirFilter.map((fileName) => {
    fileNameWithoutExt = fileName.substring(0, fileName.indexOf('.js'))
    module.exports[fileNameWithoutExt] = require('./' + fileNameWithoutExt)
    // console.log(fileNameWithoutExt)
})
// ---> Array
//...spread operator --> exports {} -???




