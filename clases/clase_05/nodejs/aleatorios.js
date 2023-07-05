// console.log(Math.ceil(Math.random()*20));//1-20

//formas de verificar si una clave pertenece a un objeto
let obj = {1:5,2:6,3:8}
// 1 forma obj.hasOwnProperty
// console.log(obj.hasOwnProperty(5));

//2 forma: obj[property]
// console.log(obj['3']) // user['name']

//formas de asignar valores a las propiedades de un objeto
// obj[3]=15;
// console.log(obj);
// obj.property=value

// const obj2 = {
//     '5':50,
//     '10':80,
//     '13':450
// }

let aleatorios = {};
for(let i=0; i<10000;i++){
    const random = Math.ceil(Math.random()*20);
    // console.log("aleatorio", random);
    if(aleatorios[random]){
        aleatorios[random] +=1;
    } else {
        aleatorios[random] = 1;
    }
};
console.log("aleatorios",aleatorios);
const values = Object.values(aleatorios);
// console.log("values", values);
const total = values.reduce((acc,item)=>acc+=item,0);
console.log("total", total);
