//there are  certain loops jo array pe hi specialize krte hai.
//array pe loop lagana is so common, since all the data we get from servers and apis are in format of array, toh bahut zyada hi deal krna rhta hai arrays se.

//for of

// ["", "", ""] //array ke andar strings.
// [{}, {}, {}] // array ke andar objects is a fairly common practice.

const arr = [1, 2, 3, 4, 5]

// for (const iterator of object) { //arrays, objects strings sab iterable hai
        //object is not that js waala object, but object mtlab cheez, kis cheez upar loop lagana hai.
    
// }

for (const num of arr) {
    console.log(num);
    
} //isme koi declaration, koi increment, koi comparision nhi lagega.

const greetings = "Hello World!"
for ( const greet of greetings) {
    if(greet == " "){
        continue //space ko skip krr dega.
    }
    console.log(`Each char is ${greet}`);
    
}


//Maps
//unique values hoti hai iske andar.
//map apne aap mei ek object hai
//map ek object hai, jo key-value pairs hold krta hai.
//objects order ko yaad nhi rakhte hai, but map remembers the order of insertion
//keys can be any values, numbers strings any.
//duplicate values nhi hoti hai, saari unique values hi rhti hai isme.



const map = new Map()
map.set('IN', "India")
map.set('RSA', "Russia")
map.set('US', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") //firse add nhi krega, but error bhi nhi dega.

console.log(map);
/*
Map(4) {
  'IN' => 'India',
  'RSA' => 'Russia',
  'US' => 'United States of America',
  'Fr' => 'France'
}
*/ //unique values hi rhegi and order bhi same rhegi


//applying loop in map
for (const key of map){
    console.log(key);
    
} 
/* [ 'IN', 'India' ]
[ 'RSA', 'Russia' ]
[ 'US', 'United States of America' ]
[ 'Fr', 'France' ]
 */

//agar alag alag output chahiye kry aur value ka:
//array ka destructure krna padega using []
for (const [key, value] of map){
    console.log(key, ':- ', value);
    
} 
/* 
IN :-  India
RSA :-  Russia
US :-  United States of America
Fr :-  France 
*/


//if object diya hai, usme laga sakte loop:
// const myObj = {
//     'game1': 'NFS',
//     'game2': 'SpiderMan'
// }

// for ( const [key, value] of myObj) {
//     console.log(key, ':-', value);
    
// }
//myObj is not iterable
//object ko iterate krne ka different way rhta hai.

// const myObj = {
//     game1: 'NFS',
//     game2: 'SpiderMan'
// }

// for ( const [key, value] of myObj) {
//     console.log(key, ':-', value);
    
// } //myObj is not iterable

