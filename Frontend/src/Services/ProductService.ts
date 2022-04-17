import axios from "axios";
import ProductModel from "../Models/ProductModel";
import config from "../Utils/Config";

class ProductsService {

    public async fetchProducts(): Promise<ProductModel[]> {

            const response = await axios.get<ProductModel[]>(config.productsUrl);
            const products = response.data;
            console.log(products);
            


        return products;
    }

    // public async addNewProduct(product: ProductModel): Promise<ProductModel> {

    //     // Convert out product to FormData:
    //     const formData = new FormData();
    //     formData.append("name", product.name);
    //     formData.append("price", product.price.toString());
    //     formData.append("stock", product.stock.toString());
    //     formData.append("image", product.image!.item(0)!);
    //     // Post the new product to the server: 
    //     const response = await axios.post<ProductModel>(config.productsUrl, formData);
    //     const addedProduct = response.data;

    //     // Add to redux global state: 
    //     store.dispatch(addProductAction(addedProduct));

    //     return addedProduct;
    // }
    
}

const productsService = new ProductsService();

export default productsService;