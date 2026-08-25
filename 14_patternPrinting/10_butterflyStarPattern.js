//we will print the butterfly like pattern

//every row is made up of few stars + spaces + stars
//spaces = 2* (max rows - current row number)
//number of stars = current row number

const maxrows = 6
for(let i = 0; i <= maxrows; i++){
    let row = "";
    for(let j = 1; j <= i; j++){ // i is current row number
        row += "*";
    }
    for(let j = 1; j <= 2 * (maxrows-i); j++){
        row += " ";
    }
    for(let j = 1; j <= i; j++){
        row += "*";
    }
    console.log(row);
}
for(let i = maxrows-1; i >= 1; i--){
    let row = "";
    for(let j = 1; j <= i; j++){ // i is current row number
        row += "*";
    }
    for(let j = 1; j <= 2 * (maxrows-i); j++){
        row += " ";
    }
    for(let j = 1; j <= i; j++){
        row += "*";
    }
    console.log(row);
}

// *          *
// **        **
// ***      ***
// ****    ****
// *****  *****
// ************
// *****  *****
// ****    ****
// ***      ***
// **        **
// *          *
