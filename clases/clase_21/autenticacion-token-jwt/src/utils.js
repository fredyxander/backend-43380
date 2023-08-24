import jwt from "jsonwebtoken";

const SECRET_TOKEN_KEY="coder43380Back";

export const generateToken = (userInfo)=>{
    const token = jwt.sign(userInfo,SECRET_TOKEN_KEY);
    return token;
};

export const validateToken = (req,res,next)=>{
    const authHeader = req.headers["authorization"]
    if(!authHeader){
        return res.json({status:"error",message:"No autorizado"})
    }
    const token = authHeader.split(" ")[1];
    // console.log("token",token);
    jwt.verify(token,SECRET_TOKEN_KEY,(err,payload)=>{
        if(err) return res.json({status:"error", message:"token no valido"});
        req.user = payload;
        next();
    })
}