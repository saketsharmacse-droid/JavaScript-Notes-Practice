//jaise filter padhe, waisi aur bhi cheezein hoti hai.

const myNums = [1 ,2 , 3, 4, 5, 6, 7, 8, 9, 10]
//mujhe inn saare numbers ke andar 10 add krna hai.

//filter and map both are callback functions

myNums.map( (num) => num + 10 ) 
//map ki acchi baat yeh hai ki yeh automatically values return krta hai, toh usko store bhi krna rhega.

const newNumber = myNums.map( (num) => num + 10 ) 
console.log(newNumber); 
/*
[
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
]
*/

const newNumber1 = myNums.map( (num) => {num + 10} ) 
console.log(newNumber1); 
/* [
  undefined, undefined,
  undefined, undefined,
  undefined, undefined,
  undefined, undefined,
  undefined, undefined
] 
*/

const newNumber2 = myNums.map( (num) => { return num + 10} ) 
console.log(newNumber2);
/* 
[
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
]
*/

//map bhi filter ke jaise hi values return krta hai.



//method of chaining

// const newNums4 = myNums.map().map().filter() //haan yeh possible hai, we can use multiple methods together.

//jab bhi chaining hoti hai, toh turant variable ko value assign nhi hoti, phle waale method ka output array second waale method ko pass on ho jaati hai.

const newNums3 = myNums
                    .map((num) => num * 10)
                    .map((num) => num + 1)
console.log(newNums3);
/*
[
  11, 21, 31, 41,  51,
  61, 71, 81, 91, 101
]
  */

//hum jitna marzi uthe chainng krr sakte hai
const newNums4 = myNums
                    .map((num) => num * 10)
                    .map((num) => num + 1)
                    .filter((num) => num >= 40)
console.log(newNums4);
/*
[
  41, 51,  61, 71,
  81, 91, 101
]
  */
//maps mei sabhi return hota hai, fir usko explicitly handle krna padta hai, but filter mei tabhi return hota hai jab value yaa condition satisfy ho jata hai tabhi bus.




