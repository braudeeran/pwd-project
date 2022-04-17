import { SyntheticEvent, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import productsService from "../../../Services/ProductService"
import Loading from "../../SharedArea/Loading/Loading";
import ProductCard from "../ProductCard/ProductCard";
// import ProductCard from "../ProductCard/ProductCard";
import React, {useContext} from 'react';
import "./ProductList.css";
import { FaBeer } from 'react-icons/fa';
import { SyntheticEventData } from "react-dom/test-utils";
import { Observer, observer } from "mobx-react";
import FilterContext from "../../../store/filter-context";
import FilterContextFlag from "../../../store/filter-context-flag";



function ProductList(): JSX.Element {

    const ctx = useContext(FilterContext);
    const ctxFlag = useContext(FilterContextFlag);
    console.log(ctx);
    

    // Create products state: 
    const [products, setProducts] = useState<ProductModel[]>([]);
    let mainList:ProductModel[] = [];

    // Do side-effect once: 
    useEffect(() => {
        let test: ProductModel[] = [];
        productsService.fetchProducts()
            .then(products => {
                for (let i=0; i <= 11; i++ ){
                    if(i <= 11){
                        test.push(products[i]) 
                        mainList.push(products[i])
                    }
                }
                setProducts(test)
                })
            .catch(err => alert(err));
    }, [ctxFlag]);

    console.log('****');
    console.log(mainList);
    console.log('****');
    

    useEffect(() => {
        let filterBy = products.filter(obj => {
        return obj.title.toLowerCase().includes(ctx)});
        setProducts((prevState:any) => {
            return [...filterBy]
          });
    }, [ctx]);

    function sortList(arg: SyntheticEvent):void{
        const sortBy = (arg.target as HTMLSelectElement).value
        if (sortBy === 'Lowest price'){ 
            const sortedArray = products.sort((obj1, obj2) => {return obj1.price - obj2.price})
            console.log(sortedArray);
            setProducts((prevState:any) => {
                return [...sortedArray]
              });
              }
              if (sortBy === 'Top price'){ 
                const sortedArray = products.sort((obj1, obj2) => {return obj2.price - obj1.price})
                console.log(sortedArray);
                setProducts((prevState:any) => {
                    return [...sortedArray]
                  });
                  }
                  if (sortBy === 'Rating'){ 
                    const sortedArray = products.sort((obj1, obj2) => {return obj2.rating.rate - obj1.rating.rate})
                    console.log(sortedArray);
                    setProducts((prevState:any) => {
                        return [...sortedArray]
                      });
                      }

        }
        
     
        

    

    // setExpensesArray((prevState:any) => {
    //     return [finExpenseData, ...prevState]
    //   });
    //   }

    return (
        <div className="ProductList row justify-content-md-center">
            <div className="icons">
            <i className="fa-solid fa-grid"></i>
            </div>
            <div className="sort">
            <select defaultValue="" onChange={sortList}>
                <option value="Sort by">Sort by</option>
                <option  value="Top price">Top price</option>
                <option  value="Lowest price">Lowest price</option>
                <option  value="Rating">Top rated</option>
            </select>
            <select defaultValue="Condition">
                <option  value="Condition">Condition</option>
            </select>
            <select defaultValue="Delivery options">
                <option  value="Delivery options">Delivery options</option>
            </select>
            </div>
            <div className="ProductList-headers">
                <span>Related</span>
                <span>World wide shipping</span>
                <span>Under $50</span>
                <span>Kitten</span>
                <span>Plastics plugs</span>
                <span>Pucker shoes</span>
                <span>Vintage typewriter</span>
            </div>
            {products.length === 0 && < Loading/>}
            {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
    );
}

export default ProductList;