class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);//phle call(this,) aise krke krte thhe.
        this.email = email;
        this.password = password;

    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }

}

const chai = new Teacher("Saket","chai@teacher.com", 123);
chai.addCourse(); //A new course was added by Saket

const masalaTea = new User("masalaChai");
// masalaTea.addCourse(); iske pass access nhi hai
masalaTea.logMe();//USERNAME is masalaChai

console.log(chai === masalaTea); //false
console.log(chai === Teacher);//false
// kyoki chai is a instance , usse aaya hai reference se, not exactly equal.

console.log(chai instanceof Teacher); //true
console.log(chai instanceof User); //true
