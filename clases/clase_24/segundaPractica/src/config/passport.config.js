import passport from "passport";
import LocalStrategy from "passport-local";
import {createHash, isValidPassword} from "../utils.js";
import { usersService } from "../dao/managers/index.js";

export const initializePassport = ()=>{
    passport.use("signupStrategy", new LocalStrategy(
        {
            //username, password
            usernameField:"email",
            passReqToCallback:true,
        },
        async (req, username, password, done)=>{
            try {
                const {first_name, last_name, age} = req.body;
                //verificar si el usuario ya se registro
                const user = await usersService.getByEmail(username);
                if(user){
                    return done(null, false)
                }
                const newUser = {
                    first_name:first_name,
                    email: username,
                    password: createHash(password)
                }
                const userCreated = await usersService.save(newUser);
                return done(null,userCreated)//En este punto passport completa el proceso de manera satisfactoria
            } catch (error) {
                return done(error)
            }
        }
    ));

    passport.use("loginStrategy", new LocalStrategy(
        {
            usernameField:"email"
        },
        async(username, password, done)=>{
            try {
                //verificar si el usuario ya se registro
                const user = await usersService.getByEmail(username);
                if(!user){
                    return done(null, false)
                }
                //si el usuario ya se registro, validar la contraseña
                if(isValidPassword(user,password)){
                    return done(null,user);
                } else {
                    return done(null, false);
                }
            } catch (error) {
                return done(error);
            }
        }
    ));

    //serializacion y deserializacion
    passport.serializeUser((user,done)=>{
        done(null,user._id);
    });

    passport.deserializeUser(async(id,done)=>{
        const user = await usersService.getById(id);
        done(null,user) //req.user --->sesions
    });
}