## DOM Manipulations

- Bahut saare methods hote hai window obkect pe, jisko use krke hum log instantly inspect ke console pe jaake use krke manipulate krr sakte hai humare web pages ko.

- DOM mei page manipulation krenge, objects ko use krke changes krenge.

- DOM mei har cheez ko ek node bola jata hai.





>document.getElementById('title')

``` html 
<h1 id=​"title" class=​"test heading" style=​"background-color:​ green;​ padding:​ 15px;​">​DOM learning on youtube​</h1>​ 
```

>document.getElementById('title').id

'title'

>document.getElementById('title').class

undefined

>document.getElementById('title').className

ClassName krne se aayega, class krne se nhi, kyoki document aapko class hi dikhata hai, but behind the scene document usko className samajhta hai, react mei bhi aisi hota hai, dom ke case mei className likhna padta hai

'heading'


Hum aur bhi attributes nikal sakte hai using getAttribute

>document.getElementById('title').getAttribute

ƒ getAttribute() { [native code] }

Get attribute ke andar humein btana padega ki mujhe konsa waala attribute chahiye.

>document.getElementById('title').getAttribute('id')

'title'

>document.getElementById('title').getAttribute('class')

'heading'

Ab, humlog na set bhi krr sakte hai attribute ko, using set attribute.
aur yaha pe bhle undefined dikhayega, but humesha yeh overwrite krega , humare code mei jaake dekhne se overerite hi hua dikhega.


>document.getElementById('title').setAttribute('class', 'test')

undefined

yeh class ke andar test set krr dega

>document.getElementById('title').setAttribute('class', 'test heading')

undefined

isse hum test aur heading dono set krr sakte hai.

>document.getElementById('title')

```html 
<h1 id=​"title" class=​"test heading">​DOM learning on youtube​</h1>
```


>const title = document.getElementById('title').getAttribute('class')

humare easy access ke liye variable define krr dete hai.

undefined

>title

'test heading'

>const title1 = document.getElementById('title')

undefined

>title1


```html 
<h1 id=​"title" class=​"test heading" style=​"background-color:​ green;​ padding:​ 15px;​">​DOM learning on youtube​</h1>​ 
```

title1 ka use krke hum values nikalwa sakte hai aur toh aur, kaafi saare style elements bhi insert krr sakta hai.

>title1.style.backgroundColor = 'green'

'green'

actually mei yeh saara ka saara ek object hi hai, toh usko access krr sakte hai using dot. Hum isme styling bhi krr sate hai like adding colors or padding.

>title.style.padding = 15px

VM1007:1 Uncaught SyntaxError: Invalid or unexpected tokenUnderstand this error

>title1.style.padding = 15px

VM1102:1 Uncaught SyntaxError: Invalid or unexpected tokenUnderstand this error

>title1.style.padding = "15px"

'15px'

>title.style.borderRadius = "25px"

VM1208:1 Uncaught TypeError: Cannot set properties of undefined (setting 'borderRadius')
    at <anonymous>:1:26
(anonymous) @ VM1208:1Understand this error

>title1.style.borderRaius = "25px"

'25px'

>title1.style.borderRaius = "15px"

'15px'

>title

'test heading'

>title1

``` html <h1 id=​"title" class=​"test heading" style=​"background-color:​ green;​ padding:​ 15px;​">​DOM learning on youtube​</h1>​ ```

>title1.text

undefined

Ab, humein andar ka content chahiye:

>title1.textContent

'DOM learning on youtube'

>title1.innerHTML

'DOM learning on youtube'

>title1.innerText

'DOM learning on youtube'

>title1.innerText

'DOM learning on youtube'

>title1.innerContent

undefined

>title1.textContent

'DOM learning on youtube'
502_DOM.html:1 Uncaught (in promise) Error: A listener indicated an asynchronous response by returning true, but the message channel closed before a response was receivedUnderstand this error


Difference between innerText and innerContent
```html 
<-- yeh ek line hai sample code ka : --!>
<h1 style="color: blue" id="title" class="heading">DOM learning on youtube from chai aur code <span style="display: none;">Test text</span></h1>
```

>title1.innerText

'DOM learning on youtube from chai aur code'

>title.textContent

'DOM learning on youtube from chai aur code Test text'


- textContent pe saara ka saara content chahiye, saara text content ho kuch bhi ni chupna chahiye, koi element hidden wagera hora ho wo bhi chahiye.

- innerText use when jo dikhra mujhe usi ke hisab se visual changes krna ho.

>title.innerHTML

'DOM learning on youtube from chai aur code <span style="display: none;">Test text</span>'

- innerHTML poora content deta hai, and it supports the html tags as well that are used within the statements.



### Text ko select krna dekhte hai (query selectors)

