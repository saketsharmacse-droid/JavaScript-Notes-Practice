//JS ES6 aaya 2015 mei, and arrow functions were introduced
//this k/w bhi use hota hai

//this is used to refer to the current context.

const user = {
    username:"Saket",
    price:999,

    welcomeMesage:function(){
        console.log(`${this.username}, Welcome to my Website.`); //${username} aise krne se bhi kaam chlega yaha, but it is advised to use this.
        //actually mei, idhar humara current context kya hai, yeh poora const user = {} iss braces ke andar ka sab kuch, toh usko access krne ke liye this lagega.

        //ab dekhte hai this print krke:
        console.log(this); 
        /* {
  username: 'Saket',
  price: 999,
  welcomeMesage: [Function: welcomeMesage]
}
Sam, Welcome to my Website.
{
  username: 'Sam',
  price: 999,
  welcomeMesage: [Function: welcomeMesage]
} */
//yeh message aaya , referring to the current context.
        
        
    }

}

user.welcomeMesage //executes, but shows no output
user.welcomeMesage()//Saket, Welcome to my Website.

user.username = "Sam" //username ko change krr diya
//yaha pe humnein context change krr diya, context mtlab values.

user.welcomeMesage() //Sam, Welcome to my Website.
//yeh sam ho paaya, kyoki humnein value ko hardcode nhi krri thi, humnein kaha tha ki jo bhi current context hai, uss current contect kr under jo uss suername ki value hai usko print kro.

//yaha pe bhi ek this print krke, kyoki {} iske bahar konsa context hai konsa scope hai wo dekhte hai:
console.log(this); //{}
//node environment ke andar this refers to empty, as global object is empty object.
//browser ke andar yeh global object is windows.

function chai(){
    console.log(this);
}
    chai() /* <ref *1> Object [global] {
    global: [Circular *1],
    clearImmediate: [Function: clearImmediate],
    setImmediate: [Function: setImmediate] {
        Symbol(nodejs.util.promisify.custom): [Getter]
    },
    clearInterval: [Function: clearInterval],
    clearTimeout: [Function: clearTimeout],
    setInterval: [Function: setInterval],
    setTimeout: [Function: setTimeout] {
        Symbol(nodejs.util.promisify.custom): [Getter]
    },
    queueMicrotask: [Function: queueMicrotask],
    structuredClone: [Function: structuredClone],
    atob: [Function: atob],
    btoa: [Function: btoa],
    performance: [Getter/Setter],
    fetch: [Function: fetch],
    crypto: [Getter],
    navigator: [Getter],
    localStorage: [Getter/Setter],
    sessionStorage: [Getter/Setter]
    } */

function chai1(){
    let username = "Saket"
    console.log(this);
        /* <ref *1> Object [global] {
    global: [Circular *1],
    clearImmediate: [Function: clearImmediate],
    setImmediate: [Function: setImmediate] {
        Symbol(nodejs.util.promisify.custom): [Getter]
    },
    clearInterval: [Function: clearInterval],
    clearTimeout: [Function: clearTimeout],
    setInterval: [Function: setInterval],
    setTimeout: [Function: setTimeout] {
        Symbol(nodejs.util.promisify.custom): [Getter]
    },
    queueMicrotask: [Function: queueMicrotask],
    structuredClone: [Function: structuredClone],
    atob: [Function: atob],
    btoa: [Function: btoa],
    performance: [Getter/Setter],
    fetch: [Function: fetch],
    crypto: [Getter],
    navigator: [Getter],
    localStorage: [Getter/Setter],
    sessionStorage: [Getter/Setter]
    }*/
    console.log(this.username);//undefined
    //function ke andar this use ni ho paa rha to access, this context objects ke andar use ho paa rha hai, functions ke andar nhi.
    
    
}
chai1()

const chai11 = function(){
    let username = "Saket"
    console.log(this.username); //undefined
    
}

//arrow function:
const chai12 = () => {
    let username = "Saket"
    console.log(this);{}
    console.log(this.username); //undefined
    
    
}
chai12()


//Arrow Function:

const addTwo = (num1, num2) => {
    return num1 + num2

}
console.log(addTwo(2, 4))//6

//another way is implicit return
//yaha pe humein {} bhi ni use krna rhta, parenthesis bhi maan lega wo.
//implicit mtlb maan lena, wo maan lega ki return k/w bhi likhne ka need nhi hai
const addTwo1 = (num1, num2) => num1 + num2
console.log(addTwo1(3, 4));//7

const addTwo11 = (num1, num2) => (num1 + num2) //another way to write this
console.log(addTwo11(3, 5)); //8


//{}curly braces use krne pe return k/w likhna padega
//() parenthesis use krne pe return nhi likhna rhega

//ab, yeh () ka fayda kya hai:
const addTwo12 = (num1, num2) => {username:"Saket"}
console.log(addTwo12(2,4)); //undefined
//kyoki iss tarah se hum objects ko return krr hi ni sakte

//we have to use parenthesis to safe the execution
const addTwo13 = (num1, num2) => ({username:"Saket"})
console.log(addTwo13(2,5)); //{ username: 'Saket' }

//loops wagera mei bhi kaafi kaam aata hai:
const myArray = [2, 5, 7 ,9 ,4 ,3]
// myArray.forEach(() = > ()) //aise krke normal functions as well as arrow functions bhi use krr saket hai.










