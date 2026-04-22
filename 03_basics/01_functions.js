//functions ke baare mei padhne ke saath saath thoda thoda sa memory management bhi dekhna padega, specially call stack and all.

// console.log("S");
// console.log("A");
// console.log("K");
// console.log("E");
// console.log("T");
//ab, yeh kaam baar baar krunga toh bahut time lagega, toh we use functions
//functions waha pe use krte hai jaha jaha pe we have to do the same work multiple times, and where we have to increase the code reusability.

//(): function ka scope
//{}: function ka definition

function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("K");
    console.log("E");
    console.log("T");

}

// sayMyName : this is the reference of function.
//sayMyName(): yeh ho gya function ka execution.

sayMyName()

sayMyName //kuch ni aayega o/p mei

function addTwoNumbers(num1, num2) {
    //js ke andar numbers ka type dene ki need nhi rhti.
    console.log(num1 + num2);
}

addTwoNumbers() //NaN
addTwoNumbers(3 , 5) //8
addTwoNumbers(3 , "5") //35
addTwoNumbers(3 , "a") //3a
// addTwoNumbers(3 , a) error
addTwoNumbers(3 , null) //3

//para,eters and arguments
//parameters usko bolte jo function ke declaration ke time pe dete hai , here num1, num2
//arguments are those which are given during the function call,  here 3, 5

//function return kys krr rha? function wo return nhi krta jo wo print krta hai
const result = addTwoNumbers(4,6) //10
console.log("result is: ", result);//result is:  undefined


function addNumbers(number1, number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2
    console.log("hello function"); //this is an unreachable code, as return statement ke baad kuch bhi execute nhi hota hai.
}
const result1 = addNumbers(3, 78)
console.log("result is: ", result1); //result is:  81
//jab hum function se kuch return krenge, tab usko kisi variable mei store krr sakte hai.

//more ways:
function loginUserMessage(username){
    if(username == undefined){ 
        console.log("Please enter a username")
        return  //return krne se next line wont execute
    }
    return `${username} just logged in!`
}

loginUserMessage("Saket") //no output, function execute hua hai, but koi output nhi mulega as returned message ko kahi pe bhi store nhi kiya gya hai.
console.log(loginUserMessage("Saket")) //Saket just logged in
console.log(loginUserMessage(""))// just logged in!
console.log(loginUserMessage())//undefined just logged in! //Please enter a username
//no arguments mei null nhi, but undefined return hota hai.

//we can check the value is present or not using if else:
//if(username == undefined){ console.log("Please enter a username")} //return : return krne se uske baad waala statement execute nhi hoga.

//we can alsoe use it like:
//  if(!username){ 
//         console.log("Please enter a username")
//         return  //return krne se next line wont execute
//     }

//"" is considered as false by default
//undefined is considered as false by default

//agar iss types se situation hai ki hum completely waise caes ko avoid krna chc=ahte hai jispe user input hi na de, toh hum log default values sue krr sakte hai.
function loginUser1(username = "sam"){
    return `${username} just logged in!`
}
console.log(loginUser1()) //sam just logged in!
console.log(loginUser1("Saket")) //Saket just logged in!