>document.getElementByClassName('heading')

isme ek HTML ka collections aayega.


>document.querySelector('h2')

yeh page pe jo firse h1 hoga wo dega.


Hum query selector use krke direct queries likh sakte hai.
Agar css theek se aata hai, toh uske bhi query selectors use krr sakte hai



>document.querySelector('input[type="password"]')

>document.querySelector('p:first-child')


>document.querySelector('.heading')

``` html
<h1 style=​"color:​ blue" id=​"title" class=​"heading">​…​</h1>
```
>document.querySelector('#title')

``` html
<h1 style=​"color:​ blue" id=​"title" class=​"heading">​…​</h1>
```

>document.querySelector('h2')

``` html
<h2>​ Lorem ipsum dolor sit.​</h2>
```

- Humein main do cheez seekhna hai, DOM aur Events

>document.querySelector('ul')
<ul>​…​</ul>
​
>const myUl = document.querySelector('ul')

undefined


>myUl.querySelector('li')

<li style=​"background-color:​ green;​ padding:​ 30px;​">​…​</li>​

>const turnGreen =  myUl.querySelector('li')

undefined

>turnGreen.style.backgroundColor = "green"

'green'

>turnGreen.style.padding = "30px"

'30px'

>turnGreen.innerText = "five"

'five'

### Yaha pe array return ni hota hai, usually HTML Collections aur NodeList aata hai

document.querySelectorAll('li')
NodeList(3) [li, li, li]
const tempList = document.querySelectorAll('li')
undefined

# Notes:

- Toh, nodelist aur HTML Collections are not arrays convenmtionally, we cannot use map and list on them, since unke prototype pe listed nhi hai map and few other properties related to arrays.

>document.querySelectorAll('li')

NodeList(3) [li, li, li]

>const tempLiList = document.querySelectorAll('li')

undefined

>tempLiList

NodeList(3) [li, li, li]

- tempLiList ek nodelist bnn gya hai.
- Nodelist aur html collections pure array nhi hai, array ke properties and prototypes nhi operate honge idhar.

``` const tempLiList = document.querySelectorAll('li') 
undefined
tempLiList
NodeList(3) [li, li, li]
>tempLiList.style.color = "green"
- yaha pe error aayega kyoki list hai, toh element wise color dena hoga
VM1933:1 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
    at <anonymous>:1:24
(anonymous) @ VM1933:1
tempLiList[0].style.color = "green"
'green'
tempLiList[2].style.color = "blue"
'blue'
```

-same waisi heading ke liye bhi hoyega.

``` const myH1 = document.querySelectorAll('h1')
undefined
myH1
NodeList [h1#title.heading]
myH1.style.color = 'green'
VM3052:1 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
    at <anonymous>:1:18
(anonymous) @ VM3052:1
myH1[0].style.color = 'green'
'green' ```

- humein btana padega ki konsa element hai.
- yeh ho hua querySelector aur querySelectorAll.

``` const tempLiList = document.querySelectorAll('li') 
undefined
tempLiList
NodeList(3) [li, li, li]
tempLiList.forEach(function (l) {} )
undefined
tempLiList.forEach(function (l) {} )
undefined
tempLiList.forEach(function (l) { l.style.backgroundColor = 'green' } )
undefined

```

- Dhyan dena ki ways tareeke hote hai to convert nodelist to arrays, and if you wish to apply map then have to convert to array, wrna map nhi lagega.
- recommended hai ki nodelist ke saath mei forEach loop use kro, toh kaam ho jayega.

# Notes:

document.getElementsByClassName('list-item')
HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]0: li.list-item1: li.list-item2: li.list-item3: li.list-itemlength: 4[[Prototype]]: HTMLCollectionitem: ƒ item()length: (...)namedItem: ƒ namedItem()constructor: ƒ HTMLCollection()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "HTMLCollection"get length: ƒ length()[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
const tempClassList = document.getElementsByClassName('list-item')
undefined
tempClassList
HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]
tempClassList.forEach(function () { console.log(li)})
VM5799:1 Uncaught TypeError: tempClassList.forEach is not a function
    at <anonymous>:1:15
(anonymous) @ VM5799:1

- HTMLCollections aur nodelist alag alag rhte hai.
- humein htmnl collections ko array mei badalna hi padega to loop and all.

``` const tempClassList = document.getElementsByClassName('list-item')
undefined
tempClassList
HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]
Array.from(tempClassList)
(4) [li.list-item, li.list-item, li.list-item, li.list-item]
const myConvertedArray = Array.from(tempClassList)
undefined
myConvertedArray
(4) [li.list-item, li.list-item, li.list-item, li.list-item]
myConvertedArray.forEach(function(li) {li.style.color = 'orange'})
undefined
```