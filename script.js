'use strict'

const twoNumbers = ['+', '-', '/', '*'];

function program(){
    const num1 = Number(prompt('Enter first number: '));
    const operand = prompt('Enter mathematical operation you want to do: ');
    if(!twoNumbers.includes(operand)){
        singleValues(operand, num1);
    }
    else {
        twoValues(operand, num1);
    }
};

function twoValues(operation, num1){
    const num2 = Number(prompt('Enter second number: '));
    switch(operation){
        case '+':
            add(num1,num2);
            break
    
        case '-':
            subtract(num1,num2);
            break

        case '/':
            divide(num1,num2);
            break
        
        case '*':
            multiply(num1,num2);
            break
    }
}

function singleValues(operation, num1){
    switch(operation){
        case 'pow':
            pow(num1);
            break

        case 'sqrt':
            SQRT(num1);
            break
    }
}



//Functions - math operations

//Two value functions

function add(a, b){
    return console.log(a + b);
}
function subtract(a,b){
    return console.log(a - b);
}
function divide(a,b){
    return console.log(a / b);
}
function multiply(a,b){
    return console.log(a * b);
}

//Single value functions

function SQRT(num1){
    return console.log(Math.sqrt(num1));
}
function pow(num1){
    return console.log(Math.pow(num1,2));
}

program();