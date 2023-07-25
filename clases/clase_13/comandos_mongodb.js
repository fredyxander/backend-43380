////// comandos basicos
//listar las bases de datos
show dbs

////comando para realizar crud
//insertar varios documentos
db.pizzas.insertMany([
    {name:"Napolatina",size:"Grande",price:250},
    {name:"Margarita",size:"Mediana", price:200}
]);


nombre
apellido
curso
edad
correo
sexo 

//Ejemplo colegio
use colegio
//Agregamos los estudiantes
db.usuarios.insertMany([
    {nombre:"pepe",apellido:"suarez",curso:"html",edad:20,correo:"pepe@gmail.com", sexo:"M"},
    {nombre:"laura",apellido:"diaz",curso:"css",edad:30,correo:"laura@gmail.com", sexo:"F"},
    {nombre:"maria",apellido:"Villa",curso:"css",edad:17,correo:"maria@gmail.com", sexo:"F"},
    {nombre:"Juan",apellido:"Perez",curso:"html",edad:16,correo:"juan@gmail.com", sexo:"M"},
    {nombre:"Maria",apellido:"Rosa",curso:"css",edad:27,correo:"ana@gmail.com", sexo:"F"},
])

//Agregar un documento
db.estudiantes.insertOne({nombre:"Lucas",curso:"Js"})

//estudiantes del sexo masculino
db.estudiantes.find({sexo:"M"})

//proyeccion
db.usuarios.find({},{nombre:1,curso:1})

//proyeccion y ordenamiento
db.usuarios.find({},{nombre:1,edad:1}).sort({edad:1})


//Ejercicio
db.usuarios.insertMany([
    {nombre:"pepe",apellido:"suarez",curso:"html",edad:20,correo:"pepe@gmail.com", sexo:"M"},
    {nombre:"laura",apellido:"diaz",curso:"css",edad:30,correo:"laura@gmail.com", sexo:"F"},
    {nombre:"maria",apellido:"Villa",curso:"css",edad:17,correo:"maria@gmail.com", sexo:"F"},
    {nombre:"Juan",apellido:"Perez",curso:"html",edad:16,correo:"juan@gmail.com", sexo:"M"},
    {nombre:"Maria",apellido:"Rosa",curso:"css",edad:27,correo:"ana@gmail.com", sexo:"F"},
])

//filtrar los que tengan el nombre Maria
db.usuarios.find({nombre:"Maria"})

//maria con 17 años
db.usuarios.find({nombre:"Maria",edad:17})

//pepe o Juan
db.usuarios.find({nombre:{$in:["pepe","Juan"]}})