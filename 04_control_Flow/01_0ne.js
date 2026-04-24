//control flow yaa logic flow
//zaruri nhi ki poora code humara run hona chahiye
//jaise, if login wala module use krr rhe, toh uss tipe pe sirf login ka code run hota hai

//if

// if (true){
//     //andar ka code execute hoga
// }

// if (false){
//     //iske andar ka scope execute nhi hoga
// }

const isUserLoggedIn = true

if(isUserLoggedIn){

}

//there are several comparison operators :
//<, >, <=:Ek saath do checks krta hai, >=, ==, !=, ===: this checks the type as well, !==: yeh strict negative side mei check krta hai.

if( 3 != 2){

}

if(2 == "2"){
console.log("Executed"); //Executed

}

if(2 === "2"){
    console.log("Executed two"); //no output
    
}

if(2 !== "2"){
    console.log("Executed three"); //Executed three
    
}

const temperature = 42

if (temperature < 50){
    console.log("Temperature is less than 50");
    
}
else {
console.log("Temperature is Greater than 50"); }


if (temperature === 50){
    console.log("Temperature is less than 50");
    
}
else {
console.log("Temperature is Greater than 50"); }





const score = 200

if (score > 200) {
    const power  = "fly"
    console.log(`User Power ${power}`); //yeh execute ho jayega
    
}
// console.log(`User Power ${power}`) //power is not defined
//scope ke bahar hai


//isi liye hum log var use nhi krte hai.
//var ka scope is completely global, and it creates a lot of problem as it is accessed by anyhwere.
if(score > 150){
    var power = "swim"
    console.log(`User power: ${power}`); //yes, execute
    
}
console.log(`User power: ${power}`); //yes, execute

//isliye we use let and const, as inn dono mei scope ka issue nhi hai.


//there is a shorthand notation as well:
const balance = 1000

if( balance > 500){

} //scope use kiye


if(balance > 500) console.log("test"); //this is a shorthand notation, it assumes it to be in this scope, but same line mei likhna hai and semicolon is necessary here.

//multiple statements bhi likh sakte hai
if(balance > 500) console.log("test1"),
console.log("test2");
// this is a highly unreadable code, but yes , it is possible to do this.

if (balance < 500){
    console.log("less than 500");
}
else if( balance < 750) {
    console.log("less than 750");
}
else if ( balance < 900){
    console.log("less than 900");
    
}
else {
    console.log("less than 1200");
    
}


// real life mei use of if-else:

const userLoggedIn = true
const debitCard = true
const loggedInGoogle = false
const loggedInEmail = true

if(userLoggedIn && debitCard){
    console.log("User is allowed to buy courses!");
}
//and condition, checks for both to be true in order to be true
//and mei dono statements true rhna chahiye

if(userLoggedIn && debitCard && 2 == 3){
    console.log("User is allowed to buy courses!");
}//isme wo andar jayega hi nhi.

if (loggedInEmail || loggedInGoogle){
    console.log("User is logged in!");
    
}//we can check for multiple conditions

//aaghe jaake hum conditional rendering bhi krenge.





