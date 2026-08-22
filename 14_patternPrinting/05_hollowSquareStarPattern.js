//hum ek hollow square pattern print krenge using star.
//rows aur columns se dekhte hai:
//hum i aur j se represent krenge cells ko, kuch empty rhenge aur kuch mei stars rhega.

// 1,1 1,2 1,3 1,4 1,5
// 2,1             2,5
// 3,1             3,5
// 4,1             4,5
// 5,1 5,2 5,3 5,4 5,5
//jaha jaha pe i == 1 or i == 5 or j == 1 or j == 5: waha pe stars aayenge.

// const totalrows = 5;

// for(let i = 1; i <= 5 ; i++){

//     let row = "";
//     for(let j = 1; j <= 5; j++){
//         // console.log(i,j);
//         row += "* ";
//     }
//     console.log(row);
// }

// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 

const totalrow = 15;

for(let i = 1; i <= totalrow ; i++){

    let row = " ";
    for(let j = 1; j <= totalrow; j++){
        // console.log(i,j);
        if ( i == 1 || i == totalrow || j == 1 || j ==  totalrow){
            row += " *";
        }
        else {
            row += "  ";
        }
        
    }
    console.log(row);
}