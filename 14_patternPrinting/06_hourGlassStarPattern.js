//yaha pe inverted pyramid pattern aur pyramid pattern ko use krenge

//space = total rows - current rows
//stars: 2*current row - 1

const totalrow = 8;

for( let i = totalrow; i >= 1; i--){

    let row = "";
    for(let j = 1; j <= totalrow - i; j++){
        row += " ";
    }
    for(let k = 1; k <= 2 * i - 1; k++){
        row += "*";
    }

    console.log(row);
}


for(let i=2; i <= totalrow; i++){
    let row = "";

    for(let j = 1; j <= totalrow - i; j++){ 
        row += " "; 
    } 
    for(let k = 1; k <= (2 * i) - 1; k++){
        row += "*";
    }
    console.log(row);
    
}

// ***************
//  *************
//   ***********
//    *********
//     *******
//      *****
//       ***
//        *
//       ***
//      *****
//     *******
//    *********
//   ***********
//  *************
// ***************