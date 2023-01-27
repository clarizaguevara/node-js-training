var fs = require("fs")

var files = ["file1.txt", "file2.txt", "file3.txt"]
var fileContent = ""

for (let file of files) {
    getFileContent(file, (content) => {
        fileContent += content.toString() + "\n"
        fs.writeFile("file4.txt", fileContent, (err) => {
            if (err) {
                console.log("Error in write: ", err)
            } else {
                console.log("Write successful.")
            }
        })
    })
}

function getFileContent(fileName, f1) {
    fs.readFile(fileName, (err, data) => {
        if (err) {
            console.log(`Error in reading ${fileName}: ${err}`)
        } else {
            f1(data.toString())
        }
    })
}