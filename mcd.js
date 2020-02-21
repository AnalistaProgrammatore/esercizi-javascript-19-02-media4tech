/**
* Scrivere qui il codice delle funzioni mcd(x, y) e mcdRecursive(x, y)
**/
var x = 147;
var y = 126;

app = 0;

if (y > x) {
    app = x;
    x = y;
    y = app;
}



function MCD(a,b) {
  var r = 0;
  r=x%y;
    while(r != 0){
        a = b;
        b = r;
        r = a % b;
    }
    return b; 
}
console.log(MCD(x,y));
