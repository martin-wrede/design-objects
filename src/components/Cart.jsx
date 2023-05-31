import React, { useContext } from "react";
import { Context } from '../Context'

export default function Cart(){
    const {data, cart} = useContext(Context)
   const url = data[1] && data[1].content_chapter[`${cart[0].id}`].content_h2_image
   
   return(
        <>
            <h2>Cart</h2>
            
           {cart.map((item, index) => (
            
        <div key={index}>
        ID {item.id}, Amount {item.amount}
        <h1>{ data[1].content_chapter[`${item.id}`].content_h1}</h1> 
            <img className="content-image" 
            src={data[1] && data[1].content_chapter[`${item.id}`].content_h2_image} />
        </div>
        ))}
        </>
    )
}
