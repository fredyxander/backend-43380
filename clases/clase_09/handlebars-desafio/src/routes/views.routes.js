import { Router } from "express";

const router = Router();

const food=[
    {name:"Hamburguesa", price:200},
    {name:"Pizza", price:300},
    {name:"Hot dog", price:400},
    {name:"Soda", price:120},
];

//routes
router.get("/",(req,res)=>{
    //indicar la vista
    res.render("home",{style:"home.css"});
});

//http://localhost:8080/contacto
router.get("/contacto", (req,res)=>{
    res.render("contact");
});

router.get("/perfil",(req,res)=>{
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

router.get("/comida",(req,res)=>{
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

router.get("/registro",(req,res)=>{
    res.render("register",{style:"register.css"});
});

export {router as viewsRouter};