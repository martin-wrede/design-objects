import React, { useState, useContext } from "react";
import { Context } from '../Context'
import { Link } from 'react-router-dom'

export default function Products(){
    const {data} = useContext(Context)
    const[amountOfProducts, setAmountOfProducts] = useState(0)
   
    const { cart, setCart } = useContext(Context)

    function changeAmount(event){
        setAmountOfProducts(event.target.value)
        if (event.target.value<0){
            setAmountOfProducts(0)
        }
    }
    function addToCart(idNumber){
        setCart({
           id:idNumber,
           amount: amountOfProducts
           }) 
           console.log( cart)
       }
    /*
    function addToCart(idNumber){
     setCart({
        id:idNumber,
        amount: amountOfProducts
        }) 
        console.log( cart)
    }
    */

const products = data[1] && data[1].content_chapter.map((chapter,i)=> {
return(
    <div key={i}>
    <h1>{chapter.content_h1}</h1> 
    <h2>{chapter.content_h2}</h2>
    <img className="content-image" src={`${chapter.content_h2_image}`}  />
        <br />
         <span><i>{chapter.content_h2_text1}</i></span> <br />
         <br />
        <input  
        type="number"
        value={amountOfProducts}
        name="amount"
        onChange={changeAmount}
        />
         <button  type="submit" onClick={()=>addToCart(chapter.content_Id)}>{chapter.button}</button>
        <br />
        ID {cart.id}, Amount {cart.amount}
    </div>
    )
}
)
    return(
        <div>
        Products:  {products}
       
        </div>
    )
}