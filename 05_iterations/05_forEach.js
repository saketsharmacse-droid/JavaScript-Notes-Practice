//array ke andar kaafi saare loops execute ho jaate hai.

//for each loop
const coding = ["js", "ruby", "java", "python", "cpp"]
//array ke andar by default bahut saari iterations hoti hai
//kuchh loops array ke andar directly hi properties mei add krr dii jaati hai.

/*
(5) ['js', 'ruby', 'java', 'python', 'cpp']
0: "js"
1: "ruby"
2: "java"
3: "python"
4: "cpp"
length: 5
[[Prototype]]: Array(0)
at: at()
concat: concat()
constructor: Array()
copyWithin: copyWithin()
entries: entries()
every: every()
fill: fill()
filter: filter()
find: find()
findIndex: findIndex()
findLast: findLast()
findLastIndex: findLastIndex()
flat: flat()
flatMap: flatMap()
forEach: forEach()
length: 1
name: "forEach"
arguments: (...)
caller: (...)
[[Prototype]]: ()
[[Scopes]]: Scopes[0]
includes: includes()
indexOf: indexOf()
join: join()
keys: keys()
lastIndexOf: lastIndexOf()
length: 0
map: map()
pop: pop()
push: push()
reduce: reduce()
reduceRight: reduceRight()
reverse: reverse()
shift: shift()
slice: slice()
some: some()
sort: sort()
splice: splice()
toLocaleString: toLocaleString()
toReversed: toReversed()
toSorted: toSorted()
toSpliced: toSpliced()
toString: toString()
unshift: unshift()
values: values()
with: with()
Symbol(Symbol.iterator): values()
Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}
[[Prototype]]: Object
*/

//for each bhi loop ka hi ek parameter hai jo by default inject krr rkha hai array ke properties mei hi.
//yeh ek highrt order function hai.


//forEach :forEach(callbackfn: (value: string, index: number, array: string[]) => void, thisArg?: any): void
//A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
//Performs the specified action for each element in an array.

const coding1 = ["js", "ruby", "java", "python", "cpp"]
// coding.forEach( function name (){})
//call back function ka naam nhi hota hai

// coding.forEach( function (item) { })
//function(item) : item wo hai jo aap kehalwana chahte hai values ko, actually mei kya hoga, yeh function loop  itta smart hai ki automatically saare values ko ek ek krke apne parameter pe leke aayega, item naam se, uske baad aap jo krwana chah rhe wo value se usko krwa do, function ke body ke andar mei.

coding.forEach(function (val) {
    console.log(val);
    
}) /*
js
ruby
java
python
cpp
*/

//zaruri nhi ki isi way mei bus likh sakte.
//arrow functions ko bhi use krr sakte hai.
coding.forEach( (item) => { 
    console.log(item);
    
})


//aur interesting case:
function printMe(item){
    console.log(item);
    
}

coding.forEach(printMe) //not printMe()
//yeh bhi same waisi output dega.

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
    
})
/*
js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
*/
//forEach ke pass item ke alawa bhikuch kuch aur parameters aate hai, jaise index aur array.

const myCoding = [ 
    {
        languageName:"JavaScript",
        languageFileName:'js'
        
    },
    {
        languageName:"Java",
        languageFileName:'java'

    },
    {
        languageName:"python",
        languageFileName:'py'

    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
    
})