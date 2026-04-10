let value = 3
let negValue = - value
console.log(negValue); //-3

console.log(2+2) //4
console.log(2*2) //4
console.log(2-2) //0
console.log(2/2) //1
console.log(2 ** 3) //8
console.log(2 % 3) //2

let str1 = "hello"
let str2 = " Saket"
let str3 = str1 + str2
console.log(str3); //hello saket

console.log("1" + 2)
console.log(1 + "2") //12
console.log("1" + 2) //12
console.log("1" + "2") //12

console.log("1" + 2 + 2) //122
//agar phle string hai, toh uss statement ke aaghe waale ko bhi string mei sonvert krr deta hai
console.log(2 + 2 + "1") //41
//if shuru mei kuchh aur hai, toh unko normally operate krta hai until string appears

console.log(3 + 4 * 5 % 3) // iss types ke syntax se bacho, use paranthesis for better code visibility.


//tricky conversions
console.log(true); //true
console.log(+true); //1
//increment ka kosish hai true mei, toh na, js uska conversion krr deta hai, hence, it becomes 1
//this is a biggy and tricky code, that must be avoided, used for fun andpuzzles only
console.log(+"") //0
// console.log(true+); 1

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
//++gameCounter; //101
console.log(gameCounter); //101
//prefix increment mei value usage ke phle increment ho jaati hai
//postfix increment operator mei valye usage ke baad mei increment hoti hai
//go to MDN documentation for more references
















