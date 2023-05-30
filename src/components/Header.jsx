import React from "react";
import { Link } from  'react-router-dom'

export default function Header(){

    return(
        <div>
            <Link to="/" >Home</Link>
            <ul>
            <li>
            <Link to="/products" >Products</Link>
            </li>
            <li>
            <Link to="/cart" >Cart</Link>
            </li>
            <li>
            <Link to="/legals" >Legals</Link>
            </li>
            </ul>
              
        </div>
    )
}