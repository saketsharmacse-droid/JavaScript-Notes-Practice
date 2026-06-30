const buttons = document.querySelectorAll('.button')
//console.log(buttons); we'll get a node list of buttons html code

const body = document.querySelector("body")
//yeh body ko select krne ka one of many ways hai.

//we can put loops on buttons as well
//events hote hai browser ke andar bahut saare, like curser move krna, close krna, click krna all these are events.
//jab bhi hum events krte hai, uss event ko hum log function mei le sakte hai and uske saath activities perform krr sakte hai.

//we have got nodeList from 1 line, not html colections, toh hum forEach lagayenge
buttons.forEach(function(button){
    // console.log(button); isme mujhe saare ke saare elements mil jayenge attributes mil jayenge uss buttons ke.

    button.addEventListener('click', function(e){
        console.log(e)
        console.log(e.target);
        
        if(event.target.id == 'Grey')
        {
            body.style.backgroundColor = e.target.id
        }

        if(event.target.id == 'White')
        {
            body.style.backgroundColor = e.target.id
        }

        if(event.target.id == 'Blue')
        {
            body.style.backgroundColor = e.target.id
        }

        if(event.target.id == 'Yellow')
        {
            body.style.backgroundColor = e.target.id
        }

        if(event.target.id == 'Purple')
        {
            body.style.backgroundColor = e.target.id
        }
        
    })
})

//events rhte hai theek, but usko use krne waala bhi toh chahiye koi, event listners bhi chahiye.
//event use kahi bhi krr sakte hai, but use krnte kaise hai: .eventListner use krke.

