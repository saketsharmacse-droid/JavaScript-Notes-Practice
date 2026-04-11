const score = 400 //yaha pe automatically js yeh detect kiya hai ki score ka type should be number
//but we can delacre and specify it as well, ki score ka type number rhega krke

const balance = new Number(100)
console.log(balance) //[Number: 100]
console.log(score)

//numbers ke bhi prototypes rhte hai:

/* 
Number {100}
[[Prototype]]: Number
constructor: ƒ Number()
toExponential: ƒ toExponential()
toFixed: ƒ toFixed()
toLocaleString: ƒ toLocaleString()
toPrecision: ƒ toPrecision()
toString: ƒ toString()
valueOf: ƒ valueOf()
[[Prototype]]: Object
[[PrimitiveValue]]: 0
[[PrimitiveValue]]: 100 
*/

console.log(balance.toString()); //typeof krne se string rhega
console.log(balance.toString().length); //3 characters in 100

console.log(balance.toFixed(2)) //100.00 yeh precision value ko calculate krta hai, specially in ecommerce or in billing,tells how many digits rhenge after the decimal.

const otherNumber = 23.89453
console.log(otherNumber.toPrecision(3)) //23.9
// //Number of significant digits. Must be in the range 1 - 21, inclusive.Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.

const otherNumber1 = 123.89453
console.log(otherNumber1.toPrecision(3)); //124

const otherNumber2 = 1123.89453
console.log(otherNumber2.toPrecision(3)); //1.12e+3 baaki exponential mei de diya

const hundreds = 1000000
console.log(hundreds.toLocaleString()); //10,00,000 US-based values aati hai comma separated by default.
console.log(hundreds.toLocaleString('en-IN')) //this shall return the values in indian style, according to indian number systems

//browser ke inspect pe jaake console mei Numbers. krne se bahut saare methods aayenge that will tell about various properties, such as th max number, range and all












