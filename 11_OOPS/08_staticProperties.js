class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`UserName: ${this.username}`);  
    }

    static createId(){
        return `123`;
    }
    //static will not let other methods access this function, call krne pe error aayega.

}

const saket = new User('Saket');
// console.log(saket.createId()); error aayega, as static

class Teacher extends User {
    constructor(username, email){
        super(username);
        this.email =  email;
    }
} 

const iphone = new Teacher("iphone", "i@phone.com")

iphone.logMe();//UserName: iphone
// console.log(iphone.createId()) error aayega, as static child ko bhi access krne nhi de rha.