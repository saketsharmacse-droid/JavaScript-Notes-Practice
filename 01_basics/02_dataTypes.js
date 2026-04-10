// phle ka js aur abhi ke js mei bahut fark hai, phle ke js mei modules, classes, arrowfunctions yeh sab nhi hote thhe
// purane codes mei yeh sab nhi rhte hai, so no one wants the old version of codes to get unusable, so , the people who manage js decided for the use of "use strict", which considers the codes that will be written in the newer versions of js.

"use strict";  // treat all js codes as newer versions
// alert("hello")
// alert( 3 + 3)
//we are using node.js here, not browser
//alert ko node ke andar use krne ka ab ek different syntax hai, here it'll throw errors
//alert can be used directly in the browsers console, jisme wo popup window mei o/p dega, but node doesnot support it yet.


//generally, we avoid using semicolons in node and react
//console.log(3+3) console.log(3*2)  This will throw errors
//console.log(3+3); console.log(3*2) This will be executed

//it's also abour code readibility, in real, both of these are bad coding practices, making the code difficult to read, write this in separate lines

console.log( 3 +
    4
) //code readibility should be high
//this is allowed as js automatically removes and avoids spaces.

//Documentation:
// the MDN documentation is relatively good, but the official documentation is the TC39 of ECMA Scripts.


let name = "hitesh"//string dataType
let age = 18  //Number DT
let isLoggedIn = false //boolean
let state; //undefined
let country = null //i am intentionmally saying that this value is empty, nothing resides here. 
//this is not undefined, yeh bus khaali hai
//jaise server se temperature aari, toh 0 bhi useful hai, so we'll use null

//number => 2 to the power 53 range
//bigInt: used for very large numbers
//string: can use both single or double quotes
//boolean: true/false

//null
//js null is a datatype as well as a "standalone value"  , Null is a representation of empty value, that is, it means that "" is not null as this is string, but null means that nothing is there at all.

//undefined : undefined means that no value has been assigned still.
//symbol: used more in frameworks. jab bhi baat krni hai unique ke liye, we use symbol

//object

console.log(typeof "saket") //string
console.log(typeof null) //object
console.log(typeof undefined) //undefined



