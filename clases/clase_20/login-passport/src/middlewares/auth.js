export const checkUserAuthenticated = (req,res,next)=>{
    if(req.user){
        next();
    } else {
        res.redirect("/login");
    }
};

export const showLoginView = (req,res,next)=>{
    if(req.user){
        res.redirect("/perfil");
    } else {
        next();
    }
};