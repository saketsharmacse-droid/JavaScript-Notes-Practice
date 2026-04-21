const marvel_heros = ["Thor", "IronMan", "SpiderMan"]
const dc_heros = ["SuperMan", "Flash", "BatMan"]

marvel_heros.push(dc_heros) //soch rhe hoge ki arrays merge ho jayenge haina, lekin aise nhi hoga, balki array ke abdar ek aur array aa jaata hai.
console.log(marvel_heros); //[ 'Thor', 'IronMan', 'SpiderMan', [ 'SuperMan', 'Flash', 'BatMan' ] ]

//arrays koi bhi data input lel leta hai, even another array as well
console.log(marvel_heros[3][1]); //Flash

marvel_heros.concat(dc_heros) //concatenation bhi krr sakte
console.log(marvel_heros); //[ 'Thor', 'IronMan', 'SpiderMan', [ 'SuperMan', 'Flash', 'BatMan' ] ]
//aise mei kaam nhi krega, as it returns a new array, to hold the answer


const allHeros = marvel_heros.concat(dc_heros) 
console.log(allHeros); 

//push usi array pe kaam krta hai, but concat returns a new array as output

const allHeros1 = [...marvel_heros, ...dc_heros] //yeh array ke elements ko individual values pe breakkrr deta hai, it actually "spreads".
console.log(allHeros1);

//we generally use spread operator, to avoid the hassle of concat

const anotherArray = [1 ,2 ,3 ,[4 ,5 ,6], 7, [6 , 7,[4,5]]]
const real_another_aray = anotherArray.flat(Infinity)
console.log(real_another_aray); /*[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
] */
//yaha pe, multiple arrays hai, ek ke andar ek, aur uske under aur ek, toh , itte depths keandar ke array kod saath mei laane ke liye , we use flat(depth)
//Infinity means we can go to the last depths, otherwise write the actual depth 

//jab hum data scraping kr rhe, toh web se data different formats mei aata, toh humein toh array mei chahiye, toh we use:
console.log(Array.isArray("Saket")) //kya saket ek array hai?
//false

//to convert to array
console.log(Array.from("Saket")) //isko ek array bna dega  [ 'S', 'a', 'k', 'e', 't' ]

console.log(Array.from({name: "SaketSharma"})) //[]
//interesting case: empty array de rha as yeh na, name: "Saket" iss cheez ko directly convert nhi kr paa rhe, toh phle se humein bolna padega, ki keys ka array bna rha yaa values ka sirf.
//nhi bna payega toh humesha ek empty array dega.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2, score3)); //.of: Returns a new array from a set of elements.
//[ 100, 200, 300 ]






