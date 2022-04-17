class Config {
    
    public productsUrl = "https://fakestoreapi.com/products";
    public addProductsUrl = "http://localhost:3001/api/products/";

}

class DevelopmentConfig extends Config {
    public isDevelopment = true;
}

class ProductionConfig extends Config {
    public isDevelopment = false;
}

const config = process.env.NODE_ENV === "production" ? new ProductionConfig() : new DevelopmentConfig();

export default config;
