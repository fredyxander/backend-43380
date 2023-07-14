const socketClient = io();//instanciando socket del lado del cliente

const chatbox = document.getElementById("chatbox");
const sendButton = document.getElementById("sendButton");

sendButton.addEventListener("click",()=>{
    socketClient.emit("messageKey",chatbox.value);
    chatbox.value="";
});

// chatbox.addEventListener("keydown",(e)=>{
//     console.log(e.key);
    // enviamos datos al servidor
//     socketClient.emit("messageKey", e.key);
// });

socketClient.on("msgHistory",(data)=>{
    console.log(data);
});