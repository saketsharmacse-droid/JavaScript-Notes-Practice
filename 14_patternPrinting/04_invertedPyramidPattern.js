//yaha pe inverted pyramid pattern bnaunga

//spaces = total row - current row (row starts from 5 to 1)
//stars = 2*current row - 1

const totalrow = 10;

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

// *******************
//  *****************
//   ***************
//    *************
//     ***********
//      *********
//       *******
//        *****
//         ***
//          *