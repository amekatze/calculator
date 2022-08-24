let x;
let y;
let operator;
let output;
const display = document.querySelector('.calc-display');


function operate(){
    if (x == undefined){ 
        x = 'error';
        output = x;
    }
    else {
    x = parseInt(x);
    y = parseInt(y);

    x = 
    operator == '+' ? (x + y) : 
    operator == '-' ? (x - y) :
    operator == '*' ? (x * y) :
    operator == '/' ? y == 0 ? 'error' : (x / y) : 
    operator == '%' ? ((x / 100) * y) : x;

    y = undefined;
    operator = undefined
    output = x;
}
}

function clear(){
    x = undefined;
    y = undefined;
    operator = undefined;
    output = '';
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.onclick = function(){
     if (this.id == 'number'){
        if (operator == undefined){
            x = x == undefined || typeof(x) == 'number' || x == 'error' ? this.value : x + this.value;
            output = x;
        } else {
            y = y == undefined ? this.value : y + this.value;
            output = x + operator + y;
        }
     } 
     if (this.id == 'operator'){
        x = x == undefined ? 0 : x;
        if (operator == undefined){
            operator = this.value;
            output += operator;
        } else if (y != undefined){
           operate(); 
           operator = this.value;
           output += operator;
        } else {
            operator = this.value;
            output = x + operator;
        }
     }

     if (this.id == 'equal'){ operate();}
     if (this.id == 'clear'){ clear();}
     console.log(x, operator, y);
     display.innerHTML = output;
    }
})
