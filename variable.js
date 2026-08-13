const accountId = 12345
let accountEmail = "prpandya0310@gmail.com"
var accountPassword = "14567"
accountCity = "ahmedabad"

//console.log(accountPassword)

//conversion operation

/*
always use the let for defining the variable, avoid always var please ;)
*/

//the issues in conversion
//"33" can be converted in 33
//"33abc" => cant converted in number - it is not a number
// true => 1 -> converted in 1
let isloggedin = 1;
let booleanloggedin = Boolean(isloggedin)

console.log(booleanloggedin)

let idstring = "34"

let anotherid = Number(idstring);

console.log(anotherid)

const course = {
    coursename: "placement_lelo",
    coursePrice: "18,00,000",
    courseInstructor: "the param the macchar the pandya"
}

const {courseInstructor : instructor} = course
console.log(instructor);

