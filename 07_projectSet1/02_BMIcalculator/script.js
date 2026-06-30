//humein poora form select krna padega phle, kyoki uske andar hi calculate button hai
// jab hum log events ki baat krte hai forms mei , toh kaafi saari cheezein aa jaati hai deal krne ke liye, humein values nikali hai, jo ki events ke through hi hoti hai.

//yaha pe submit waala event use krenge, calculate actually mei data ko submit krwyega, uske baad calculatiuon honge uspe.


//this usecase will give empty values.
// const weight = parseInt(document.querySelector('#weight').value): isko agar bahar likhenge toh empty value store ho jayegi weight mei, since hum har ke event ke corresponding values lete hai, page load hote hi script toh run hoga hi, toh usko lagega ki empty value hi hai, and eventlistner ke andar likhne se event ke hone ke baad hi values ko lega.

const form = document.querySelector('form')
//jab bhi form submit hota hai, toh yaa toh get type se submit hota hai yaa toh post type se submit hota hai.
//forms ka default behaviour yeh hota hai ki wo  values by default server pe yaa url pe chli jaati hai, toh humein usko rokna  padega, kyoki hum form ke data ko server pe toh bhej nhi rge hai, we need to stop the default behaviour of the form, default action ko rok dena hai.

form.addEventListener('submit', function(e) {
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    //id dene ke liye # aur class dene ke liye .

    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)) { //yaha pe old method se height != NaNuse krte hai kuch log, but this methos is the much recommended one to use isNaN.
        results.innerHtml = `Please give a valid height ${height}`
        //results.innerHtml = `${height}`
        }

    else if(weight === '' || weight < 0 || isNaN(weight)) { 
        results.innerHtml = `Please give a valid weight ${weight}`
        }

    else {
        const bmi =  (weight / ((height*height)/10000)).toFixed(2)

       //to show the results.
        results.innerHTML = `<span>${bmi}</span>`
        if(bmi < 18.5) {
        message.innerHTML = `<span> Your BMI is ${bmi}, which shows that you are UnderWeight</span>`
    }
        else if(bmi > 18.5 && bmi < 24.9 ) {
        message.innerHTML = `<span> Your BMI is ${bmi}, which shows that you are NormalWeight</span>`
    }
        else {
            if(bmi > 24.9) {
        message.innerHTML = `<span> Your BMI is ${bmi}, which shows that you are OverWeight</span>`
    }
        }
    }

    
    // hum checks lagayenge taaki calculation theek se ho jaaye.



})