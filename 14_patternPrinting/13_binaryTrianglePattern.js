//yaha pe binary triangle pattern bnayenge
//humein odd aur even position ko check krna hai

const maxrow = 8;
let num = 1;
for(let i = 1; i <= maxrow; i++){
    let row="";
    for(let j = 1; j <=i; j++){
        if(num%2 === 1){
            row += "1 ";
        }
        else{
            row += "0 ";
        }
        num++;
    }
    console.log(row)
}
// 1 
// 0 1 
// 0 1 0 
// 1 0 1 0 
// 1 0 1 0 1 
// 0 1 0 1 0 1 
// 0 1 0 1 0 1 0 
// 1 0 1 0 1 0 1 0 

console.log(".......................................................................");

//if humein chess-board binary triangle pattern chahiye.

for(let i = 1; i <= maxrow; i++){
    let row="";
    for(let j = 1; j <=i; j++){
        // row += i + j + " ";
        if((i+j)%2 === 0){
            row += "1 "
        }
        else{
            row += "0 ";
        }
    }
    console.log(row)
}
// 1 
// 0 1 
// 1 0 1 
// 0 1 0 1 
// 1 0 1 0 1 
// 0 1 0 1 0 1 
// 1 0 1 0 1 0 1 
// 0 1 0 1 0 1 0 1 