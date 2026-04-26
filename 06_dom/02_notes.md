## DOM Manipulations

- Bahut saare methods hote hai window obkect pe, jisko use krke hum log instantly inspect ke console pe jaake use krke manipulate krr sakte hai humare web pages ko.

- DOM mei page manipulation krenge, objects ko use krke changes krenge.





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

>document.querySelector('#title')

>document.querySelector('.heading')

>document.querySelector('.heading')

>document.querySelector('input[type="password"]')