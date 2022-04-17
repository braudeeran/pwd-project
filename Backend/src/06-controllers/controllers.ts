import express, { NextFunction, Request, Response } from "express";
import ProductModel from "../03-models/product-model";
import logic from "../05-logic/logic";

const router = express.Router();

// DONT FORGET TO WRITE THE CORRECT PATH
router.get("/products", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const teams = await logic.getAllProducts();
        response.json(teams);
    }
    catch (err: any) {
        next(err);
    }
});


export default router;