//Immediately Invoked Function Expression (IIFE)
//it's an interesting js concept
//jaise hi humnein ek function likha, usko immediately execute krwana hai.

//kabhi kabhi hum sirf  aise functions yaa program bnate hai jo bus database mei connection establish hota hai, humein kabhi kabhi sirf aise functions chahiye rhte hai jo ki program execution ke turant baad database mei connection establisg krr de, yaanein ki , turant execute ho jaaye.
//wrna , aur aise cases rhte hai jisme global scope ke variables may pollute and interfere with the local or function's scope, so to avoid such pollution by the global scopes, we'll use the iife functions.

(function chai() {
    console.log("DB CONNECTED");
    
})(); //this is the semicolon that ends the context of this execution

// chai() //DB CONNECTED

// (function definition)(function execution);

//global scope ke variables se jo pollution hoti hai, toh uss pollution ko hatane ke liye jo technique use krte hai,jisme function turant execute ho jaata hai, usko iife bolte hai.

//js ko nhi pta ki iss execution context ko kab end krna hai, toh wo execute krte hi rhega, we have to end it using a semicolon, wrna aaghe ke saare codes ko error bolega.

(function chai(){
    //named IIFE
    console.log("DB CONNECTED");
    
})();

(() => {
    console.log(`DB Connected Two`); //DB Connected Two
    
})(); //unnamed iife using arrow


((name) => {
    console.log(`DB Connected Two ${name}`);
    
})('Saket') //unnamed iife and parameter passing

