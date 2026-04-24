//jab same ek value ko multiple conditions se checks lrwana rhta hai, tab yeh use krte hai.

// switch(key) {
//     case value: 
//         break;

//     default:
//         break;
// }

const month = 3
switch(month){

    case 1:
        console.log("January");
        break;
    case 2:
        console.log("feburary");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("No month selected")
        break;
}
//why is breaak used?
//kyoki, once the statement executes, it doesnot stop, it just goes on and on until the last switch is executes.
//default is not touched in this sequential execution 
//that is why break is used to cut the response upto the desired case only.


const month1 = "Mar"
switch(month1){

    case "Jan":
        console.log("January");
        break;
    case "Feb":
        console.log("feburary");
        break;
    case "Mar":
        console.log("March");
        break;
    case "Apr":
        console.log("April");
        break;

    default:
        console.log("No month selected")
        break;
}
//this is also a valid way to use switch case, strings can also be used.



//abhi tak humari poori kahani chlri thi true and false pe.
//but there are few values that are assumed to be true and assumed to be false, rather than being actually true or false, these are knon as the truthy and the falacy values.

