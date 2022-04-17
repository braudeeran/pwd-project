import { useEffect, useState } from "react";
import ProductModel from "../../../Models/ProductModel";
import store from "../../../store/store";
import ProductCard from "../ProductCard/ProductCard";
import "./WatchList.css";

function WatchList(): JSX.Element {

    const [ProductsList, setProductsList] = useState<ProductModel[]>([]);

        useEffect(() => {


                let products = store.getState().productsState.products;
                setProductsList(products);
              
        }, []);


        

    // function test(){
    //     let products = store.getState().productsState.products;
    //     console.log(products);
        
    // }

    return (
        <div className="WatchList">
			{ProductsList.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
    );
}

export default WatchList;
