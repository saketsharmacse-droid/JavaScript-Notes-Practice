function setUserName(username){
    //complex DB calls
    //complex calculatuons
    this.username = username;
    console.log("called");
    
}

function createUser(username, email, password){

    //setUserName(username);//kya yeh possible hai?

    //kya iss function ko call krne se iska EC iske andar aa jayega?
    //actually mei yaha pe call nhi hua hai, sirf reference gya hai.
    //call hua hai, but call hone ke baad EC se hata diya gya hai, uska reference bhi hata diya gya hai, toh humein reference hold krne ke liye ek js method call() use krna padega.

    setUserName.call(this, username);
    //this parameter pass krne se kya hoga ki usko current context milega.
    //setUsername function toh marr gya, uske references bhi hatt gye, uska jo this hai line 4  waala wo uss function ka khudka this hai, joki use nhi hoga as uska reference hi hat gya.
    //so, call ke parameter waala this reference ko rok ke rakhega.
    //ab bhle wo function hat jaaye, uske andar ka cheez humesha rhenge.
    //hence, call current execution context kisi aur function ko pass krr deta hai.

    this.email = email;
    this.password = password;
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai); //createUser { email: 'chai@fb.com', password: '123' }
//username nhi hora.
