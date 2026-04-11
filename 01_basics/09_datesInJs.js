//date objects in js represents a single moment of time, from an arbitrary date that is !st jan 1970, we get the answers in milliseconds.
//there is a 'Temporal' API in js, whic is suggested by the tc39 to be used instead of date as it is very complex.
//in future, it is into consideration that this temporal is to be made as an object, a global object.

//Dates

let myDate = new Date() //yehy ban gya date ka object aur uska new instance
console.log(myDate); //2026-04-11T12:11:56.663Z

//humein aise ajeeb ajeeb se outputs ko readable format mei convert krna hai

console.log(myDate.toString()); //Sat Apr 11 2026 17:42:57 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); //Sat Apr 11 2026
console.log(myDate.toLocaleString()); //11/4/2026, 7:38:11 pm
console.log(myDate.toISOString()); //2026-04-11T14:08:11.749Z
console.log(myDate.toJSON()); //2026-04-11T14:08:11.749Z

console.log(typeof myDate); //object

let myCreatedDate = new Date(2023, 0, 23) //we can pass our own arbitrary date
console.log(myCreatedDate); //2023-01-22T18:30:00.000Z
console.log(myCreatedDate.toDateString()) //Mon Jan 23 2023 we did this to get visible date
//months start from 0 in javaScript


let myCreatedDate1 = new Date(2023, 0, 23, 5, 3) 
console.log(myCreatedDate1.toDateString()); //Mon Jan 23 2023
console.log(myCreatedDate1.toLocaleString()); //23/1/2023, 5:03:00 am

let myCreatedDate2 = new Date("2023-01-14") //yy-mm-dd mei likhte time month starts from one, wrna yeh toh array rhta hai, toh single likhne se 0 se start hoga index ke kaaran.
console.log(myCreatedDate2.toLocaleString()); //14/1/2023, 5:30:00 am

//hum apne according ka format bhi use krr saket hai
let myCreatedDate3 = new Date("01-14-2026")
console.log(myCreatedDate3.toLocaleString())//14/1/2026, 12:00:00 am

//there are various timeStamps as well in JS
let myTimeStamp = Date.now() //new likh ke bhi krr sakte hai
console.log(myTimeStamp); //1775920721810 yeh first jan 1970 se leke ab tak ka milliseconds mei value hai.
//isme se humein values nikalna hai
//date.now() exact abhi ki dates deta hai

console.log(myCreatedDate3.getTime()); //1768329000000

//what if humein seconds mei chahiye
console.log(Math.floor(Date.now()/1000)); //1775920958

let newDate = new Date()
console.log(newDate); //2026-04-11T15:24:36.491Z
console.log(newDate.getMonth());//3 as zero se start hota hai months
console.log(newDate.getDay()); //6 Saturday
console.log(newDate.getMonth() + 1); //generally aise krte hai taaki end users confuse mat ho

console.log(`Today is ${newDate.getUTCDate()} of month ${newDate.getMonth() + 1} and the time is ${(newDate.getTime()/(1000*60*60*24*1000))}`);



newDate.toLocaleString('default', {
    weekday:"long",
    //timeZone: 
})
//A locale string, array of locale strings, Intl.Locale object, or array of Intl.Locale objects that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.

//Converts a date and time to a string by using the current or specified locale.






