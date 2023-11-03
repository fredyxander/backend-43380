export class ViewsController{
    static renderHome = (req,res)=>{
        res.render("home");
    };

    static renderSignup = (req,res)=>{
        res.render("signup");
    };

    static renderLogin = (req,res)=>{
        res.render("login");
    };

    static renderProfile = (req,res)=>{
        const user = req.user;
        res.render("profile",{user});
    };

    static renderForgot = (req,res)=>{
        res.render("forgotPassword");
    };

    static renderResetPass = (req,res)=>{
        const token = req.query.token;
        res.render("resetPassword",{token});
    };
}