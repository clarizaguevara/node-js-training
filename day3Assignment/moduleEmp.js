function searchSalary(arrObj, searchSalary) {
    for(let i=0; i<arrObj.length; i++) {
        if (arrObj[i].salary === searchSalary) {
            return i
        }
    }
    return 'Not found!'
}

function addEmp(arrObj, emp, position) {
    for(let employee of arrObj) {
        if (employee.empId === emp.empId) {
            return false // empId is already taken
        }
    }
    arrObj.splice(position, 0, emp)
    console.log(arrObj)
    return arrObj.includes(emp)
}

function removeEmp(arrObj, emp) {
    for(let employee of arrObj) {
        if (employee.empId === emp.empId) {
            var index = arrObj.indexOf(employee)
            if (index > -1) {
                arrObj.splice(index, 1)
                console.log(arrObj)
                return true // emp is removed
            }
        }
    }
    return false // emp not found
}

function getEmpDetails(arrObj, empId) {
    for(let emp of arrObj) {
        if (emp.empId === empId) {
            return emp
        }
    }
    return 'Not found!'
}