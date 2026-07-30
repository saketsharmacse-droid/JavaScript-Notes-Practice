//ek interview question tha, ki kya mai js mei math.pi ki value jo hai 3.14159265.. isko change krke 4 krr sakta hu.

console.log(Math.PI);
Math.PI = 5;
console.log(Math.PI);

//hum change nhi krr paa rhe.
//aisa kya hai jo object ki normal behaviours ko use krne se rok rha?
//we can even stop objects from looping, fir koi bgi user uspe loop nhi laga payega.
//toh aisa kya hai that makes these type of things?



//yeh object ke baare mei kuch hidden cheezon ke baare mei btati hai.
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);
/*
{
  value: 3.141592653589793,
  writable: false, //yeh dekho!
  enumerable: false,
  configurable: false
}
  */

//hence, hum kisi bhi object ki descriptor properties ko access krke aone according change krr sakte hai, keys flags ko identify krke.
//but, PI ki value ke liye bahut saare checks hai, toh krna bahut mushkil hoga, like impossible.

// const myNewObject = Object.create(null)
const chai = {
    name: "ginger chai",
    price: "250",
    isAvailable:true,

    orderChai: function(){
        console.log("Chai fatt Gyi!");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
/* 
{
  value: 'ginger chai',
  writable: true,
  enumerable: true,
  configurable: true
} */

  //can we change the properties.
// Object.defineProperty(chai, 'name', {
//     writable: false,
//     enumerable: false
// })

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
/* {
  value: 'ginger chai',
  writable: false,
  enumerable: false,
  configurable: true
} */

for (let [key, value] of Object.entries(chai)) {
    //code fatt jayegi yaa aadhi chlegi agar uss object ke andar functions yaa kuch aur bhi ho other than key, value, so checks lagao.
    if(typeof value !== 'function') {
    console.log(`${key}: ${value}`);
    }
    
}

//enumerable false krke dekhenge toh name nhi ayega o/p mei.