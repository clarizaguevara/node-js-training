exports.squareNum = (arr) => {
    var arrSquare = []

    for (let num of arr) {
        arrSquare.push(num * num)
    }

    return arrSquare
}

exports.createMaskOnPhoneNumber = (phoneNumber) => {
    var numbersToHide = phoneNumber.substring(3, phoneNumber.length-3)
    var maskString = ""

    for (let i=0; i<numbersToHide.length; i++) {
        maskString += "*"
    }

    return phoneNumber.replace(numbersToHide, maskString)
}

exports.getHighestSalaryEmp = (empArr, fieldName) => {
    var highestSalaryIndex = 0

    for(let i=0; i<empArr.length; i++) {
        if (empArr[i][fieldName] > empArr[highestSalaryIndex][fieldName]) {
            highestSalaryIndex = i
        }
    }

    return empArr[highestSalaryIndex]
}