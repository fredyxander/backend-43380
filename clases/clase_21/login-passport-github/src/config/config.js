export const config = {
    server:{
        port:8080,
        secretSession:"claveSecretaSessions"
    },
    mongo:{
        url:"MONGO URL"
    },
    github:{
        clientId:"GUTHUB CLIENT ID",
        clienteSecret:"GITHUB CLIENT SECRET",
        callbackUrl:"http://localhost:8080/api/sessions/github-callback"
    }
}