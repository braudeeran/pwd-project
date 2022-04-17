import ProductModel from "../Models/ProductModel";

export class ProductsState {
    public products: ProductModel[] = [];
};

export enum ProductsActionType {
    FetchProducts = "FetchProducts",
    AddProduct = "AddProduct"
};

export interface ProductsAction {
    type: ProductsActionType;
    payload: any;
};

export function fetchProductsAction(products: ProductModel[]): ProductsAction {
    return { type: ProductsActionType.FetchProducts, payload: products };
};

export function addProductAction(product: ProductModel): ProductsAction {
    return { type: ProductsActionType.AddProduct, payload: product };
};

export function productsReducer(currentState = new ProductsState(), action: ProductsAction): ProductsState {


    const newState = { ...currentState };

    switch (action.type) {

        case ProductsActionType.FetchProducts:
            newState.products = action.payload; 
            break;

        case ProductsActionType.AddProduct:
            newState.products.push(action.payload); 
            break;

    }

    return newState;
}