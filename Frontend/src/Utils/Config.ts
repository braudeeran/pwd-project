class Config {
}

class DevelopmentConfig extends Config {
    public productsUrl = 'http://localhost:3001/api/products';
}

class ProductionConfig extends Config {
    public productsUrl = 'https://pwd-eran-braude.herokuapp.com/api/products';
}

const config = process.env.NODE_ENV === "development" ? new DevelopmentConfig() : new ProductionConfig();

export default config;
