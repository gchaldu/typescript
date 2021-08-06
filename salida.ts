console.log('Hello World!!!');
document.writeln('Hello mundo!!!');


//Type 

var cadena = 'Hola Mundo';
var cadena2:string = 'Otra cadena';
cadena2.concat(' ',cadena);
document.writeln("Cadena nro 3 " + cadena2);


var flag:boolean = true;
var bandera:boolean = true || false;

var miNumero:number=73;

document.writeln("nNumero:" + miNumero);

//ARREGLOS

var arreglo:string[] = ['Hola',' Gabriel'];
document.writeln(arreglo[0] + '' + arreglo[1], '!!!');

var arregloNumeros: number [] = [1,2,3];

var arreglodeCualquierTipop:any[]=['Gabriel', 22, true];

//TUPLE

var cadenaNumeroTuple:[string,number];
cadenaNumeroTuple = ['Gabriel', 48];
document.writeln(cadenaNumeroTuple[0] + ' ' + cadenaNumeroTuple[1]);

//VOID UNDEFINED NULL
let myVoid: void = undefined;
let myNull: null = null;
let myUndefined: undefined = undefined;

//LA FUNCION TYPEOF DEVUELVE DE QUE TIPO DE DATO ES LA VARIABLE

document.write(typeof(myVoid))
document.write(typeof(cadena))

//funciones - Function

function sumar(n1:number,n2:number)
{
    return n1+n2
}

document.write ('La suma es: ' + sumar(5,6).toString());

let suma = function(n1:number | string ,n2:number | string):number
{
    if(typeof(n1)=='string')
    {
        n1 = parseInt(n1);
    }
    if(typeof(n2)=='string')
    {
        n2 = parseInt(n2);
    }
    return n1 + n2;
}

document.write("La Suma es: " + suma(10,"40"));

function getName(nombre:string, apellido:string):string
{
    return nombre + ' ' + apellido;
}

function getName2(nombre:string, apellido:string):string
{
    return `${nombre} ${apellido}`;
}

//PARAMETRO OPCIONAL

function getName3(nombre:string, apellido?:string):string
{
    if(apellido == undefined)
    {
        return `${nombre}`;    
    }else
        return `${nombre} ${apellido}`;
}

document.write(getName3('Gabriel '));

//INTERFACES

function VerTarea(tarea)
{
    document.write(`${tarea.titulo} ${tarea.texto}`);
}

VerTarea({
    titulo: 'Mi Primer Tarea',
    texto: 'Activa'
})

/////////////////////////////////////

function VerTarea2(tarea: {titulo2:string; texto2:string;})
{
    document.write(`${tarea.titulo2} ${tarea.texto2}`);
}

VerTarea2({
    titulo2: 'Mi Primer Tarea 2',
    texto2: 'Activa 2'
})

/////////////////////////////////////
interface ITarea{
    titulo:string;
    texto:string;
}

function VerTarea3(tarea:ITarea)
{
    document.write(`${tarea.titulo} ${tarea.texto}`);
}

let miTarea:ITarea = {titulo: 'Titulo 3', texto: 'Texto 3'};
VerTarea3(miTarea);

//CLASES

