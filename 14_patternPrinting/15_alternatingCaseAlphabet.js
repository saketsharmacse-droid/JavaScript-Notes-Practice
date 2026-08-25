//yaha pe alternating cases mei pattern print krenge.

let rows = 8;
for(let i = 1; i <= rows; i++){
    let row = "";
    for(let j = 1; j <= i; j++){
        if((i+j) % 2 == 0){
            row += String.fromCharCode(64 + j) + " ";
        }
        else{
            row += String.fromCharCode(96 + j) + " "
        }
    }
    console.log(row);
}
// A 
// a B 
// A b C 
// a B c D 
// A b C d E 
// a B c D e F 
// A b C d E f G 
// a B c D e F g H 