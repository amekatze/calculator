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
const decimalButton = document.getElementById('decimal');
const clearButton = document.getElementById('clear');
const delButton = document.getElementById('del');


function operate(){
 switch (operator){
    case '+': 
        return x+y;
        break;
    case '-':
        return x-y;
        break;
    case 'x':
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

function displayRefresh(){
    inputDisplay.innerHTML = input; 
    display.innerHTML = log;
    input = '';
}
 
function clear(){
    inputDisplay.innerHTML = '';
    display.innerHTML = '';
    input = '';
    operator = '';
    munchMonster();
};

numberButtons.forEach(button => {
    button.onclick = function(){ 
        input += button.textContent;
        inputDisplay.innerHTML = input;
        idleMonster()
    }})

operatorButtons.forEach(button => {
    button.onclick = function(){ 
    if (input == ''){
        x = 0;
        operator = button.textContent;
        log = x + operator;
    } else if (operator == ''){
        x = parseFloat(input);
        operator = button.textContent;
        log = x + operator;
    } else {
        y = parseFloat(input);
        log = operate() + operator;
        operator = button.textContent;
        x = log;
    } displayRefresh(); 
    idleMonster()
    }
})
     
equalButton.onclick = function() {
    if(operator != '' && input != ''){
    y = parseFloat(input);
    log = x + operator + y;
    input = operate();
    operator = '';
    display.innerHTML = log;
    inputDisplay.innerHTML = input;
} return
}

decimalButton.onclick = function() {
    if (input.toString().includes('.')) return;
    else if (input == '') input = '0.';
    else input += '.';
    inputDisplay.innerHTML = input;
    idleMonster()
}

delButton.onclick = function(){
    input = input.slice(0,-1);
    inputDisplay.innerHTML = input;
    munchMonster();
}

clearButton.addEventListener('click', clear);

function munchMonster(){
    document.querySelector('.closed-eye').style.setProperty('visibility', 'visible');
    document.querySelector('.bubble').style.setProperty('visibility', 'visible');
}

function idleMonster(){
    document.querySelector('.closed-eye').style.setProperty('visibility', 'hidden');
    document.querySelector('.bubble').style.setProperty('visibility', 'hidden');
}