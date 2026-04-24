//Truthy and falasy values

const userEmail = "Saket@google.com"

if( userEmail){ //here, we did't do any comparison, but it was assumes that this string is a true value, known are the truthy.
    //string ko true consider krr liya gya
    console.log("Got the users's email");
    
}
else {
    console.log("Did'nt get the user's email.");
    
}

const userEmail1 = "" //empty string
if(userEmail1){
    console.log("Yes");
    
}
else{
    console.log("No");
    
}
//here , we will get No, as empty string ko yeh falasy maanta hai.

const userEmail2 = " " //not an empty string , isme space gai and space ko string maana jaata hai
if(userEmail2){
    console.log("Yes");
    
}
else{
    console.log("No");
    
} //yes

const userEmail3 = []; //empty array
if(userEmail3){
    console.log("Yes");
    
}
else{
    console.log("No");
    
}//yes


//Falasy Values:
//false, 0, -0, BigInt : 0n, "":empty sring, null, undefined, NaN

//inke alawa baaki sab truthy values:
//truthy values:
// " 0 ": truthy value, 'false', "false", " ": space, [] empty array, {} empty object, functin(){}: empty function

if(userEmail3.length === 0){
    console.log("Array is Empty");
    
} //Array is Empty

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){ //Object.keys(emptyObj) this will return an array, so .length laga sakte hai
    console.log("Object is empty");
    
}

/*
false == 0
true
false == ''
true
0 == ''
true 
*/


//Nullish Coalescing Operator (??): null & undefined

let val1;
val1 = 5 ?? 10
console.log(val1); //5

//kaafi baar jab database se response lenge, yaa firebase ka use krenge, toh humein directly koi respnse nhi milta hai, humein do values milti hai,ho sakta hai ek null aa jaaye yaa ek undefined aa jaaye.

val2 = null ?? 10
console.log(val2); //10

//NCO kya krt hai, yeh na, null values ke liye ek safety check krr detanhai, taki koi null values aa jaaye toh problem naa hoye.
//agar value aayi toh theek hai, wrna mai null assign krr dunga.

val3 = undefined ?? 15
console.log(val3); //15

val4 = null ?? 10 ?? 12 //10
//iss case mei, jo bhi first value mil jaaye usko, woi assign ho jaati hai

//this operator is basically a callback to handle errors.


//Terniary Operator

// condition ? true : false 

const iceTea = 100
iceTea <= 80 ? console.log("less than eighty") : console.log("more thn eighty");
//ek hi line mei both true false check krke deta hai.




