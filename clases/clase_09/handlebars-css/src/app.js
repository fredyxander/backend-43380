import express from "express";
import handlebars from "express-handlebars";
import { __dirname } from "./utils.js";
import path from "path";

const port = 8080;
const app = express();

//midlewares
app.use(express.static(path.join(__dirname,"/public")));

app.listen(port,()=>console.log(`Server is listening on port ${port}`));

//configuracion para utilizar handlebars
app.engine('.hbs', handlebars.engine({extname: '.hbs'}));//inciar el motor de plantillas handlebars
app.set('view engine', '.hbs');//indicar que motor vamos a utilizar
app.set('views', path.join(__dirname,"/views"));//ruta de la carpeta de vistas

const food=[
    {name:"Hamburguesa", price:200},
    {name:"Pizza", price:300},
    {name:"Hot dog", price:400},
    {name:"Soda", price:120},
];

//routes
app.get("/",(req,res)=>{
    //indicar la vista
    res.render("home",{style:"home.css"});
});

app.get("/contacto", (req,res)=>{
    res.render("contact");
});

app.get("/perfil",(req,res)=>{
    const user1={
        name:"pepe",
        lastname:"perez",
        age:20,
        location:{
            city:"Buenos Aires"
        },
        style:"profile.css",//indicamos la hoja de estilos
    }
    res.render("profile",user1);
    // res.render("profile",{
    //     name:"pepe",
    //     lastname:"perez",
    //     age:20,
    //     location:{
    //         city:"Buenos Aires"
    //     }
    // });
});

app.get("/comida",(req,res)=>{
    const testUser={
        name:"pepe",
        role:"admin"
    }
    res.render("foodView",{
        name:testUser.name,
        isAdmin: testUser.role === "admin" ? true : false, // testUser.role === "admin" || false
        food
    })
});