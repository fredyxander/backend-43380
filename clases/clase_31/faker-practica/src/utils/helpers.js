import {faker,Faker,es,en} from "@faker-js/faker";


const {database, commerce, image, string, person, internet} = faker;

const generateProduct = ()=>{
    return {
        id:database.mongodbObjectId(),
        title:commerce.productName(),
        price:parseFloat(commerce.price()),
        stock:parseInt(string.numeric(2)),//1-99
        image:image.url(),
        code:string.alphanumeric(10),
        description:commerce.productDescription()
    }
};
// console.log(generateProduct());

//generar usuarios
export const generateUser = ()=>{
    //generamos un numero aleatorio de productos que se agregaran al carrito
    const numberOfProducts = parseInt(string.numeric(1));//1-9
    let products = [];
    for(let i=0;i<numberOfProducts;i++){
        const newProduct = generateProduct();
        products.push(newProduct);
    };
    return {
        id:database.mongodbObjectId(),
        first_name:person.firstName(),
        last_name:person.lastName(),
        email:internet.email(),
        cart:products
    };
};

// console.log(generateUser());