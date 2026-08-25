// String.fromCharCode()--> this returns the alphabet from the charcode.
// console.log(String.fromCharCode(65)); -->A
// console.log(String.fromCharCode(66)); --> B
// console.log(String.fromCharCode(67)); --> C
// console.log(String.fromCharCode(68)); --> D
//                  .
//                  .
// console.log(String.fromCharCode(90)); --> Z

// console.log(String.fromCharCode(97)); -->a
//                   .
//                   .
//                   .
// console.log(String.fromCharCode(122)); -->z

let maxrow = 8;
for(let i = 1; i <= maxrow; i++){
    let row = "";
    for(let j = 1; j <= i; j++){
        row += String.fromCharCode(64 + j) + " ";
    }
    console.log(row);
}
// A 
// A B 
// A B C 
// A B C D 
// A B C D E 
// A B C D E F 
// A B C D E F G 
// A B C D E F G H 

//agar small cases mei chahiye toh we can do 96+j