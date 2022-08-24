let x;
let y;
let operator;

function operate(){
    x = parseInt(x);
    y = parseInt(y);

    x = 
    operator == '+' ? (x + y) : 
    operator == '-' ? (x - y) :
    operator == '*' ? (x * y) :
    operator == '/' ? (x / y) : 'error';

    y = undefined;
    console.log(x)
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.onclick = function(){
    if (this.id == 'number'){
        if (operator == undefined){
            x = x == undefined || typeof(x) == 'number' ? this.value : x + this.value;
        } else {
            y = y == undefined ? this.value : y + this.value;
        }
     } 
     if (this.id == 'operator'){
        x = x == undefined ? 0 : x;
        operator = operator == undefined ? this.value : operate();
     }

     if (this.id == 'equal'){ operate();}
     console.log(typeof(x), typeof(operator), typeof(y));
     console.log(x, operator, y);
    }
})