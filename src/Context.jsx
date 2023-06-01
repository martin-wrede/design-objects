import React, { useEffect, useState } from 'react'

const Context = React.createContext()

function ContextProvider({children}){
 
   const url = "./data.json"
   const [data, setData] = useState([])
     const [cart, setCart] = useState([])
 //   const [cart, setCart] = useState([{     id: 0,    amount: 0 }])
    const[amountOfProducts, setAmountOfProducts] = useState(1)

    
    function addToCart(idNumber) {
        const updatedCart = cart.map((el) => {
          if (idNumber - 1 === el.id) {
            // If the element is already in the cart, update the amount
            return {
              id: el.id,
              amount: Number(el.amount) + Number(amountOfProducts)  // Increase the amount by old value
            };
          } else {
            // If the element is not in the cart, keep it as it is
            return el;
          }
        });
      
        const newItem = {
          id: idNumber - 1,
          amount: amountOfProducts
        };
      
        // Check if the item is already in the cart
        const found = updatedCart.find((el) => el.id === newItem.id);
      
        if (!found) {
          // If the item is not in the cart, add it
          updatedCart.push(newItem);
        }
      
        setCart(updatedCart);
      }
      
    

    function deleteCart(id){
        setCart(()=> cart.filter((item , index) =>  id !== item.id ))
        console.log(cart)
    }

   

    useEffect(() => {
        const getData = async() => {
            try{
               const response = await fetch(url)
               if(!response.ok){
                throw new Error(response.status)
               }
               const data = await response.json()
               setData(data)
             //  console.log(data) 
            }
            catch(error){console.error(error)}
        }
        getData()

    },[])
    return(
        <Context.Provider value={{ data, cart, setCart, addToCart, deleteCart ,amountOfProducts, setAmountOfProducts }}>
                {children}
        </Context.Provider>
    )


}

export {Context, ContextProvider}