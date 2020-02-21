/**
* Scrivere qui il codice della funzione fibonacci(n)
**/
var ibonacci = 30;

function straFibonacci(num){ 
    if (num == 0 || num == 1) {
        return num;
    }else{
        return straFibonacci(num-1) + straFibonacci(num-2); 
    }
}
console.log(straFibonacci(ibonacci));
