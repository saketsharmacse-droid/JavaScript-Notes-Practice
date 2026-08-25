//pascals triangle mei edges are 1
//the elements that are not edges are the sum of above elements

// spaces = totalrows - row Number
//ek loop for row number, ek loop for the spaces and ek for the numbers

const trows = 8;
let triangleValues = [];
for(let i = 1; i <= trows; i++){
    let row = "";
    triangleValues[i] = [];

    //spaces
    for(let j = 1; j <= trows - i; j++ ){
        row += " ";
    }

    for(let k = 1; k <= i; k++){
        if(k === 1 || k === i){
            triangleValues[i][k] = 1;
        }
        else{
            triangleValues[i][k] = triangleValues[i-1][k-1] + triangleValues[i-1][k]
        }
        row += triangleValues[i][k] + " ";
    }
    console.log(row)
}

//        1 
//       1 1 
//      1 2 1 
//     1 3 3 1 
//    1 4 6 4 1 
//   1 5 10 10 5 1 
//  1 6 15 20 15 6 1 
// 1 7 21 35 35 21 7 1 