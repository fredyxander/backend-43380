//flat remueve anidaciones internas en los arreglos, para obtener un arreglo plano.
const arregloDeArreglos = [ [1,[0,10,[12]],3], [4,5,6], 7,8 ];
console.log("arregloDeArreglos: ", arregloDeArreglos);
const arregloPlano = arregloDeArreglos.flat();
console.log("arregloPlano: ", arregloPlano);
const arregloTotalmentePlano=arregloDeArreglos.flat(3);//Infinity
console.log("arregloTotalmentePlano: ",arregloTotalmentePlano)