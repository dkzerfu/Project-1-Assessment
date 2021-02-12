
let plusButton = document.querySelector('.add');
let minusButton = document.querySelector('.minus');
let input = document.querySelector('.input');
let display = document.querySelector('.value');


input.addEventListener('input', updateValue)
var initialValue = 0;
var currentValue;
var maxInput = 200;

console.log(currentValue)
display.innerText = '0';

plusButton.addEventListener('click', () => {
    if (currentValue >= maxInput){
        display.innerText = currentValue 
    }else{
        display.innerText = currentValue ++;

    }


})
minusButton.addEventListener('click', () => {
    if (currentValue <= maxInput){
        display.innerText = -1 * currentValue --;
    }else{

        display.innerText = currentValue --;
    }

})
function updateValue(e){
    currentValue = input.value
    console.log(currentValue)
    return currentValue;
}