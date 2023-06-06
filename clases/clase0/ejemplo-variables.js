//tipos primitivos
var nombre = "Laura";
console.log(nombre);
var edad = 25;
console.log(edad);
var precio = 500.50;
console.log(precio);

//tipos de dato objeto
var series = ["the office", "lost", "breaking bad", "game of thrones","los simuladores"];
console.log(series);
var arreglo = ["serie", 2523, true, [1,2,3]];
var movies = [
    {
        titulo:"harry potter",
        precio:200,
        lanzamiento:2001,
        personajes:["harry potter", "hermoine"]
    },
    {
        titulo:"harry potter 2",
        precio:200,
        lanzamiento:"1996",
        personajes:["harry potter", "hermoine"]
    },
];
console.log(movies);

series.push("pinpon");
console.log(series)