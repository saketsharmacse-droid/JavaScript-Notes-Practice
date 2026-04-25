//for loop
// for (let index = 0 /*1. variable declaration */; index < array.length /* 2. condition check */; index++ /* 4. increment*/) {
//     const element = array[index]; // 3.block
    
// }
//for loop jumps a lot in the control.
//curly braces mtlab block scope, and andar ke properties ko bahar access nhi krr payenge. jaise index ko bahar se access nhi krr sakte.

for ( let index = 0; index <= 10; index ++) {
    const element = index;
    console.log(element);
    
}
// console.log(element);//element ka access scope ke bahar accessible nhi hai.


//ctrl + d for multiple cursors to change at the same time

for ( let i = 0; i <= 10; i ++) {
    const element = i;
    if (element == 5) {
    console.log("5 is the best number");
}
console.log(element);
}


//loops ke andar bhi loops aa sakte ha. nested loops.
for (let i = 0; i <= 10; i++) {
    console.log(`Outer Loop value: ${i}`);
    
    for (let j = 0; j <= 10; j++) {
        console.log(`Inner Loop value: ${j} and inner loop ${i}`);
        
    } 
}
/* 
Outer Loop value: 0
Inner Loop value: 0 and inner loop 0
Inner Loop value: 1 and inner loop 0
Inner Loop value: 2 and inner loop 0
Inner Loop value: 3 and inner loop 0
Inner Loop value: 4 and inner loop 0
Inner Loop value: 5 and inner loop 0
Inner Loop value: 6 and inner loop 0
Inner Loop value: 7 and inner loop 0
Inner Loop value: 8 and inner loop 0
Inner Loop value: 9 and inner loop 0
Inner Loop value: 10 and inner loop 0
Outer Loop value: 1
Inner Loop value: 0 and inner loop 1
Inner Loop value: 1 and inner loop 1
Inner Loop value: 2 and inner loop 1
Inner Loop value: 3 and inner loop 1
Inner Loop value: 4 and inner loop 1
Inner Loop value: 5 and inner loop 1
Inner Loop value: 6 and inner loop 1
Inner Loop value: 7 and inner loop 1
Inner Loop value: 8 and inner loop 1
Inner Loop value: 9 and inner loop 1
Inner Loop value: 10 and inner loop 1
Outer Loop value: 2
Inner Loop value: 0 and inner loop 2
Inner Loop value: 1 and inner loop 2
Inner Loop value: 2 and inner loop 2
Inner Loop value: 3 and inner loop 2
Inner Loop value: 4 and inner loop 2
Inner Loop value: 5 and inner loop 2
Inner Loop value: 6 and inner loop 2
Inner Loop value: 7 and inner loop 2
Inner Loop value: 8 and inner loop 2
Inner Loop value: 9 and inner loop 2
Inner Loop value: 10 and inner loop 2
Outer Loop value: 3
Inner Loop value: 0 and inner loop 3
Inner Loop value: 1 and inner loop 3
Inner Loop value: 2 and inner loop 3
Inner Loop value: 3 and inner loop 3
Inner Loop value: 4 and inner loop 3
Inner Loop value: 5 and inner loop 3
Inner Loop value: 6 and inner loop 3
Inner Loop value: 7 and inner loop 3
Inner Loop value: 8 and inner loop 3
Inner Loop value: 9 and inner loop 3
Inner Loop value: 10 and inner loop 3
Outer Loop value: 4
Inner Loop value: 0 and inner loop 4
Inner Loop value: 1 and inner loop 4
Inner Loop value: 2 and inner loop 4
Inner Loop value: 3 and inner loop 4
Inner Loop value: 4 and inner loop 4
Inner Loop value: 5 and inner loop 4
Inner Loop value: 6 and inner loop 4
Inner Loop value: 7 and inner loop 4
Inner Loop value: 8 and inner loop 4
Inner Loop value: 9 and inner loop 4
Inner Loop value: 10 and inner loop 4
Outer Loop value: 5
Inner Loop value: 0 and inner loop 5
Inner Loop value: 1 and inner loop 5
Inner Loop value: 2 and inner loop 5
Inner Loop value: 3 and inner loop 5
Inner Loop value: 4 and inner loop 5
Inner Loop value: 5 and inner loop 5
Inner Loop value: 6 and inner loop 5
Inner Loop value: 7 and inner loop 5
Inner Loop value: 8 and inner loop 5
Inner Loop value: 9 and inner loop 5
Inner Loop value: 10 and inner loop 5
Outer Loop value: 6
Inner Loop value: 0 and inner loop 6
Inner Loop value: 1 and inner loop 6
Inner Loop value: 2 and inner loop 6
Inner Loop value: 3 and inner loop 6
Inner Loop value: 4 and inner loop 6
Inner Loop value: 5 and inner loop 6
Inner Loop value: 6 and inner loop 6
Inner Loop value: 7 and inner loop 6
Inner Loop value: 8 and inner loop 6
Inner Loop value: 9 and inner loop 6
Inner Loop value: 10 and inner loop 6
Outer Loop value: 7
Inner Loop value: 0 and inner loop 7
Inner Loop value: 1 and inner loop 7
Inner Loop value: 2 and inner loop 7
Inner Loop value: 3 and inner loop 7
Inner Loop value: 4 and inner loop 7
Inner Loop value: 5 and inner loop 7
Inner Loop value: 6 and inner loop 7
Inner Loop value: 7 and inner loop 7
Inner Loop value: 8 and inner loop 7
Inner Loop value: 9 and inner loop 7
Inner Loop value: 10 and inner loop 7
Outer Loop value: 8
Inner Loop value: 0 and inner loop 8
Inner Loop value: 1 and inner loop 8
Inner Loop value: 2 and inner loop 8
Inner Loop value: 3 and inner loop 8
Inner Loop value: 4 and inner loop 8
Inner Loop value: 5 and inner loop 8
Inner Loop value: 6 and inner loop 8
Inner Loop value: 7 and inner loop 8
Inner Loop value: 8 and inner loop 8
Inner Loop value: 9 and inner loop 8
Inner Loop value: 10 and inner loop 8
Outer Loop value: 9
Inner Loop value: 0 and inner loop 9
Inner Loop value: 1 and inner loop 9
Inner Loop value: 2 and inner loop 9
Inner Loop value: 3 and inner loop 9
Inner Loop value: 4 and inner loop 9
Inner Loop value: 5 and inner loop 9
Inner Loop value: 6 and inner loop 9
Inner Loop value: 7 and inner loop 9
Inner Loop value: 8 and inner loop 9
Inner Loop value: 9 and inner loop 9
Inner Loop value: 10 and inner loop 9
Outer Loop value: 10
Inner Loop value: 0 and inner loop 10
Inner Loop value: 1 and inner loop 10
Inner Loop value: 2 and inner loop 10
Inner Loop value: 3 and inner loop 10
Inner Loop value: 4 and inner loop 10
Inner Loop value: 5 and inner loop 10
Inner Loop value: 6 and inner loop 10
Inner Loop value: 7 and inner loop 10
Inner Loop value: 8 and inner loop 10
Inner Loop value: 9 and inner loop 10
Inner Loop value: 10 and inner loop 10
*/


