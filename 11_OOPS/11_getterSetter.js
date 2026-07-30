class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    //if kuch nhi likh rhe, toh getters setters ka default behaviour rhega hi rhega class mei, yeh phle se rhte hai class mei.

    //getters setters hum kisi bhi property/variable pe laga sakte.

    get password(){
        return `${this._password.toUpperCase()}saket`
    }
    //class ke bahar se kuch value get krna chah rhe toh get.
    //class ke bahar se kuch value set krna chah rhe toh set.
    set password(value){
        // this.password = value;
        this._password = value;

    }

    //Maximum call stack size exceeded
    //yeh error means ki constructor mei bhi hora and object mei bhi, toh value ko lagane mei ek race lag jaati hai dono mei.
    //prolem yeh hai ki constructor bhi set krr rha hai and setter bhi et krr rha hai, toh dono ke beech ek race lag jaati hai and call stack bhar jaata hai poora.

    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email = value;
        //setters mei return nhi krte.
    }
}

const saket = new User("saket@gmail.com", "myPassYouWord");
console.log(saket.password);
//but bahut saare cases mei mujhe fine grain krna padega, like password nhi return kr saka ya encrypted waala return kru, toh waha pe getter setter use hoga.

console.log(saket.email);
