//array

const myArray = [0, 1, 2, 3, 4, 5, true, "Saket"] //we use square brackets for arrays.
//can contain different data type items, mixed type.
//collection of various items inside a single variable.
//indexing starts from 0, zero base indexing.
//()parenthesis
//[]Brackets
//{}Braces

console.log(myArray[0]); //0
//accessing array elements

//array Documentations
//array makes shallow copies, references to memories.
//Array is an object, and it can contain collection of multiple items under a single variable name.
//jS Arrays are resizable, once created, we can surely add new data items.
//mixed datatypes reh sakte hai, array ke andar array bhi ho sakta hai

//js arrays are not associative: cannot be accessed using strings, can be accesed only using the indexing, like not "one" but 0 index pe 1

//arrays mei jab bhicopy operation krenge , toh yeh shallow copies bnata hai
//shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as the source object from where opy has been made.
//just like pass by reference
//deep copies mei properties do not share the same references.

const myArray1 = [0, 1, 2 , 3, 4, 5, 6]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4, 5) //another way to declare array, (iske andar square brackets nhi lagega, bus values likhne lago).

/*
0: 1
1: 2
2: 3
3: 4
length: 4
[[Prototype]]: Array(0)
at: ƒ at()
concat: ƒ concat()
constructor: ƒ Array()
copyWithin: ƒ copyWithin()
entries: ƒ entries()
every: ƒ every()
fill: ƒ fill()
filter: ƒ filter()
find: ƒ find()
findIndex: ƒ findIndex()
findLast: ƒ findLast()
findLastIndex: ƒ findLastIndex()
flat: ƒ flat()
flatMap: ƒ flatMap()
forEach: ƒ forEach()
includes: ƒ includes()
indexOf: ƒ indexOf()
join: ƒ join()
keys: ƒ keys()
lastIndexOf: ƒ lastIndexOf()
length:0
map: ƒ map()
pop: ƒ pop()
push: ƒ push()
reduce: ƒ reduce()
reduceRight: ƒ reduceRight()
reverse: ƒ reverse()
shift: ƒ shift()
slice: ƒ slice()
some: ƒ some()
sort: ƒ sort()
splice: ƒ splice()
toLocaleString: ƒ toLocaleString()
toReversed: ƒ toReversed()
toSorted: ƒ toSorted()
toSpliced: ƒ toSpliced()
toString: ƒ toString()
unshift: ƒ unshift()
values: ƒ values()
with: ƒ with()
Symbol(Symbol.iterator): ƒ values()
Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}
[[Prototype]]: Object
constructor: ƒ Object()
hasOwnProperty: ƒ hasOwnProperty()
isPrototypeOf: ƒ isPrototypeOf()
propertyIsEnumerable: ƒ propertyIsEnumerable()
toLocaleString:ƒ toLocaleString()
toString: ƒ toString()
valueOf: ƒ valueOf()
__defineGetter__: ƒ __defineGetter__()
__defineSetter__: ƒ __defineSetter__()
__lookupGetter__: ƒ __lookupGetter__()
__lookupSetter__: ƒ __lookupSetter__()
__proto__: (...)
get __proto__: ƒ __proto__()
set __proto__: ƒ __proto__()
*/

//Array methods

myArray.push(6)
console.log(myArray) //[ 0, 1, 2, 3, 4, 5, true, 'Saket', 6 ]
myArray.push(7)
console.log(myArray) //[ 0, 1, 2, 3, 4, 5, true, 'Saket', 6, 7 ]
myArray.pop() //pop mei koi argument nhi dena rhta hai, simply last inserted value ko remive krr dega.
console.log(myArray)

myArray.unshift(0)
myArray.unshift(9) //Inserts new elements at the start of an array, and returns the new length of the array.
//kabhi kabhi humein at the start insert krna rhta hai values ko, though this task is very not optimised, as it puts a pressure on cpu, all the elements have to be shifted towards the right side, to insert the new data, so it exerts a pressure on cpu if array is huge.

myArray.shift() //we do not give any parameters or arguments, it pops the last unshift
//Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(myArray);

//few array methods are questionaarie types, that return the boolean values as result
console.log(myArray.includes(9)) //true/false boolean type

console.log(myArray.indexOf(3)); //4
console.log(myArray.indexOf(19));//-1
//if wo value nhi hai array mei, toh -1 return krega as an index

const newArr = myArr2.join() //Adds all the elements of an array into a string, separated by the specified separator string.
//join operation bind krr diya hai array ko into string type
console.log(myArray) //[ 0, 0, 1, 2, 3, 4, 5, true, 'Saket', 6 ]
console.log(newArr); //1,2,3,4,5
console.log(typeof newArr); //string

//slice, splice

console.log("A ", myArray) //A  [ 0, 0, 1, 2, 3, 4, 5, true, 'Saket', 6 ]
const myN1 = myArray.slice(1, 3) //1 inclusive and 3 exclusive
console.log(myN1);  //[ 0, 1 ]
console.log("B ", myArray); //B  [ 0, 0, 1, 2, 3, 4, 5, true, 'Saket', 6 ]

const myN2 = myArray.splice(1, 3) //1 and 3 both inclusive
console.log("C ",myArray); //C  [ 0, 3, 4, 5, true, 'Saket', 6 ]
console.log(myN2); //[ 0, 1, 2 ]

//whats the prime difference between slice and splice: its not just that splice mei last waala bhi include rhta hai and slice mei nhi rhta.
//actually mei, the real difference is that slice doesnot manipulate or cchange the original array, but splice changes the original array, as in C.



