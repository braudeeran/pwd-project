import { OkPacket } from "mysql";
import ErrorModel from "../03-models/error-model";
import  fs  from 'fs';
import path from 'path';
import ProductModel from "../03-models/product-model";
import axios from "axios";
import config from "../01-utils/config";



async function getAllProducts(): Promise<ProductModel[]> {
    const products = await axios.get(config.productsUrl)
    return products.data;
};



export default {
    getAllProducts
};

