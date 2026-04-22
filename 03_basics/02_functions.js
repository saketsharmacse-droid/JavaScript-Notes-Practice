//shopping cart problem, user usme items add krte hi jaa sakte hai, krte hi jaa sakte hai, toh humein bus sabki price add krni rhti hai
//means, humein number of parameters unknown hai, but we need to add all of them.
function calculateCartPrice(num1){
    return num1
}

console.log(calculateCartPrice(2)); //2
console.log(calculateCartPrice(200, 400, 500)); //200

function calculateCartPrice1(...num1){ //... ko hi rest operator bolte hai and usi ko spread operator bolte hai. it just depends on the usecase.
    //yeh three dots will combine all the loose argumemnts, earlier 200, 500, 400 were loose, now they are bind into a single array.
    return num1
}
console.log(calculateCartPrice1(200, 400, 500)); //[ 200, 400, 500 ]

//rest operator is used to add multiple arguments in the function, used in parameter passing.

function calculateCartPrice2(val1, val2, ...num1) {
    return num1
}
console.log(calculateCartPrice2(200, 400, 500, 300)); //[ 500, 300 ]
//phle two values were taken by the val1 and val2, rest others were stored in num1 array.


//objects ko kaise pass krte hai function mei:

const user = {
    username:"Saket",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`);
    
}

handleObject(user) //Username is Saket and the price is 199
//typechecking bhi krr lena using if else kyoki if wo key us object mei defined nhi rhega toh undefined error show krega.

//another way to get object inside function parameter
// handleObject1({
//     username:"Saket",
//     password:"123asvd"
// })

//we can pass arrays as well into the functions.
const myNewArray = [200, 400, 100, 600]

function returnSecondvalue(getArray){
    return getArray[1] //returns the second value
    //getarray is a variable not some method ok.
}

console.log(returnSecondvalue(myNewArray)); //400
console.log(returnSecondvalue([200, 400, 500, 1000])); //400




