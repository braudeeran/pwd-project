class ProductModel {
    
    public id: number;
    public title: string;
    public price: number;
    public description: number;
    public category: number;
    public image: number;
    public rate: object;


    public constructor(product: ProductModel) {
        this.id = product.id,
        this.title = product.title,
        this.price = product.price,
        this.description = product.description,
        this.category = product.category,
        this.image = product.image,
        this.rate = product.rate
    }
}

export default ProductModel;