//here hum log number waala right triangle pattern bnayenge.

const maxrow = 8;

for(let i = 1; i <= maxrow; i++){
    let row="";
    for(let j = 1; j <=i; j++){
        row = row + j;
    }
    console.log(row)
}

// 1 
// 12 
// 123 
// 1234 
// 12345 
// 123456 
// 1234567 
// 12345678 