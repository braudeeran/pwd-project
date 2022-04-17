import { Navigate, Route, Routes } from "react-router-dom";
import ProductList from "../../ProductArea/ProductList/ProductList";
import WatchList from "../../ProductArea/WatchList/WatchList";
import PageNotFound from "../PageNotFound/PageNotFound";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <Routes>

            <Route path="/products" element={<ProductList />} />

            <Route path="/watch-products" element={<WatchList />} />

            {/* Default route - second way: */}
            <Route path="/" element={<Navigate to="/products" />} />

            <Route path="*" element={<PageNotFound />} />

        </Routes>
    );
}

export default Routing;
