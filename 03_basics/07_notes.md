# JavaScript Execution Context


- Global execution context hota hi hota hai.
- Browser pe yeh window object hota hai.
- node environment pe yeh sab { } empty object hota hai.

- JS is single threaded, sab kuch yaha pe ek process hoti hai, uske according hi execute hoti hai.

> Global Execution Context

> Function Execution Context

>Eval Execution context (used in mongoose and all)

### JS ki code run kaise hoti hai
JS ka code two phases mei run hota hai:
> Memory CReation Phase or creation Phase
- Yaha pe sirf variables and functions ke liye memory alllocation hota hai, execute nhi hota.
> Execution Phase
- yaha pe execute hoti hai codes


``` javascript
 
 let val1 = 10
 let val2 = 20
 function addNum(num1, num2) {
    let total = num1 + num2
    return total
 }
 let result1 = addNum(val1, val2)
 let result2 = addNum(10, 2)

```

Ab yeh code execute kaise hoga??

>  Step 1: Global Execution/ Global Environment:

  Jo bhi code rhta hai wo execute global se hi hota hai, and usko allocate kiya jaata hai this ke through.

> Step 2: Memory Creation Phase:

Isme kya hota hai, saare variables ko ikattha krte hai and rakhte hai:

- val1: undefined

- val2: undefined

- addNum: definition (the function's definitiongoes inside, not undefined, all these definition goes into the memory)

- result1: undefined
- result2: undefined

> Both of these are called as the first cycle.

### Cycle 2: Execution Phase

val1 = 1

val2 = 5

line 3 to 6 : value hold krke hai, execution phase pe ni

line 7: addNum

```
addNum

- yeh apna khudka ek execution context bnata hai, yaha pe ek new variable environment bnega and new execution thread bnega
- jitti baar ek function jaata hai execution pe, ek new box bnega, i.e, ek new execution environment bnega for all the current contexts.
- ab, iss new box pe wapis se yeh dono process firse honge, wapis se ek sandbox bnega jispe global execution hoga and memory phase bhi bnega.

- Memory Phase: 
     val1: undefined
     val2: undefined
     total: undefined
- Execution Context:
     num1: 10
     num2: 5
     total:15 //add bhi yhi pe hoyega
//yeh total hi actually return back hoga, apne parent execution context pe/global execution context pe.
```

yeh jo naya execution context creat hota hai, wo itna kaam hone ke baad delete bhi hota hai, yeh global execution context ek baar iska kaam ho gya hai fir wo delete bhi hoga.

>result1 = 15

result2 : ``` new Execution environment + thread ```
``` 
- Execution Phase
- Memory Phase
```

iske baad firse global context pe return back ho jayega.

## Call Stacks

- yaha pe stack use hota hai , jo ki LIFO follow krta hai.
- if kisi ek function ke baad dusra call krenge, toh wo phle waala pop ho ke fir dusra push hoga
- but if kisi function ke andar hi dusre function ko call krte hai, toh phle yeh new waala execute hoga, uske baad fir first waale ka poora hoga , mtlab dusra waala phle pop hoga, fir phle waala pop hoga.

``` javascript
function one(){ 
    console.log("one");
    two()
}

function two() {
    console.log("two")
    three()
}
function three() {
    console.log("three")
}

one()
two()
three()
```



