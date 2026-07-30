//thsi is the object based implementation of getter setter
const User = {
    _email: 'Saket@google.com',
    _password: 'Saket@12345',

    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email = email;
    }

}

//factory function use krke krenge.
const tea = Object.create(User) //user ke basis pe ek object create kro aur usko tea pe refer krr do.

console.log(tea.email);

//_ krne se private ho jata hai.
//getter setter jo default memory se leke aane waala operation hai usko overwrite krta hai.
//get krne se memory se leke aata hai, but wo nhi btyega ki kaise leke aaya, kaha se leke aaya uss private value ko. raste mei chhed chad ho gyi hai value se overwrite ho gyi hai.
