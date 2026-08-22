//pyramid patter using stars
//1,3,5,7,9 ke number mei sytars print honge in the rows below.
//humein spaces count krna padega before putting each row.
//spaces ka pattern: 5,4,3,2,1,0 
//first row mei 4, then 3, that is: total rows - current row: spaces

//similarly stars ka pattern yeh rhega :  2*current row number - 1

//maybe teen loop lagega, phla rows ka, baaki do space aur stars ka.

const totalrow = 10;

for(let i=1; i <= totalrow; i++){
    // console.log(i);
    let row = "";

    for(let j = 1; j <= totalrow - i; j++){ //j <= total rows - current row
        // console.log(i, j);
        row += " "; //each row mei spaces aa gye
    } 
    //yeh space waala loop endkrne ke baad star waala loop. as space printingka kaam kahtam ho gya.

    for(let k = 1; k <= (2 * i) - 1; k++){
        row += "*";
    }

    console.log(row);
    
}

//          *
//         ***
//        *****
//       *******
//      *********
//     ***********
//    *************
//   ***************
//  *****************
// *******************