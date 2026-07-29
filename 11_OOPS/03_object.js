//under the hood of prototypes and new and this
function multiplyBy5(num){
    return num*5;
}

multiplyBy5.power = 2;

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype); //{}
//prototype sirf kuch methods nhi but uske saath internal properties bhi deta hai.
//{} refers to the current contect at that prototype, returned by the this k/w

//actually hum functions ko object ki tarah bhi use krr sakte hai.
//that means ki js mei functions are both functions and objects, kyoki end mei wo object ko hi refer krr rha hai apne prototypal inheritence mei.

//prototypal inheritence:
//suppose array hai theek, ab array further prototypes mei break hoga toh wo object refer krega, and har object ultimately null ko refer krta, so it'll stop.
//like there are objects, classes , array, function aur string, sab end mei ek object ko refer krenge, kyoki prototypal inheritance stops at null, and so jsmei sab kuch end mei ek object hi hota hai.

function createUser(username, score){
    this.username = username;
    this.score = score;
}

//hum aona khudka user defined prototype bhi bna ke inject krwa sakte hai function mei:
createUser.prototype.increment = function(){ 
    // score++; kiska score increment krega ? so we use this
    this.score++; 
    //mtlab yeh hai ki jisne bulaya uska score increment krega, current contect ka. 
}

createUser.prototype.printMe = function(){
    console.log(`Score is ${this.score}`)//kiska score?: this ka score.
}

//jab array declare krte hai, toh kay aise likhte hai: myArray.prototype.map ?: nhi hum seedha krte hai myArray.map
//kyoki js yeh sab behind the scene krta hai, kyoki multiple levels of prototype rhta hai, toh js yeh sab khud krr leta hai for already existing prototypes, khudse dhundh ke nikal leta hai.

// const chai = createUser("chai", 25);
const tea = createUser("tea", 250);

//const chai = createuser("chai", 25)
//chai ko nhi pta hai idhar ki ek new prototype bhi bna hua hai createUser ka.
//usko pta kaise chlega?: new keyword se.

const chai =  new createUser("chai", 25);
chai.printMe();

/* 
Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.


*/

