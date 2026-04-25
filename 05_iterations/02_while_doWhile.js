//while loop

// while(condition){
    
// }

//loop mei same ek cheez hota hi hai, ek initialization, ek condition check and ek increment decrement.

let index = 0
while( index <= 10){
    console.log(`Value of index is ${index}`);
    index = index + 2
    
}

//array bhi le sakta hai:
let myArray = [ "Flash", "BatMan", "SuperMan", "IronMan"]
let arr = 0
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]} with index ${arr}`);
    arr = arr + 1
    
}


//do while loop:
// do {
    
// } while (condition);

let score = 1
do {
    console.log(`Score is ${score}`);
    score++
    
} while (score <= 10);



let score = 11
do {
    console.log(`Score is ${score}`);
    score++
    
} while (score <= 10); //Score is 11

//do-while loop mei kaam phle hota hai and condition baad mei check hoti hai.
//use do while when atleast ek baar toh loop body ko execute krwana hi hai.


