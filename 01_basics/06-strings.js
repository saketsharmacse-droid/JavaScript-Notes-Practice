const name = "Saket Sharma"
const repoCount = 23

console.log(name + repoCount + " Value"); //this is relatively an older method

console.log(`Hello my name is ${name} and my repo count is ${repoCount} `); // we'll use back-ticks, which basically makes placeholders , used in the string interpolation.
//this is called as string interpolation.
//we can inject various use cases and functions on the go, such as upper case and all.

//other way to declare string
const gameName = new String("Saket Sharma")
/* const GameName = new String("Saket Sharma")
undefined
GameName
String {'Saket Sharma'}
0: "S"
1: "a"
2: "k"
3: "e"
4: "t"
5: " "
6: "S"
7: "h"
8: "a"
9: "r"
10: "m"
11: "a"
length: 12
[[Prototype]]: String
[[PrimitiveValue]]: "Saket Sharma"
*/

//various string functions, mastering strings means mastering these string functions:
/*
[[Prototype]]: String
anchor: ƒ anchor()
at: ƒ at()
big: ƒ big()
blink: ƒ blink()
bold: ƒ bold()
charAt: ƒ charAt()
charCodeAt: ƒ charCodeAt()
codePointAt: ƒ codePointAt()
concat: ƒ concat()
constructor: ƒ String()
endsWith: ƒ endsWith()
fixed: ƒ fixed()
fontcolor: ƒ fontcolor()
fontsize: ƒ fontsize()
includes: ƒ includes()
indexOf: ƒ indexOf()
isWellFormed: ƒ isWellFormed()
italics: ƒ italics()
lastIndexOf: ƒ lastIndexOf()
length: 0
link: ƒ link()
localeCompare: ƒ localeCompare()
match: ƒ match()
matchAll: ƒ matchAll()
normalize: ƒ normalize()
padEnd: ƒ padEnd()
padStart: ƒ padStart()
repeat: ƒ repeat()
replace: ƒ replace()
replaceAll: ƒ replaceAll()
search: ƒ search()
slice: ƒ slice()
small: ƒ small()
split: ƒ split()
startsWith: ƒ startsWith()
strike: ƒ strike()
sub: ƒ sub()
substr: ƒ substr()
substring: ƒ substring()
sup: ƒ sup()
toLocaleLowerCase: ƒ toLocaleLowerCase()
toLocaleUpperCase: ƒ toLocaleUpperCase()
toLowerCase:  ƒ toLowerCase()
toString: ƒ toString()
toUpperCase: ƒ toUpperCase()
toWellFormed: ƒ toWellFormed()
trim: ƒ trim()
trimEnd: ƒ trimEnd()
trimLeft: ƒ trimStart()
trimRight: ƒ trimEnd()
trimStart: ƒ trimStart()
valueOf: ƒ valueOf()
Symbol(Symbol.iterator): ƒ [Symbol.iterator]()
[[Prototype]]: Object
[[PrimitiveValue]]: ""
[[PrimitiveValue]]: "Saket Sharma"

*/

console.log(gameName[0]); //S


console.log(gameName.__proto__); //{} object : this appears empty but has a lot of things and the objects can be accessed as:
//there are various methods in the prototype
console.log(gameName.length); //12
//hum aise nhi likh rhe ki gameName.__proto__.toUpperCase kyoki yeh prototype ka ek feature hai, aaghe dekhenge.
console.log(gameName.toUpperCase()); //SAKET SHARMA
//uppercase krne se bhi original value change nhi hui hai kyoki string ek primitive data type hai aur primitive mei call by value hota hai jisme ek copy share ki jaati hai, stack use hota hai.

console.log(gameName.charAt(2)); //k
console.log(gameName.indexOf('S')); //0

const newString = gameName.substring(0,4); //substring mei negative values nhi de sakte hai
console.log(newString); //Sake : last waali value include nhi hori hai

const anotherString = gameName.slice(-3,4) //can give negative values as well, and it starts from the end
console.log(anotherString);


const newStringOne = "  Saket  "
console.log(newStringOne); //"  Saket  "
console.log(newStringOne.trim()); //"Saket" the extra spaces at the start and end are removed
//there also exists trimStart and trimEnd

const url = "https://saket.com/saket%20sharma"
//url encoding krke hota hai, jisme url mei jo empty spaces rhte hain unko browser apne app %20 se replace krr deta hai.
console.log(url.replace('%20', '-')); //replace('kya search krna hai','replace kya krna hai uski jagah')

console.log(url.includes('Saket')); //true
console.log(url.includes("Teeyu")); //false

const string2 = "Saket-Sharma-cse-btech"
console.log(string2.split('-')); //[ 'Saket', 'Sharma', 'cse', 'btech' ]

















