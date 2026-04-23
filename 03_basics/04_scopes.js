//scopes mei nested scopes bhi dekhna hai aur DOM(document object model) ke through closures ka bhi dekhna hai.
//closures is an important technique, asked a lot in interviews
//dom is used to manipulate the html web pages using the js.

//global scope ko function ke andar access krr sakte hai, but block level svope ko access nhi krr sakte kahi aur.

function one(){
    const username = "Saket"

    //function ke andar bhi function possible hai.
    function two(){
        const website = "YouTube"
        console.log(username); //chota baccha abde se icecream maang sakta hai
        }
    //console.log(website);//error aara
    //bada chhote se icecream nhi maang sakta.
    //line by line execute hota hai, toh yhi pe execute ho gya error aa gya isliye two() kabhi execute hua hi nhi.

    two(); 
}

one(); //one execute hus tabhi two() bhi hua, wrna kuch bhi execute nhi hota

//ispe yeh yaad rakhna: chota baccha bado se icecream maang sakta hai, but bade log chhote bacche se icecream nhi maang sakte.
//chota function bade se maang sakta, but not bada.
//two() ke scopes uske andar hi bne aur khatam ho gye.

//nested functione mei, jo child functions rhte hai wo parent ka access rakhte hai.

//yeh same cheez if-else mei bhi hota hai:
if(true){
    const username = "Saket"
    if(username === "Saket" ){
        const website = " youtube"
        console.log(username + website); //Saket youtube
        
    }
    // console.log(website);//yaha pe error aayega, as scope nhi hai
    
}
// console.log(username); //error aayega, as username ka scope nhi hai yaha pe


//++++++++++++++++++++++++++++++++ interesting concept ++++++++++++++++++++++++++++++++++

addOne(66); //phle likhne se bhi koi error nhi aaya
//67
function addOne(num){
    return num + 1

}
addOne(5) //return hua hai, value print nhi hui hai
//this is a function


//this is an expression, as varibles ke through hai
//js mei variables are very powerful, they can hold anythong, functions, json and all sab.
addTwo(66) //phle likhne se error aayega, as access nhi krr paa rha isko
//isko samajhne ke liye ek concept hai hoisting
const addTwo = function(num){
    return num + 2
}
addTwo(5)