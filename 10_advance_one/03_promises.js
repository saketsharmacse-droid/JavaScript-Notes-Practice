//promise ka mtlab yeh hai ki aapka request future mei run hoga.
//jaise we know, file accesing hum directly code se nhi krr sakte, we first access thekernal and then the kernal access the file.
//cryptography mei bhi we need these for encryption and all jaha pe time lagta hai.
//mobile development mei bhi jaise camera ka access permission wagera mei time lagta hai.

//so, bahut instances hote hai jaha oe humein time lagta hai toh access the entity, yaa thode future mei execute hoke aata hai.
//all these are asynchronous programming, jaha pe wait krke fir future mei aayega response
//we can use async and await concepts, but modern hai promises.

//hence, promise future mei jaake complete hote hai.
//promises are basically objects representing the eventual completion or failure of an asynchronous operation.

//promises ke teen states hote hai: pending, fullfilled, rejected.

//zyadatar operations mei promises consume krte hai, bnate bhi hai but mostly we consume.
//fetch('https://something.com).then().catch().finally()


//history: phle promise es6 se phle nhi tha, phle q aur bluebird use krte thhe, yeh dono libraries hai.
//phle by default nhi milti thi, installations needed thato use async/await jaisi functiuonality, but eventually unko merge krr diya gya tha nodeJS mei.
//npm install bluebird krke krte thhe, fir uske mrthods aur parameters aate thhe, but ab need nhi hai.
//still we can use them.

//do cheez hoti hai, promises ko create krna and consume krna.

// const promiseOne = new Promise(); //creating a promise
//new keyword se object ka new instance milta hai.


const promiseOne = new Promise(function(resolve, reject){
    //Do an async task here.
    //DB calls, cryptography tasks, network calls
    setTimeout(function(){
        console.log("Async Task is completed!")
        resolve();
    },1000)
}); 

// promiseOne.then() //.then() ka seedha connection hai resolve ke saath, ispe ek callback function milta hai, jo automatically ek argument return krta hai tha t has value returned by the promise creating function.

promiseOne.then(function(){
    console.log("Promise Consumed!")
})

//another way
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task Two!")
        resolve();
    }, 1000)
}).then(function(){
    console.log("Async Two Resolved!");
})


const promiseThree = new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve({username: "saket",email:"saket@google.com"})
            //resolve ke andar parameter mei data bhi pass krr sakte hai, be it object , array, functions.
        }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"saketsharma", password:"12345"});
        }
        else{
            reject('ERROR: Something went wrong');
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username;
    
}).then((MYusername) => {
    console.log(MYusername);
}).catch(function(error){
    console.log("error encountered!");
}).finally(() => console.log("The promise is either resolved or rejected!"))
//finally is default, yeh execute hota hi hota hai.


//bilkul zaruri nhi hota ki promise ko .then() ya .catch() se hi handle krr sakte, we can also use async()/await() based on usecases.
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"javaScript", password:"12345"});
        }
        else{
            reject('ERROR: JS went wrong');
        }
    }, 1000)
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive; //promise is an object, eventual completion object.
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}

//try catch block use krna padega kyoki asunc await independently handle nhi krr paate errors ko.

consumePromiseFive();


async function getAllUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users'); //returns a promise
        // const data = response.json(); response.json mei time lagega, toh isko bhi await krana padega.
        const data = await response.json();

        console.log(data);
    }
    catch(error){
        console.log("Error: ",error);
        
    }

}

// getAllUsers(); commented to execute the below code for clear output

//isi function ko .then() .catch() se execute krte hai.
fetch('https://api.github.com/users/saketsharmacse-droid').then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

//hum aaghe yeh sochenge ki git api waala data phle print ho jaara hai but upar ka code still baad tak ruk ke hora, like unko itta time kyu lag rha?!