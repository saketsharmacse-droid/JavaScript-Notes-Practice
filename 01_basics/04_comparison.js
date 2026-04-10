//values of comparison operators are returned in either true or false.

console.log( 2 > 1); //true
console.log(2 >= 1); //true
console.log( 2 < 1); //false
console.log(2 == 1); //true
console.log(2 != 1); //true

console.log("2" > 1); 
console.log("02" > 1);
// inn dono mei yeh 2 ko number mei convert krr diya hai.
//inn types ke jo comparison rhte hai, wo generally predictable results nhi dete hai, isliye its better to use similar datatypes.

console.log( null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true
//3. mei null ko zero mei convert krr diye, so true, but 1. mei null is zero and zero is not greater than zero



// The reason is that an equality check == and comparisons > <> = <= works differently.
//comparisons convert null to a number, treating it as 0.
//That's why null>=0 is true and null>0 is false.


console.log( undefined > 0); //false
console.log(undefined == 0); //false
console.log(undefined > 0); //false

//JS mei equality and < > ar etreated absolutely differently, there is a specal method to handle the == and === but the < > and all are treated differently.

//Strict Check: ===
console.log("2" == 2); //allowed, convert krke fir check krega
console.log("2" === 2); //strict check, does not compare different dataTypes, conversion nhi krega. 






