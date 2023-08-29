console.log("frontend js");

const form = document.getElementById("loginForm");
const loginBtn = document.getElementById("sendLoginForm");
const profileBtn = document.getElementById("profileBtn");

loginBtn.addEventListener("click", async(evt)=>{
    evt.preventDefault();
    try {
        const response = await fetch("/login",{
            method:"POST",
            headers:{
                "Content-type": "application/json"
            },
            body:JSON.stringify({
                email: form.email.value,
                password: form.password.value
            })
        });
        const data = await response.json();
        console.log("data", data);
    } catch (error) {
        console.log(error);
    }
});

profileBtn.addEventListener("click", async(evt)=>{
    try {
        const response = await fetch("/profile",{
            method:"GET",
            headers:{
                "Content-type": "application/json",
            },
        });
        const data = await response.json();
        console.log("data", data);
    } catch (error) {
        console.log(error);
    }
});