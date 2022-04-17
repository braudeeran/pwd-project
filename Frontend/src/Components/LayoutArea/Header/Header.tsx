import "./Header.css";
import { FaBeer, FaShoppingBag, FaUserCircle } from 'react-icons/fa';
import { SyntheticEvent } from "react";
import { NavLink } from "react-router-dom";

interface storeProps {
    handleFilter: any;
    handleFilterTwo:any
}

function Header (props: storeProps): JSX.Element  {


    return (
        <div className="Header">
            <div>
            <NavLink to='/products' className="Header-header"><h2 ><FaShoppingBag/> Shopka</h2></NavLink>
            </div>
            <div className="search">
                <form action="" onChange={props.handleFilter} >
                    <input type="text" placeholder="🔎search"/>
                    <button type = 'reset' className="clear" onClick={props.handleFilterTwo}>❌</button>
                </form>
            </div>
            <div className="button">
                <NavLink to='/watch-products'><button type="button" className="watch-list btn btn-outline-primary">Watch</button></NavLink>
                <FaUserCircle className="icon-user"/>
            </div>
            <div className="slider-wrapper">
                <p>Price range selector</p>
                <label>$10</label>
                <input type="range" className="form-range" min="0" max="5" step="0.5" id="customRange3" />
                <label>$200</label>
            </div>
            <div className="customer_rev">
                <h6>Customer reviews</h6>
                <div>
                <p>⭐⭐⭐⭐ & up</p>
                <p>⭐⭐⭐ & up</p>
                </div>
                <div>
                <p>⭐⭐ & up</p>
                <p>⭐ & up</p>
                </div>
            </div>
        </div>
        
    );
}

export default Header;
