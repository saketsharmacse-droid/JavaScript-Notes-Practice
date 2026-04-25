const myObj = {
    js:'JavaScript',
    cpp:'C Plus Plus',
    rb:'Ruby',
    swift:'Swift by Apple'

}
//for of loop maps pe kaam krr rha tha but object pe nhi krr rha tha

//for in
for(const key in myObj) {
    console.log(` ${key} shortcut is for ${myObj[key]}`);
    
}
/*
js shortcut is for JavaScript
cpp shortcut is for C Plus Plus
rb shortcut is for Ruby
swift shortcut is for Swift by Apple 
*/

//kya yeh for in loop arrays ko iterate krr lega?
const programming = ["js", "python", "cpp", "rb"]
for(const key in programming){
    console.log(key);
    console.log(programming[key]);
    
    
} //for of values return krta tha but here, for in is returning the keys of that array.

//for of and for in mei majorly yhi difference hai ki array ke case mei for in keys return krta hai.


//kya for in ko map mei use krr sakte?
const map = new Map()
map.set('IN', "India")
map.set('RSA', "Russia")
map.set('US', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") //firse add nhi krega, but error bhi nhi dega.

for(const key in map){
    console.log(key);
    
} //kuch bhi output nhi aaya
//map is not iteratable, isliye nhi aaya yaha pe.
//maps are actually iterable,but not enumerable, as keys ko internally store krta hai.
//for of works well with maps because maps use symbol iteration, which knows how it has to be iterated.

