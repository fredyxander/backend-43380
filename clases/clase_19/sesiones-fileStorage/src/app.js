import express from "express";
import { engine } from 'express-handlebars';
import { __dirname } from "./utils.js";
import path from "path";
import session from "express-session";
import FileStore from "session-file-store";

const port = 8080;
const app = express();

app.listen(port,()=>console.log("Server ready"));

//midlewares
app.use(express.urlencoded({extended:true}));

//conectar session con fileStore
const fileStorage = FileStore(session);

//configuracion de las sessiones en el servidor
app.use(session({
    store: new fileStorage({
        ttl:30,
        retries:0,
        path:path.join(__dirname,"/sessions")
    }),
    secret:"sessionSecretKey",//cifra el id de la sesion dentro de la cookie
    resave:true,
    saveUninitialized:true
}));//req.session

//configuracion del motor de plantillas
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,"/views"));

//rutas
//ruta para generar la sesion del usuario
app.get("/login",(req,res)=>{
    // console.log(req.session);
    const {username} = req.query;
    req.session.user={username, visitas:1}
    console.log(req.session);
    res.send("usuario logueado");
});

app.get("/visitas",(req,res)=>{
    console.log(req.session)
    if(req.session?.user?.username){
        req.session.user.visitas++;
        res.send(`Ya estas logueado ${req.session.user.username} y visitaste esta pagina ${req.session.user.visitas}`)
    } else {
        res.send("necesitas estar logueado")
    }
});