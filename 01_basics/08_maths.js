//maths ki ek library by defaylt aati hai js ke saath
console.log(Math) //it's an object

/* 
Math {abs: ƒ, acos: ƒ, acosh: ƒ, asin: ƒ, asinh: ƒ, …}
E
: 
2.718281828459045
LN2
: 
0.6931471805599453
LN10
: 
2.302585092994046
LOG2E
: 
1.4426950408889634
LOG10E
: 
0.4342944819032518
PI
: 
3.141592653589793
SQRT1_2
: 
0.7071067811865476
SQRT2
: 
1.4142135623730951
abs
: 
ƒ abs()
acos
: 
ƒ acos()
acosh
: 
ƒ acosh()
asin
: 
ƒ asin()
asinh
: 
ƒ asinh()
atan
: 
ƒ atan()
atan2
: 
ƒ atan2()
atanh
: 
ƒ atanh()
cbrt
: 
ƒ cbrt()
ceil
: 
ƒ ceil()
clz32
: 
ƒ clz32()
cos
: 
ƒ cos()
cosh
: 
ƒ cosh()
exp
: 
ƒ exp()
expm1
: 
ƒ expm1()
f16round
: 
ƒ f16round()
floor
: 
ƒ floor()
fround
: 
ƒ fround()
hypot
: 
ƒ hypot()
imul
: 
ƒ imul()
log
: 
ƒ log()
log1p
: 
ƒ log1p()
log2
: 
ƒ log2()
log10
: 
ƒ log10()
max
: 
ƒ max()
min
: 
ƒ min()
pow
: 
ƒ pow()
random
: 
ƒ random()
round
: 
ƒ round()
sign
: 
ƒ sign()
sin
: 
ƒ sin()
sinh
: 
ƒ sinh()
sqrt
: 
ƒ sqrt()
tan
: 
ƒ tan()
tanh
: 
ƒ tanh()
trunc
: 
ƒ trunc()
Symbol(Symbol.toStringTag)
: 
"Math"
[[Prototype]]
: 
Object 
*/

console.log(Math.abs(-4)); //Returns the absolute value of a number (the value without regard to whether it is positive or negative). For example, the absolute value of -5 is the same as the absolute value of 5.

console.log(Math.round(4.3)); //Returns a supplied numeric expression rounded to the nearest integer.

console.log(Math.ceil(4.2)); //5
console.log(Math.floor(4.9)); //4

console.log(Math.sqrt(25)); //5

console.log(Math.min(4, 3, 6, 6)); //3
console.log(Math.max(3,6,4,8)); //8

console.log(Math.random()); //humesha value 0 and 1 ke beech mei hi aayehi, randomly. means 0.something.
console.log(Math.random()*10); //1.something : do this if 1 se badi chahiye minimum value.
console.log((Math.random()*10) + 1) //i isloye add kiye kyoki humein minimum atleat 1 toh chahiye hi chahiye.
 // add krke hum apne according values paa saket hai, within our desired range of values.
//kaha se kaha tak value chahiye wo cheez bahut had tak ispe depend krega ki hum kisse multiply krr rhe hain.
//hum isko math.floor ke saath bhi wrapup krr sakte hai
console.log(Math.floor(Math.random()*10) + 1) //it'll round it off to the lowest value and return a single value only

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) //"+1" kyoki taaki zero values naa aaye
//"+min" krte hai taaki atleast minimum value toh rhega hi rhega
//we shall use this formula if we wantr the answer of random between our range of values.









