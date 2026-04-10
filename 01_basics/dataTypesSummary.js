// In official documenmtations, we have mainly two types of categories on datatypes:
// primitive and non-primitive
//in older languages like c and cpp, these were defined based on how the values are being passed on to the memory, that is , based on pass by value and the pass by reference.


//Primitive DataTypes
//primitive data types are call by value, i.e., jab bhi inko kahi se kahi copy krte hai, toh original data ka reference nhi diya jaata memory ka, inke values ko copy krke diya jaata hai, and jo bhi changes hum krte hai wo copy mei hote hai
//7 types: String , Number, Boolean, null, undefined, Symbol, BigInt



//Non-Primitive (Referrence) DataTypes
//memory mei inka reference directly allocate kiya jaata hai
//Array, Objects, Functions

//master objects and web events to master js


//JS is statically or dynamically typed language?
//decimal ko bhi number hi bolte hai , there is no searate float

const score = 100 //yaha pe iska type kya hai yeh user nhi btyega, but in typeScript , const score:number = 100 aise krna padta hai
const scoreValue = 100.3 //float is also number only

const isLoggedIn = false
const outsiderTemp = null
let userEmail; //undefined type

const id = Symbol('123') //symbol ka return type is also a different datatype called symbol
const anotherId = Symbol('123')

console.log(id == anotherId); //false


const bigNumber = 3456435643543425334n //last mei n lagate hai toh wo bigInt bnn jaata hai, erna error aasyega for large numbers > 2**53
console.log(bigNumber);


//Arrays, Objects, Functions

const heros = ["shaktimaan", "naagraj", "doga"]; //array

//objects are in curly braces, in key value pairs
let myObj = {
    name: "Saket",
    age: 23,
}

//function
const myFun = function(){
    console.log("hello World");
    
}

console.log(typrof (bigNumber)); //tells the datatype of the value
//BigInt ka value undefined aata hai
//aur padhne ke liye documentation dekho

console.log(typeof myFun); //function object
//actually mei, derieved data types ka return type object hi aata hai


