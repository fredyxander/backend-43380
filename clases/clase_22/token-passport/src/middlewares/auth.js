import passport from "passport";

export const authenticate = (strategy)=>{
    const passportAuthenticate = async(req,res,next)=>{
        passport.authenticate(strategy , {session:false} , (err,user,info)=>{
            if(err) return res.status(401).json({status:"error", message:"autenticacion fallida"});
            if(!user){
                return res.status(401).json({status:"error", message:info.toString()})
            }
            req.user = user;
            next();
        })(req,res,next);
    }
    return passportAuthenticate;
};