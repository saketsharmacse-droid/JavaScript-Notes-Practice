// let a = 10
// const b = 20
// var c = 30



//{} braces with functions or if-else is called as scope.

var c = 300

if (true) {
    let a = 10
    const b = 20
    var c = 30

}

// console.log(a); //error a is not defined
// console.log(b); //error b is not defined
console.log(c); //30 as it is a var
//isliye log var use nhi krte hai

var d = 67 //global scope
//{} block scope
//block scope ke pass global ka access rhta hai, but black ke ander ki values bahar nhi jaati hai.

let a = 300 

if(true){
    let a = 10;
    const b = 20;
    console.log("inner: ", a); //inner:  10
    function addNum(){} //functions ko bhi use krr sakte hai.
}

console.log("outer: ", a);//outer:  300

//hence , block scope and global scope

// for(let i = 0; i < array.length, i++){
//     const element = array[i];
// }
//hum yeh nhi chahenge ki iska i bahar ke code mei iterfere krre, isloye block scope use krte hai.





