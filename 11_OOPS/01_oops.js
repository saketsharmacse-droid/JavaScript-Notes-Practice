//object literal: literally ek object
const user = {
    username:"Saket Sharma",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got Usert Detaild from the DataBase.")
    }
}

//suppose ek prototype hai, abusko hum use krenge toh uss prototype ko kaise pta chlega ki konse function yaa konse method ka data ko use krna hai.
//mtlab jaise ki, humare pass do user objects hai user1 and user2, ab meko username extract krna hai, toh kaise pta chlega prototype ko ki konse user ka username maang rha, toh waha pe not found error dega, kyoki wo configure hi nhi krr payega ki konse user ki value pass ho rii.
//isko bolte hai context, if mujhe chahiye, this keyword use krke mai current contect ki values nikal sakta hu.

const user1 = {
    username:"lolo polo",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got Usert Detaild from the DataBase.")
        // console.log(username) :ReferenceError: username is not defined at Object.getUserDetails 
        console.log(this.username)
        console.log(this) //yeh current contect ka poora object dega.
    }
}

console.log(user.username);
console.log(user.getUserDetails());
console.log(user1.getUserDetails());

//agar mai global context pe this print krwaunga:
console.log(this) //{}
//empty aaya but actually mei global context pe bahut saari cheez hai kyoki waha pe window object rhta hai.
//node environment mei empty aaya but browser environment mei poora window object aayega.


