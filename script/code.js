let age = document.getElementById('age')
let results = document.getElementById('output')
let display = document.getElementById('Submit')

let convert = function(){
    // days = age*365
    // age.value
    // get the value from age element
    let ageVal = age.value;
    // we need to convert age to days lived basically
    let daysLived = ageVal * 365 // 365 represents days in a year
    results.textContent = daysLived
}



display.addEventListener('click',convert)

// () => {} -> arrow function
// = {} -> expression function  --- common is -> anonymous functions
// = (){} ----- = function(){}





 