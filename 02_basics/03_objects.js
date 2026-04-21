//objects ko declare krne ke 2 tarike
//literal ki tarah
//constructor ki tarah

//singleton
// Object.create() //constructor way to create an object
//iske through hi bnta hai singleton

//declaration of a symbol
const mySym = Symbol("key1")
const mySym1 = Symbol("key2")

//object literals
// const jsUser = {} //yeh ban gya humara object
const jsUser = {
    name: "Saket",
    "full name": "Saket Sharnma",
    mySym: "mykey1", //cannot directly use symbols this way
    [mySym1]:"myKey2", //this is the correct symtax to use symbols
    age:"23",
    location:"bhilai",
    email:"Saket@google.com",
    isLoggedin:false,
    lastLoginDays: ["Monday", "Saturday"]

}
//objects ke andar keys aur values ka chakkr rhta hai, jaise if hum log array declare krte hai, toh array ko access krne ka sirf ek tarika hai, like arr[o], arr[1], so array mei key/index 0 1 2 ... aisi defined rhti hai, but objects mei hum log apne according krr sakte hai key ko define.

//objects  mei key is also a string, but no need to do this "name":"Saket", instead name:"Saket" coz syatem usko by default string hi le leta hai.
//system by default "name" aise process krta hai, but hum log likhte ni hai waise.

//there are two ways to access the object elements
console.log(jsUser.email); //Saket@google.com
//console.log(jsUser[email]) this will give error
console.log(jsUser["email"]); //Saket@google.com
// console.log(jsUser.full name); this will give error
console.log(jsUser["full name"]); //Saket Sharma

console.log(jsUser.mySym); //myKey1 but stilll, it is not being used as a symbol
//datatype dekhne se wo symbol jaise use nhi hora
console.log(typeof jsUser.mySym); //string

console.log(jsUser[mySym1]); //myKey2
console.log(typeof jsUser[mySym1]); 

//values ko change krna hai toh:
jsUser.email = "saket@amazon.com"

//we can lock values,so that change nhi ho sake:
//Object.freeze(jsUser)
jsUser.email = "saket@microsoft.com"

console.log(jsUser); 
/*
{
  name: 'Saket',
  'full name': 'Saket Sharnma',
  mySym: 'mykey1',
  age: '23',
  location: 'bhilai',
  email: 'saket@amazon.com',
  isLoggedin: false,
  lastLoginDays: [ 'Monday', 'Saturday' ],
  Symbol(key2): 'myKey2'
} 
*/

//isme hum functions bhi add krr saket hai
//js mei functions ko type 1 citizen ke jaise treat kiya jaata hai, mtlab functions ke andar koi discrimination nhi hota hai, can use them as a normal variable

jsUser.greeting = function(){
    console.log("Hello JS User");
}

console.log(jsUser.greeting); //undefined
console.log(jsUser.greeting()); //[Function (anonymous)]
//Hello JS USer

jsUser.greetingTwo = function(){
    console.log(`Hello JS USer, ${this.name}`); //this use krne se wo object ke andar ka access deta hai.
}

console.log(jsUser.greeting()); /* Hello JS User
undefined*/
console.log(jsUser.greetingTwo()); /*Hello JS USer, Saket
undefined */

//undefined dikhta hai kyoki ek execution apne aap hota hai

//generally hum log access krte hai using dot, but special cases mei we'll use square brackets.












