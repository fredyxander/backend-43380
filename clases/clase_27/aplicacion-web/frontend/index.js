const makeRequest = async()=>{
    //hacemos la peticion al servidor
    // fetch("http://localhost:8080/users",{
    //     method:"GET"
    // })
    const response = await fetch("http://localhost:8080/users");
    // console.log("response", response);
    const data = await response.json();
    console.log("data", data);
};