const coding = ["js", "python", "ruby", "java", "cpp"]

const values = coding.forEach((item) => {
    console.log(item);
    
})
console.log(values);//undefined
//forEach koi value return nhi kiya.

const values1 = coding.forEach((item) => {
    console.log(item);
    return item
})
console.log(values1); //undefined

//toh, what if we need to conditionally check over a certain value only, as return toh krta ni hai forEach.

const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.filter((num) => num > 4)//filter bhi apne andar callback hi leta hai

//filter values return krta hai, but forEach kuch bhi return nhi krta hai.
//condition ke according return krta hai.
console.log(newNums); //[ 5, 6, 7, 8, 9, 10 ]

const newNums1 = myNums.filter((num) => {
    num > 4
})
console.log(newNums1); //[]
//yaha pe humein ek empty array mila

const newNums2 = myNums.filter((num) => {
    return num > 4
})
console.log(newNums2); //[ 5, 6, 7, 8, 9, 10 ]
//yaha pe woi baat ho gyi jo arrow functions time kiye thhe, ki scope nhi diye rhoge tab tak aa jayega output, but scope dene se return krenge tabhi aayega. {ref:arrow functions line 151}

//for each kaise use krte:
const newNumber = []
myNums.forEach((num) => {
    if(num > 4) {
        newNumber.push(num)
        
    }
 })
console.log(newNumber); //[ 5, 6, 7, 8, 9, 10 ]
//iss tarike se krr sakte hai same cheez forEach mei.



const books = [
    {
        title:'Book One',
        genre:'fiction',
        publish: 1982,
        edition: 2004
    },
    {
        title:'Book Two',
        genre:'thriller',
        publish: 1995,
        edition: 2007
    },
    {
        title:'Book Three',
        genre:'History',
        publish: 1988,
        edition: 2006
    },
    {
        title:'Book Four',
        genre:'biography',
        publish: 1945,
        edition: 2010
    },
    {
        title:'Book Five',
        genre:'horror',
        publish: 1994,
        edition: 2011
    },
    {
        title:'Book Six',
        genre:'non-fiction',
        publish: 1990,
        edition: 2009
    },
    {
        title:'Book Seven',
        genre:'science',
        publish: 1984,
        edition: 2008
    },
    {
        title:'Book Eight',
        genre:'History',
        publish: 1983,
        edition: 2003
    },
    {
        title:'Book Nine',
        genre:'Politics',
        publish: 1997,
        edition: 2016
    }
]
//database se aiai types ki values milengi humein
//user inn values ko filter wagera krke aone webpage mei dikhayega.

//callback using filter
const userBooks = books.filter((bk)=> bk.genre === 'History') 
console.log(userBooks);
/* 
[
{
title: 'Book Three',
genre: 'History',
publish: 1988,
edition: 2006
},
{
title: 'Book Eight',
genre: 'History',
publish: 1983,
edition: 2003
}
] */

const userBook1 = books.filter((key) => { return key.publish >= 1995}) //scope open kiya hai toh return lagega.
console.log(userBook1);
/* 
[
{
title: 'Book Two',
genre: 'thriller',
publish: 1995,
edition: 2007
},
{
title: 'Book Nine',
genre: 'Politics',
publish: 1997,
edition: 2016
}
]*/

const userBook2 = books.filter((key) =>  {return key.publish >= 1995 && key.genre === 'thriller'})
console.log(userBook2); 
/*
[
{
title: 'Book Two',
genre: 'thriller',
publish: 1995,
edition: 2007
}
]
*/








