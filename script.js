let input = '';
let log;
let operator = '';
let x;
let y;


const inputDisplay = document.querySelector('.calc-lower');
const display = document.querySelector('.calc-upper');
const numberButtons = document.querySelectorAll('#number');
const operatorButtons = document.querySelectorAll('#operator');
const equalButton = document.getElementById('equal');

function operate(){
 switch (operator){
    case '+': 
        return x+y;
        break;
    case '-':
        return x-y;
        break;
    case '*':
        return x*y;
        break;
    case '/':
        return x/y;
        break;
    case '%':
        return (x/100)*y;
        break;
 } 
}
 
function clear(){
    inputDisplay.innerHTML = '';
    display.innerHTML = '';
};

numberButtons.forEach(button => {
    button.onclick = function(){ 
        input += button.textContent;
        inputDisplay.innerHTML = input;
        console.log(input)
    }})

operatorButtons.forEach(button => {
    button.onclick = function(){ 
    if (operator == ''){
        console.log('hi');
        x = parseFloat(input);
        operator = button.textContent;
        display.innerHTML = x + operator;
        inputDisplay.innerHTML = '';
        input = ''; 
    } else if (input == ''){
        operator = button.textContent;
        display.innerHTML = x + operator;
    } else {
        y = parseFloat(input);
        log = operate();
        inputDisplay.innerHTML = '';
        operator = button.textContent;
        display.innerHTML = log + operator;
        input = '';
        x = log;
    } 
    console.log(x,operator,y)
    }})
     
equalButton.onclick = function() {
    y = parseFloat(input);
    log = x + operator + y;
    input = operate();
    display.innerHTML = log;
    inputDisplay.innerHTML = input;
    operator = '';
}