//tables
for (let i = 1; i <= 10; i++) {
    console.log(`Multiplication Table of: ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        console.log(i + ' x ' + j + ' = ' + i*j);
        
    } 
}
//this will print the tables from 1 to 10:
/* 
Multiplication Table of: 1
1 x 1 = 1
1 x 2 = 2
1 x 3 = 3
1 x 4 = 4
1 x 5 = 5
1 x 6 = 6
1 x 7 = 7
1 x 8 = 8
1 x 9 = 9
1 x 10 = 10
Multiplication Table of: 2
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
2 x 4 = 8
2 x 5 = 10
2 x 6 = 12
2 x 7 = 14
2 x 8 = 16
2 x 9 = 18
2 x 10 = 20
Multiplication Table of: 3
3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
3 x 4 = 12
3 x 5 = 15
3 x 6 = 18
3 x 7 = 21
3 x 8 = 24
3 x 9 = 27
3 x 10 = 30
Multiplication Table of: 4
4 x 1 = 4
4 x 2 = 8
4 x 3 = 12
4 x 4 = 16
4 x 5 = 20
4 x 6 = 24
4 x 7 = 28
4 x 8 = 32
4 x 9 = 36
4 x 10 = 40
Multiplication Table of: 5
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50
Multiplication Table of: 6
6 x 1 = 6
6 x 2 = 12
6 x 3 = 18
6 x 4 = 24
6 x 5 = 30
6 x 6 = 36
6 x 7 = 42
6 x 8 = 48
6 x 9 = 54
6 x 10 = 60
Multiplication Table of: 7
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70
Multiplication Table of: 8
8 x 1 = 8
8 x 2 = 16
8 x 3 = 24
8 x 4 = 32
8 x 5 = 40
8 x 6 = 48
8 x 7 = 56
8 x 8 = 64
8 x 9 = 72
8 x 10 = 80
Multiplication Table of: 9
9 x 1 = 9
9 x 2 = 18
9 x 3 = 27
9 x 4 = 36
9 x 5 = 45
9 x 6 = 54
9 x 7 = 63
9 x 8 = 72
9 x 9 = 81
9 x 10 = 90
Multiplication Table of: 10
10 x 1 = 10
10 x 2 = 20
10 x 3 = 30
10 x 4 = 40
10 x 5 = 50
10 x 6 = 60
10 x 7 = 70
10 x 8 = 80
10 x 9 = 90
10 x 10 = 100
*/



let myArray = ["Shaktimaan", "batman", "flash", "superman"]
console.log(myArray.length); //4

for (let index = 0; index < myArray.length; index++) {  //index < myArray.length: yeh last element tak jaake ruk jayega.
    //index <= myArray.length: js mei out of boundry exceptions wagera nhi rhta, but ek undefined print ho jayega.
    const element = myArray[index];
    console.log(element);
    
}


//break and continue
for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`detected 5`);
        break //loop se bahar aa jata hai control flow, line 319 mei
        
    }
    console.log(`Value of i is: ${index}`);

}


//break use krne se control flow loop se bahar aa jata hai.

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`detected 5`);
        continue //el baar maaf krr deta hai.
        //continue krne de immediate next execution, ek condition ko skip krr deta hai.
        //condition ko ek baar ke liye skip krr deta hai.
        
    }
    console.log(`Value of i is: ${index}`);

}


