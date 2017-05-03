//variables.js

//En JS se define una variable con una palabra reservada <var>
// Enteros
var dos = 2;
var tres = 3;

console.log(dos);
console.log(tres);
// Float
var dosPuntoCinco = 2.5;
console.log(dosPuntoCinco);

//Todas las demas
var verdadero = true;
var falso = false;
var nombre = 'Fercho';
var negativo = -9;
var fechaNacimiento = new Date();
var cuatroString = '4';
cuatroString = 4;
cuatroString = true;
cuatroString = false;
cuatroString = -6786;
cuatroString = undefined;
cuatroString = null;

var variable;

console.log(variable);

//Objetos JSON
var fercho = {
    id : 1,
    nombre: 'fercho',
    createdAt: new Date(),
    updatedAt: new Date(),
    casado:true,
    prestamos:false,
    hijos:null,
    altura:1.78,
    negativo:-1,
    mascota:{
        nombre:'oso',
        edad:12
    }
}
console.log(fercho+ "Hola");
console.log(fercho.mascota.edad, "Hola");
console.log(fercho.altura);
fercho.altura = 1.2;
console.log(fercho.altura);

fercho.altura = {
    ancho:2.4,
    alto:3
};
console.log(fercho.altura);

fercho.altura = undefined;
console.log(fercho);
//Borrando atributos del objeto
delete fercho.altura;
console.log(fercho);
//Añadiendo atributos a un objeto
fercho.games=1;
console.log(fercho);

var arreglo = [
    1,
    'adr',
    2.4,
    false,
    undefined,
    {
        a:3,
        b:'casa'
    },
    3
]
console.log(arreglo);

var  nuevoOnjetos = {
    papas:['a','b'],
    cebollas:['q','w']
};
console.log(nuevoOnjetos.cebollas[1]);

var matriz =[[0,1],[4,5]];
console.log(matriz[0][1]);

var  c = [
{p:'a',c:'e'},
{c: 'c', a:'s'}
];
console.log(c);
c.splice(0,1);
console.log(c);