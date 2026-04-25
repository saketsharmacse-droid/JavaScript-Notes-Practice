//reduce : usr supplied reducer
//phle array ke andar callback lagane se index milra tha, item milra tha, poora poora array bhi mil rha tha.
//yaha pe accumulator aur currentvalue milti hai
//(accumulator, currentvalue) => accumulator + currentvalue, initialvalue
//yaha pe, sirf ek aur first baar, the value of initial value goes inside accumulator, and array ki first vaue rhti hai current value mei
//actually, yeh shuru hota hai ek empty variable se, initial value waale se.
//uske baad, saari values jo jo new values aari hai, wo sab jaati hai accumulator mei, and current move hote jata hai reduce ke loop ke saath, throughout the array.
//final sum har baar ikattha krke accumulator mei jata hai, but first tim mei initial value ko hi bus leta hai.

const nums = [1 ,2, 3]
const myTotal = nums.reduce(function (acc, currVal) { 
    console.log(`acc: ${acc} and currval: ${currVal}`);
    
    return acc + currVal
}, 0 ) //0 is initial value , zaruri nhi 0 hi do, 3 bhi de sakte, kuch bhi de sakte
console.log(myTotal);

//used when we have to add price of items in shopping cart.


const myTotal1 = nums.reduce((acc, currval) => acc + currval, 0)
console.log(myTotal1);



//shopping cart
const shoppingCart = [
    {
        itemName:"JS Course",
        price:2999
    },
    {
        itemName:"JS Course",
        price:2999
    },
    {
        itemName:"Python",
        price:999
    },
    {
        itemName:"Mobile Dev Course",
        price:5999
    },
    {
        itemName:"Data Science Course",
        price:9999
    }
]
//we want to add all the prices in shopping cart

const totalPay = shoppingCart.reduce((acc, item) => acc + item.price,0)
console.log(`Rs ${totalPay}`); //22995
