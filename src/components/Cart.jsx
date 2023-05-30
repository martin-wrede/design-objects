import React, { useContext } from "react";
import { Context } from '../Context'

export default function Cart({testVar}){
    const { cart, data }  = useContext(Context)
    const url = data[1] && data[1].content_chapter[`${cart.id-1}`].content_h2_image
    return(
        <div>
            <h1>Cart</h1>
            <h1>{ data[1].content_chapter[`${cart.id-1}`].content_h1}</h1> 
            <img className="content-image" src={url} />
           
             ID:{cart.id}
           Amount: {cart.amount}
     
        </div>
    )
}