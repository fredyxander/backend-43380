mongo


//listar las bases de datos
show dbs

//crear la base de datos
use nombreBaseDeDatos

//muestra la base actual
db

//crear collecion de usuarios
db.createCollection("usuarios")

//mostrar las colecciones de la base de datos
show collections

//insertar, agregar documento en la coleccion
db.usuarios.insertOne({name:"Miguel", lastname:"perez", age:20})

//leer los documentos de la coleccion usuarios
db.usuarios.find()


//DESAFIO
use colegio

//creamos la coleccion e insertamos documentos
db.estudiantes.insertMany([
    {name:"Miguel", lastname:"perez", age:20},
    {name:"Laura", lastname:"Diaz", age:30},
    {name:"juan", lastname:"Mora", age:22},
    {name:"Lucas", lastname:"perez", age:24},
])

//listar estudiantes
db.estudiantes.find()