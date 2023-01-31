var fs = require("fs")

function copyFileOrDirectory(path) {
    fs.stat(path, (err, fd)=>{
        if (err) {
            console.log(`Error in getting file stat: ${err}`)
            return console.log("File or directory not found.")
        }
        else {
            if (fd.isDirectory()) {
                cloneDirectory(path)
            } else if (fd.isFile()) {
                copyAFile(path)
            }
        }
    })
}

function cloneDirectory(path) {
    var newDirectoryName = `${path} - Clone`
    fs.mkdir(newDirectoryName, (err) => {
        if (err) return console.log(`Error in cloning directory: ${err}`)
        console.log('Directory is cloned.')
        
        fs.readdir(path, (err, files) => {
            if (err) return console.log(`Error in reading files: ${err}`)
            else {
                for (let file of files) {
                    copyAFile(`${path}/${file}`, `${newDirectoryName}/${file}`)
                }
            }
        })
    })
}

function copyAFile(fileName, cloneDestinationPath) {
    fs.open(fileName, 'r', (err, fd) => {
        if (err) return console.log(`File not found: ${err}`)
        else {
            var arrFilename = fileName.split(".")
            var fileType = arrFilename[arrFilename.length-1]
            var nameOfFile = fileName.replace(`.${fileType}`, "")
            var readStream = fs.createReadStream(fileName)
            var writeStream = fs.createWriteStream(`${cloneDestinationPath ? cloneDestinationPath : nameOfFile} - Copy.${fileType}`)

            readStream.pipe(writeStream)
            
            fs.close(fd, (err) => {
                if (err) return console.log(`Error in closing: ${err}`)
                else return console.log(`${nameOfFile} is copied.`)
            })
        }
    })
}

function doesFileExist(path) {
    // fs.exists(path, (isExisting) => {
    //     return isExisting
    // })

    fs.open(path, 'r', (err, fd) => {
        if (err) {
            if (err.code === 'ENOENT') {
                console.log(`File does not exist: ${err}`)
                return false
            }
        }
        fs.close(fd, (err) => {
            if (err) return console.log(`Error in closing: ${err}`)
            else {
                console.log('File exists.')
                return true
            }
        })
    })
}

copyFileOrDirectory("./testdir")
// copyAFile("test.txt")
// doesFileExist("./testdir")
