const user1 = {
    name:"pepe",
    age:20,
    city:"miami"
}

const additional = {
    course:"html",
    level:"basic"
}

// const newUser = {
//     name:user1.name,
//     age:user1.age,
//     city:user1.city,
//     course:additional.course,
//     level:additional.level
// };

const newUser = {
    ...user1,
    ...additional,
    otherProperty:"otra propiedad"
}
console.log("newUser: ", newUser);