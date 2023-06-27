const moment = require("moment");

const today = moment();//fecha actual
console.log(today.format("DD/MM/YYYY"));

const birthdate = moment("2023-06-20");

if(birthdate.isValid()){
    console.log("fecha valida");
    const diffDays = today.diff(birthdate,"days");
    console.log(`han pasado ${diffDays} dias`);
} else {
    console.log("fecja invalida");
}