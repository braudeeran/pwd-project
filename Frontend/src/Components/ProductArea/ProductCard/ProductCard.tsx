import { useEffect, useRef } from "react";
import ProductModel from "../../../Models/ProductModel";
import { addProductAction } from "../../../store/productStore";
import { addReftAction } from "../../../store/refStore";
import store from "../../../store/store";
import Rating from "../Rating/Rating";
import "./ProductCard.css";

interface ProductCardProps {
    product: ProductModel;
}

function ProductCard(props: ProductCardProps): JSX.Element {

    const colorRef = useRef<any>();
    

    useEffect(() => {


        let refs = store.getState().RefState.refs;
        for(let ref of refs){
            ref.style.backgroundColor = "yellow"; 
        }
        
      
        }, []);

    function handleWatchList(){

        colorRef.current.style.backgroundColor = "yellow"; 
        store.dispatch(addReftAction(colorRef.current));
        const oneProduct = {
            id: props.product.id,
            category: props.product.category,
            image: props.product.image,
            title: props.product.title,
            price: props.product.price,
            description: props.product.description,
            rating: props.product.rating
        };

            let products = store.getState().productsState.products;
            const index = products.findIndex(obj => obj.id === oneProduct.id)
                if(index !== -1){
                    return;
                }
                store.dispatch(addProductAction(oneProduct));
            }
            
               



    return (
        <div className="ProductCard Box">
            <div className="img-product">
                <img src={props.product.image} />
            </div>
            <div className="title">
                {props.product.title}
            </div>
            <div className="price">
                ${props.product.price}
            </div>
            <div className="description">
                {props.product.description}
            </div>
            <div className="rates">
                <div className="rates-rates">
                    <Rating rating={props.product.rating.rate} />
                    <button type="button" ref={colorRef} className="watch-list btn btn-outline-primary" onClick={handleWatchList}>💓 Watch</button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
