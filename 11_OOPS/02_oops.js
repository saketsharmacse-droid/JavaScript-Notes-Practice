//yaha pe constructor function padhenge.

// const promiseOne = new Promise();
const date = new Date();
//new keyword is a constructor function actually.
//yeh humein allow krta hai ki ek hi object literal se multiple instances bna sakte hai.
//ek hi instance mei bhle memory pe jagah ni jaari, but jaise promise ya date pe we need new instance, purani values rakho whi pe this wagera se, purami values ko affect mat kro, purana execution context rakhe rho apna apna.

//function ek hi baar run hota hai, uska ek hi global execution context hota hai.
function User(userName, loginCount, isLoggedIn){
    // MyuserName = userName;
    //left side waala value is our variable, aur right hand waala is the one jo hum pass krke de rhe hai
    //we often use the same name in general codingconventions for both.
    //this keyword ka use krte hai.
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greetings = function(){
        console.log(`welcome ${this.userName}`);
        
    }//usme methods bhi likh sakte hai.

    return this; //yeh nhi krenge toh bhi same hi result, as yeh implicitly defined rhta hai by default hota hai.
}

// const userOne = User("Saket", 12, true);
// const userTwo = User("ChaiCode", 11, false); //yeh overwrite krr dega user ko, and bina userTwo ko print kiye hue bhi humara value overwite ho jayega.
//this is a huge problem, isliye we use new keyword.

//new constructor function hai, jo ki ek new instance de deta hai, ek new copy, fir uske saath jo bhi kro, jo bhi kheloge wo aapke hawale hai, overwrite nhi krega.

// console.log(userOne);

const userOne = new User("Saket", 12, true);
const userTwo = new User("ChaiCode", 11, false);

console.log(userOne);
console.log(userTwo);//ab dono ki apni alag alag copies rhegi.


//new keyword:
//jaise hi hum new keyword use krenge, toh ek empty object create hoga, jisko instance bola jata hai, ek empty {}, new object create hoga.
//step1: new object create hoyega.
//step 2: ek constructor function call hoga new k/w ke karan, yeh kya krta hai, jitte bhi arguments wagera rhte hai unko pack krta hai aur aapko de dta hai.
//step 3: this keyword ke andar jo bhi arguments wagera hai wo sab usme inject ho jata hai.
//step 4: aaplo mil jata hai function ke andar.

console.log(userOne.constructor);//[Function: User]
//kyoki constructor ek reference hai khudke baare mei.

//instanceof() krke ek method hota hai, which checks ki same instancehai ya different. read from mdn.







