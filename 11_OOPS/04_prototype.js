//yaha pe prototype padhenge aur inheritance.
// let myName = "Saket    "

// console.log(myName.length); 9
// console.log(myName.trim().length); 5
// console.log(myName.truelength); 


let myHeros = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

// Object.create() .create is a factory function of object.
Object.prototype.saket = function(){
    console.log(`saket is present in all objects.`);
}

heroPower.saket();

//array ka bhi dekhte hai:
myHeros.saket();

//humnein kya kiya yaha pe, seedha top level ki hierarchy acces krli, fir uske baad array string aur function teeno ke pass chli gyi same methods.

//lets test ki agar wo power sirf array ko du, toh kya by default object pass jayegi?
Array.prototype.heySaket = function(){
    console.log(`Saket says hello!`);
}

myHeros.heySaket();//iske pass access rhni chahiye
// heroPower.heySaket();//iske pas snhi aayegi power, so error.

//hence, array ko dene se uske siblings ko nhi milegi power, but agar path ko hi de diye power, toh sabko milega.

//inheritance:
const user = {
    name: "Saket",
    email:"Saket@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TAsupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user;

//prototypal inheritance: kisi aur ki properties ko access krr sakte hai.
//normally dekho, sabka apna instance rhta hai, koi kuch share nhi krta, toh new aur this wagera use krna rhta hai, but what if we want them to share common properties, toh __proto__ se link krr sakte hai, fir dusre object ko bhi access krr sakte hai new wagera use krke.

//modern syntax:
Object.setPrototypeOf(TeachingSupport, Teacher)//(kisko access deni hai, kiski property)
//teacher ki property teaching support ko accesss dega.
//behimd the scene whi __proto__ krke hi hora hai.

//classes ke andar extend wagera use hora hai, but as we kbnow, behind the scene yhi same cheez hora hai.



let anotherusername = "Saket   Sharma     ";
String.prototype.truelength = function(){
    console.log(`${this}`); //saket sharma mila kyoki another username ke andar reference directly usika tha.
    // console.log(`${this.name}`);
    console.log(`True length is : ${this.trim().length}`);

}

anotherusername.truelength();
/*Saket   Sharma     
undefined
True length is : 14*/

"Saket".truelength();
"icetea".truelength();
/*
Saket
True length is : 5
icetea
True length is : 6
*/

//this current instance ko btata hai, toh har baar jo call krega uska print hoga this.



