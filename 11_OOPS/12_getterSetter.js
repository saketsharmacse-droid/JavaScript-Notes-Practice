//yaha pe dekhenge ki properties ke through kaise use krte hai get aur set.
//fairly ek old syntax hai yeh.

function User(email, password){
    this._email = email;
    this._password = password;

    //class nhi tha phle toh get set methods nhi thhe.
    //function ke do behaviours hai, wo khudmei ek function bhi hai aur object bhi hai.

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase();
        },
        set: function(value){
            this._email = value;
        }
    })


Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase();
        },
        set: function(value){
            this._password = value;
        }
    })
}

//this is a function based syntax, but hum object based synatx bhi use krr sakte hai aur usme bhi getter setter laga sakte hai.

const chai = new User("chai@chai.com","chai")
console.log(chai.email);

