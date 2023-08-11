import { Router } from "express";
import { productService } from "../dao/index.js";

const router = Router();

router.get("/",(req,res)=>{
    res.render("home");
});

router.get("/products",async(req,res)=>{
    try {
        //capturar los valores de los queries
        const {limit=10,page=1,stock,sort="asc"} = req.query;
        // console.log(limit,page,stock,sort);
        const stockValue = stock === 0 ? undefined : parseInt(stock);
        if(!["asc","desc"].includes(sort)){
            return res.render("products", {error:"Orden no válido"})
        };
        const sortValue = sort === "asc" ? 1 : -1;
        let query = {};
        if(stockValue){
            query = {stock:{$gte:stockValue}}
        }
        const result = await productService.getWithPaginate(query,{
            page,
            limit,
            sort:{price:sortValue},
            lean: true
        });
        // console.log(result);
        //              http://localhost:8080/products?limit=20
        const baseUrl = `${req.protocol}://${req.get("host")}${req.originalUrl}`
        const resultProductsView = {
            status:"success",
            payload: result.docs,
            totalPages: result.totalPages,
            page: result.page,
            prevPage: result.prevPage,
            hasPrevPage: result.hasPrevPage,
            prevLink: result.hasPrevPage ? baseUrl.replace(`page=${result.page}`, `page=${result.prevPage}`) : null,
            nextPage: result.nextPage,
            hasNextPage: result.hasNextPage,
            nextLink: result.hasNextPage ? baseUrl.includes("page") ? baseUrl.replace(`page=${result.page}`, `page=${result.nextPage}`) : baseUrl.includes("?") ? baseUrl.concat(`&page=${result.nextPage}`) : baseUrl.concat(`?page=${result.nextPage}`) : null
        }
        // console.log(resultProductsView)
        res.render("products", resultProductsView);
    } catch (error) {
        console.log(error.message)
        res.render("products",{error:"No es posible visualizar los datos"});
    }
});

export {router as viewsRouter};