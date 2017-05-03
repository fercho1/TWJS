// void
function holaMundo() {
    console.log('hola');
};
holaMundo();

// El doble de un entero
function doble(a) {
    return a*2;
}
console.log(doble(3));

var diez = doble(5);
var funcion = doble;

console.log(funcion(6));

var hola=function(){
    console.log('hola')
};
hola();

function haz(a){
    a()
};
haz(function (){console.log('la casa')});
