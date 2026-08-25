//we'll make an upward hollow pyramid pattern
//spaces= totalrow - currentrow
// stars = 2*currentrow - 1

let totalrow = 5;
for(let i = 1; i <= totalrow; i++){
    let row = "";
    for(let k = 1; k <= totalrow - i; k++){
        row += " ";
    }
    for(let j = 1; j <= 2*i - 1; j++){
        if(j === 1 || j === 2*i-1 || i === totalrow){
            row += "*";
        }
        else{
            row += " ";
        }
    }
    console.log(row);
    
}

//     *
//    * *
//   *   *
//  *     *
// *********