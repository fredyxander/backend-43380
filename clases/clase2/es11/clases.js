class Person{
    //variable privada
    #variablePrivada="soy una variable privada";
    //funcion constructora, ayuda a definir las propiedades que va a tner el objeto
    constructor(name, age, course){
        this.name=name;//pepe.name=name
        this.age=age;
        this.course=course;
        this.city="Buenos Aires"
    };

    //acciones, que dentro de la clase se conocen como metodos
    saludar(){
        console.log("hola")
    };

    obtenerVariablePrivada(){
        console.log(this.#variablePrivada);
    }

    despedirse = ()=>{
        console.log("adios");
    }

    comprar(producto){
        return `el usuario ${this.name} compro el producto ${producto}`
    }
};

//construir los objetos basados en la clase Person
// const pepe = {
//     name:"pepe",
//     age:20,
//     course:"html"
// };

// const laura = {
//     name:"laura",
//     age:24,
//     course:"css"
// };

const pepe = new Person("pepe",20,"html");
console.log("pepe: ", pepe);
console.log("curso: ",pepe.course);
pepe.saludar();
pepe.obtenerVariablePrivada();
pepe.despedirse();
const result = pepe.comprar("juguetes");
console.log("result: ", result);

// console.log(pepe.#variablePrivada)//Error
// const laura = new Person("laura",24,"css");
// console.log("laura: ", laura);