//de-structuring: array ki bhi hoti hai aur object ki bhi

const course = {
    courseName: "JS in Hindi",
    price: "999",
    courseInstructor: "Saket"
}

console.log(course.courseInstructor) //this is correct, it'll give result, but isse bhi accha ek practice hai, if we want to write it for multiple tiles

const {courseInstructor: saketName} = course
// console.log(courseInstructor); //Saket if:const {courseInstructor: saketName} = course 
console.log(saketName); //Saket


//destructuring mtlab using {} for faster manipulation and access.
//arrays and objects dono ko destructuring kiya jaata hai.

//react mei kaise use hota hai yeh destructuring:
/* const navbar = (props.company) => {

}
navbar(company = "Saket") */
//by default ek props hota hai, toh props.company aise krke ni krte hai
//waha pe yeh same destructuring ka concept aata hai:
/* const navbar = ({company}) => {

}
navbar(company = "Saket") */
//yaha pe {} yeh use krke company ko dirctly hi use mei liya jaata hai.


//Apna kaam kisi aur ke ser pe daalna is APIs
//jaise restaurant pe jaake we only see the menu and order ki vada pao khaana hai, but its not our business ki wo kaise bnega, konsa saman lagega, sp that menu is basicaly its docs
//google pe login krte hai, toh its not our matter to verify the user and everything , yeh sab api krega

//working with api means dealing with the values that come from the backend, phle yeh saariu values  aati thi xml format mei, jo bahut complex rhti thi, but now it comes in json format.

//json is actually :
/* {
}
*/
//json is actually an object only, jiska naam ni rhta

/* {
    name:"Saket Sharma",
    courseName: "JS in Hindi",
    price: "Free"
} */
//yaha pe error aara kyoki yeh object hai, but iska koi naam nhi, kyoki, json mei keys ko bhi strings ke jaise hi likhna rhta hai.

// {
//     "name":"Saket Sharma",
//     "courseName": "JS in Hindi",
//     "price": "Free"
// } this is correct format for json.

//but, zaroori nhi ki apis humesha objects ke format mei hi milegi, we can also get the api in array ke format mei.
//uss arram ke andar objects rhte hai kaafi saare
[
    {},
    {},
    {}
]

//randomuser generator is an api
//we can use the json formatter to understand the api better

//all these are json notations only, whether through arrays or thriugh objects


