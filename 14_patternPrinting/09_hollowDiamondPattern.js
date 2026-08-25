//yaha pe hollow diamond print krenge
//spaces= totalroe - currentrow
//star = 2*currentrow - 1


const totalrow = 12;

for(let i=1; i <= totalrow; i++){
    let row = "";
    for(let j = 1; j <= totalrow - i; j++){ 
        row += " "; 
    } 
    for(let k = 1; k <= (2 * i) - 1; k++){
        if(k === 1 || k === 2*i-1){
            row += "*";
        }
        else{
            row += " ";
        }
    }
    console.log(row);
}
for( let i = totalrow-1; i >= 1; i--){

    let row = "";
    for(let j = 1; j <= totalrow - i; j++){
        row += " ";
    }
    for(let k = 1; k <= 2 * i - 1; k++){
        if(k === 1 || k === 2*i-1){
            row += "*";
        }
        else{
            row += " ";
        }
    }

    console.log(row);
}

//            *
//           * *
//          *   *
//         *     *
//        *       *
//       *         *
//      *           *
//     *             *
//    *               *
//   *                 *
//  *                   *
// *                     *
//  *                   *
//   *                 *
//    *               *
//     *             *
//      *           *
//       *         *
//        *       *
//         *     *
//          *   *
//           * *
//            *