
let plusButton = document.querySelector('.add');
let minusButton = document.querySelector('.minus');
let input = document.querySelector('.input');
let display = document.querySelector('.value');


input.addEventListener('input', updateValue)
var initialValue = 1;
var currentValue;
currentValue = initialValue
// currentValues = initialValue - 200 ;

console.log(currentValue)
//display.innerText = initialValue;

plusButton.addEventListener('click', () => {
    // if (currentValue >= maxInput){
    //     display.innerText = currentValue 
    // }else{
        display.innerText = currentValue++
        //display.innerText = currentValue ++;
    // }


})
minusButton.addEventListener('click', () => {
    if (currentValue == 200){
        currentValue = -currentValue + initialValue
        display.innerText =currentValue;
    }
    else if (currentValue < 200){
        currentValue = currentValue - initialValue
        display.innerText = currentValue;

    }

})
function updateValue(e){
    currentValue = input.value
    console.log(currentValue)
    return currentValue;
}