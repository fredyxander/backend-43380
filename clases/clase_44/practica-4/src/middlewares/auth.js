export const checkRole = (roles)=>{ // roles = ["admin", "superadmin"]
    return (req,res,next)=>{
        // console.log("req", req.user.role);
        if(roles.includes(req.user.role)){
            next();
        } else {
            res.json({status:"error", message:"No tienes permisos para usar este recurso"});
        }
    }
};

export const checkAuthenticated = (req,res,next)=>{
    if(req.user){
        next();
    } else {
        res.json({status:"error", message:"Debes estar autenticado"});
    }
};