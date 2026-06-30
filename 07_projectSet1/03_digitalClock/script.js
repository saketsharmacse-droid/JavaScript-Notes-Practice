const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')

// let date = new Date()
//Date() is an object
//console.log(date.toLocaleTimeString())

//humein kuch aisa tareeka chahiye jisse har moment pr time change ho, new time dekhne ke liye baar baar refresh nhi krna pade mujhe, and chormjib use nhi krenge, dnt be oversmart.
setInterval(function() {
    let date = new Date()
    // console.log(date.toLocaleTimeString())
    clock.innerHTML = date.toLocaleTimeString()

}, 1000)

//setInnterval method har ek particular gaps ke baad run krega methods ko, iske do parameters rhte hai, function and time interval.