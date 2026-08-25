//hum right triangled floyd triangle pattern bnayenge
//Floyd's triangle mei ke bhi number wapisse nhi aata, continiously increment hote rhta hai.

const maxrow = 8;
let num = 1; //kyoki num se start hoga
for(let i = 1; i <= maxrow; i++){
    let row="";
    for(let j = 1; j <=i; j++){
        row += num + " ";
        num++;
    }
    console.log(row)
}

// 1 
// 2 3 
// 4 5 6 
// 7 8 9 10 
// 11 12 13 14 15 
// 16 17 18 19 20 21 
// 22 23 24 25 26 27 28 
// 29 30 31 32 33 34 35 36 