import React, { useState } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Link } from "react-router-dom";

function Navbar(){

    const[ menu, setMenu] = useState(false);
    const[upArrow, setUpArrow] = useState(false);
    const[downArrow, setDownArrow] = useState(true);


    function handleClick(){
        setMenu(!menu);
    }

    function changeArrow(){
        setUpArrow(!upArrow)
        setDownArrow(!downArrow)
    }

    function both(){
        changeArrow();
        handleClick();
    }


    return(
        <div className="nav">
           
                
                <h2>Menu{downArrow && <ArrowDropDownIcon onClick={both}/>} 
                {upArrow && <ArrowDropUpIcon onClick={both} /> }
                </h2>
                <li>
                { menu && <ul>
                <Link to='/'>Home</Link>
                </ul>}
                { menu && <ul>
                <Link to='/shop'>Shop </Link>
                </ul>}
                { menu && <ul>
                <Link to='/cart'>Cart </Link>
                </ul>}
            </li>
        </div>
    )
}

export default Navbar;
