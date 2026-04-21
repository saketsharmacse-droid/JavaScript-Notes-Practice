//objects ko singleton ke tarah bhi krr sakte hai and object literals ke tarah bhi
//here we'll see using singleton using constructors

const tinderUser = {} //non-singleton object
console.log(tinderUser); // {} empty object

const tinderUser1 = new Object() //singleton object
console.log((tinderUser1)); //{} empty object

// yeh dono declarations mei koi internal difference ni hai, its just that one is singleton and other one is non-singleton.

const tinderUser2 = {}

tinderUser2.id = "123abc"
tinderUser2.name = "Saket"
tinderUser2.isLoggedIn = false

console.log(tinderUser2); //{ id: '123abc', name: 'Saket', isLoggedIn: false }

const regularUser = {
    email:"ss@email.com",
    fullName:{
        userFullName: {
            firstName:"Saket",
            lastName:"Sharma"
        }
    }
}

console.log(regularUser.fullName); //{ userFullName: { firstName: 'Saket', lastName: 'Sharma' } }
console.log(regularUser.fullName.userFullName.lastName); //Sharma
//mutiple levels of nesting is possible
//optional chaining krke hota hai ek, jisme if koi level of nesting exist hi nhi krta jaise suppose username exist nhi krta, toh , just to check, we use a ? for chrcking, if exist krta hai toh aaghe badhega wrna ni. APIs repsonses lene time we use this very much.

const obj1 = {
    1:"a", 2:"b"
}

const obj2 = {
    3:"c", 4:"d"
}

const obj3 = { obj1, obj2} //woi array jaisi problem aayegi, object ke andar ek object aa ajyega
console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }


const obj4 = Object.assign({},obj1, obj2)
// const obj4 = Object.assign({},obj1, obj2)empty parenthesis dena is a standard, it guarantees that output orignal expected format mei hi aayega.
console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//{} is used as an empty array, or empty object, kyoki actuakky mei hota kya hai na, ki {} isko target consider kiya jata hai and naaki saare ko source, and saare merge hoke isi mei copy kiye jate hai, wrna isko use ni krne se n=bhi koi dikkat ni hoga, yeh actually mei obj1 ko hi target consider consider krke usi mei copy krr dega.
//mdn mei padh lena ek bar, kuch kuch aur hai isme assign mei

//actaully mei, we'll use it like this: to merge
const obj5 = {...obj1,...obj2} //... is a spread operator
console.log(obj5); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//now, jab database se values aati hai, toh na, toh array of objects aate hai, jaise array of users
const users = [
    {
        id:"1",
        name:"Saket"
    },
        {
        id:"2",
        name:"Bhumi"
    },
        {
        id:"3",
        name:"Shivanee"
    },
        {
        id:"4",
        name:"Krishna"
    }
]
//actually, this is an array of objcts, which can be accessed as:
console.log( users[1].id); //2



//now, few interesting things
console.log(tinderUser2); //{ id: '123abc', name: 'Saket', isLoggedIn: false }
console.log(Object.keys(tinderUser2));//[ 'id', 'name', 'isLoggedIn' ] dataType is an array, mtlab ispe loop wagera laga ke we can use them further
console.log(Object.values(tinderUser2)); //[ '123abc', 'Saket', false ]
console.log(Object.entries(tinderUser2)); //[ [ 'id', '123abc' ], [ 'name', 'Saket' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser2.hasOwnProperty('isLoggedIn')); //true

//aur bhi methods wagera hai
/*
{1: 'a', 2: 'b'}
1: "a"
2: "b"
[[Prototype]]: Object
constructor: 
ƒ Object()
assign: 
ƒ assign()
create: 
ƒ create()
defineProperties: 
ƒ defineProperties()
defineProperty: ƒ defineProperty()
entries: ƒ entries()
freeze: ƒ freeze()
fromEntries: ƒ fromEntries()
getOwnPropertyDescriptor: ƒ getOwnPropertyDescriptor()
getOwnPropertyDescriptors: ƒ getOwnPropertyDescriptors()
getOwnPropertyNames: ƒ getOwnPropertyNames()
getOwnPropertySymbols: ƒ getOwnPropertySymbols()
getPrototypeOf: ƒ getPrototypeOf()
groupBy: ƒ groupBy()
hasOwn: ƒ hasOwn()
is: ƒ is()
isExtensible: ƒ isExtensible()
isFrozen: ƒ isFrozen()
isSealed: ƒ isSealed()
keys: ƒ keys()
length: 1
name: "Object"
preventExtensions: ƒ preventExtensions()
prototype: {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}
seal: ƒ seal()
setPrototypeOf: ƒ setPrototypeOf()
values: ƒ values()
arguments: (...)
caller: (...)
[[Prototype]]: ƒ ()
[[Scopes]]: Scopes[0]
hasOwnProperty: ƒ hasOwnProperty()
isPrototypeOf: ƒ isPrototypeOf()
propertyIsEnumerable: ƒ propertyIsEnumerable()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
valueOf: f valueOf()
__defineGetter__: ƒ __defineGetter__()
__defineSetter__: ƒ __defineSetter__()
__lookupGetter__: ƒ __lookupGetter__()
__lookupSetter__: ƒ __lookupSetter__()
__proto__: (...)
get __proto__: ƒ __proto__()
set __proto__: ƒ __proto__()

*/













