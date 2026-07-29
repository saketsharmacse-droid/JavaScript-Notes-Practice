# Prototype

- JS ka default behaviour prototypal hota hai.
-JS kabhi haar nhi maanti hai, agar usko ek level pe kuch nhi mila, toh aur upar jaate jayegi jaate jayegi, continue to access the parents and their parents and will stop only when success or it encounters with a null.
- isi prototypal behaviour se linked hoke use krta hai this keyword and other behaviours.
- arrow functions mei this ka link nhi hota hai kyoki because of prototype only.
- prototype hi wo hai jiske karan new keyword ka access milra hai, classes mili hai humein iske wajah se hi, this also isi ke karan hai, prototypal inheritence bhi isi ke karan hai, aur js classes bhi iske karan hi aaya hai.

``` js
const newhero = ['hulk', 'spiderman']
newHero
(2) ['hulk', 'spiderman']
0: "hulk"
1: "spiderman"length: 2
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
flat: ƒ flat()flatMap: ƒ flatMap()
forEach: ƒ forEach()includes: ƒ includes()
indexOf: ƒ indexOf()
join: ƒ join()
keys: ƒ keys()
lastIndexOf: ƒ lastIndexOf()
length: 0map: ƒ map()
pop: ƒ pop()push: ƒ push()
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
Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}
[[Prototype]]: Object
//yeh jo hai wo aur bhi prototypes hai, as we say js haar nhi maanta, upar jaate jata hai jaate jata hai.
//this is known as the prototypal inheritence.

```
