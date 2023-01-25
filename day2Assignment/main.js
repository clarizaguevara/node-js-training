var { squareNum, createMaskOnPhoneNumber, getHighestSalaryEmp } = require("./functions")

console.log("Day 2 Assignment")

var arr = [10,20,30,40,50]
console.log(squareNum(arr))

var phoneNum = 1234567890
console.log(createMaskOnPhoneNumber(phoneNum))

var empArr = [
    {empId:101,empName:"Asha",salary:1001,deptId:"D1"},
    {empId:102,empName:"Gaurav",salary:2000,deptId:"D1"},
    {empId:103,empName:"Karan",salary:2000,deptId:"D2"},
    {empId:104,empName:"Kishan",salary:3000,deptId:"D1"},
    {empId:105,empName:"Keshav",salary:3500,deptId:"D2"},
    {empId:106,empName:"Pran",salary:4000,deptId:"D3"},
    {empId:107,empName:"Saurav",salary:3800,deptId:"D3"}
]
console.log(getHighestSalaryEmp(empArr, "salary"))