let score = 33
let score1 = "33abs"

//typeof is needed as we dont know ki kya hai uska type as data kaha se aara pta ni, jaise :
//const {score} = req.body isme score can be anything we dont know about.

console.log(typeof score)
console.log(typeof (score))

console.log(typeof score1)
console.log(typeof (score1))

let valueInNumber = Number(score1) //the 33abc will get converted to number, but in actual, it's not, this is problem in strict checking of js
console.log(typeof valueInNumber) //number
console.log(valueInNumber); //NaN
//NaN is not a number

let score2 = null
let valueInNumber1 = Number(score2)
console.log(valueInNumber1) //0
//we saw two things, NaN ,and null as zero

let score3 = undefined
let value2 = Number(score3)
console.log(value2) //NaN
// similarly, boolean values ka: true ka 1 aayega and false ka 0
//strings ka, suppose Saket, toh iska bhi NaN aayega
//NaN tab aayega jab conversion nhi ho paaya hai numbers pe
// typeof NaN is number

//"33": 33
//"33abc" : NaN
// true = 1, false = 0


let isLoggedIn = 1
let value4 = Boolean(isLoggedIn)
console.log(value4); //true

let isLoggedIn1 = "Saket"
let value5 = Boolean(isLoggedIn1)
console.log(value5); //true

let isLoggedIn2 = ""
let value6 = Boolean(isLoggedIn2)
console.log(value6); //false

//1 : true, 0 : false
//"": false
//"saket" : true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

 







