var fs = require("fs")

var fileContent = ""

fs.readFile("file1.txt", (err, content) => {
    if (err) {
        console.log("Error in reading file 1: ", err)
    } else {
        fileContent += content.toString() + "\n"
        fs.readFile("file2.txt", (err, content) => {
            if (err) {
                console.log("Error in reading file 2: ", err)
            } else {
                fileContent += content.toString() + "\n"
                fs.readFile("file3.txt", (err, content) => {
                    if (err) {
                        console.log("Error in reading file 3: ", err)
                    } else {
                        fileContent += content.toString() + "\n"
                        fs.writeFile("file4.txt", fileContent, (err) => {
                            if (err) {
                                console.log("Error in write: ", err)
                            } else {
                                console.log("Write successful.")
                            }
                        })
                    }
                })
            }
        })
    }
})