const accountId = 144553 //const means value is locked to that variable
//accountId, account_id, account_Id are different conventions
let accountEmail = "Saket@gmail.com"
var accountPassword = "Saket@2003"
accountCity = "Bilaspur" //this is also a possible variable declaration in js
let accountState; //js considers this variable without value as undefined
//js mei semicolon lagaye na lagaye yeh totally aapki marzi hai

// accountId = 2
//not allowed to edit the const

accountEmail = "ss@gmail.com"
accountPassword = "ss@212121"
accountCity = "Bhilai"

console.log(accountId);
console.log(accountEmail)

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


// The var is not used much, let is used
// there used to be a problem with js, isko nhi pta hota tha ki scope kya hota hai!
// Scope mtlab curly braces, jaise ki for loop yaa if else ka body rhta hai uske andar
// js mei yeh problem thhi ki wo scope ko recognise hi nhi krta tha phle, scope paradigm pe kaam hi nhi krta thha.
// blockScope krke ek cheez hoti thi, uspe iska koi control nhi thha.

// var use krne se kya hota tha ki na, scope ke andar ke andar if same variable multiple times use hue hai, toh har baar confusion hota tha js ko, ki konse variable ka value ko change krna hai!
// isliye var ke saath let laaya gya, jo ki yeh sab ko avoid krwata hai.

/*
Prefer not to use var because of issue in block scope and functional scope


*/ 

