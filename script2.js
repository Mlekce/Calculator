const twoNumbers = ['+','-','*','/'];
const storage = [];
const oStorage = [];
const numbers =  document.querySelectorAll('.number');
const display = document.querySelector('.display');
const display2 = document.querySelector('.display2');
const operators = document.querySelectorAll('.operator');
const ac = document.querySelector('.ac');
const evaluate = document.querySelector('.evaluate');
const buttons = document.querySelectorAll('.button');

buttons.forEach(button =>{
    button.addEventListener('click', () => {
        
        if(!twoNumbers.includes(button.value)){
            display.textContent += button.value;
            display2.textContent += button.value;
        }
        else {
            
            display2.textContent += button.value;
            storage.push(display.textContent);
            display.textContent = '';
            oStorage.push(button.value);
        }
    })});

evaluate.addEventListener('click', () =>{
    storage.push(display.textContent);
    display.textContent = '';
    switch(oStorage[0]){
        case '+':
            add(Number(storage[0]),Number(storage[1]));
            break
    
        case '-':
            subtract(Number(storage[0]),Number(storage[1]));
            break

        case '/':
            divide(Number(storage[0]),Number(storage[1]));
            break
        
        case '*':
            multiply(Number(storage[0]),Number(storage[1]));
            break
    }
    
});

ac.addEventListener('click', ()=>{
    display.textContent = '';
});

function add(a,b){
    let rezultat = a + b;
    display.textContent = rezultat;
    storage.splice(0, storage.length)
    oStorage.splice(0,oStorage.length)
    return console.log(rezultat);

}
function subtract(a,b){
    let rezultat = a - b;
    display.textContent = rezultat;
    storage.splice(0, storage.length)
    oStorage.splice(0,oStorage.length)
    return console.log(rezultat);
}
function divide(a,b){
    let rezultat = a / b;
    display.textContent = rezultat;
    storage.splice(0, storage.length)
    oStorage.splice(0, oStorage.length)
    return console.log(rezultat);
}
function multiply(a,b){
    let rezultat = a * b;
    display.textContent = rezultat;
    storage.splice(0, storage.length)
    oStorage.splice(0,oStorage.length)
    return console.log(rezultat);
}
