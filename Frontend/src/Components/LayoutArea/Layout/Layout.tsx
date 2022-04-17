import { SyntheticEvent, useEffect, useState } from "react";
import Header from "../Header/Header";
import Routing from "../Routing/Routing";
import "./Layout.css";
import FilterContext from '../../../store/filter-context'
import FilterContextFlag from "../../../store/filter-context-flag";

function Layout(): JSX.Element {

    const [valToFil, setValToFil] = useState('');
    const [valToFilFlag, setValToFilFlag] = useState('');



    function handleFilter(args: SyntheticEvent){
        const value = (args.target as HTMLSelectElement).value.toLowerCase();
        setValToFil(value);
    }

    function handleFilterTwo(args: SyntheticEvent){
        if(valToFilFlag === 'x'){
            setValToFilFlag('xx');
        }
        else{
            setValToFilFlag('xx');
        }
        
    }


    return (
        <div className="Layout">
            <FilterContextFlag.Provider value={valToFilFlag}>
            <FilterContext.Provider value={valToFil}>
			<header>
                <Header handleFilter={handleFilter} handleFilterTwo={handleFilterTwo}/>
            </header>

            <main>
               <Routing/>
            </main>
            </FilterContext.Provider>
            </FilterContextFlag.Provider>
        </div>
    );
}

export default Layout;
