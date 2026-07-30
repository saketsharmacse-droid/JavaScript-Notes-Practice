//hum sab kuch es6 ke baad ka hi use krr rhe.
//js mei classes sirf ek syntactic sugar hai jo constructor se hota hai.


//jaise hi class se ek object initialize hoga, jaise hi new keyword kaam mei loge, waise hi constructir call hoga.
class User {
    constructor(username, email, password){
        this.username = username;
        this.password = password;
        this.email = email;
    }

    encryptPassword(){ //direct ek method hai encryptPassword
        return `${this.password} abc`
    }

    changeusername() {
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("saket", "saket@google.com", "12345")
console.log(chai.encryptPassword());//12345 abc
console.log(chai.changeusername());//SAKET

//behind the scene
//agar class k/w nhi rhta toh kaise kaam hoti.

function User1(username, email, password) {
    this.username = username;
    this.password = password;
    this.email = email;
}

User1.prototype.encryptPassword1 = function(){
    return `${this.password} abc`
}

User1.prototype.changeusername1 = function(){
    return `${this.username.toUpperCase()} abc`
}

const tea = new User1("tea", "tea@google.com", "12345")

console.log(tea.changeusername1);
console.log(tea.encryptPassword1);
