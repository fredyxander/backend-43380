import passport from "passport";
import jwt from "passport-jwt";
import { SECRET_TOKEN } from "../utils.js";

const jwtStrategy = jwt.Strategy;
const ExtractJwt = jwt.ExtractJwt; //extraer el token (headers,cookie,req.body)

export const initalizePassport = ()=>{
    passport.use("jwtStrategyLogin", new jwtStrategy(
        {
            jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
            secretOrKey: SECRET_TOKEN
        },
        async(jwtPayload, done)=>{
            console.log(jwtPayload)
            try {
                return done(null,jwtPayload);//req.user = info extraida del token
            } catch (error) {
                console.log(error.message);
                return done(error);
            }
        }
    ));
}

//funcion encargada de extraer el token
export const cookieExtractor = (req)=>{
    let token = null;
    if(req && req.cookies){//validamos que estemos recibiendo cookies
        token = req.cookies['cookie-token'];
    }
    return token;
};