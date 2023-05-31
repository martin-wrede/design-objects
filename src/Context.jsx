import React, { useEffect, useState } from 'react'

const Context = React.createContext()

function ContextProvider({children}){
 
   const url = "./data.json"
   const [data, setData] = useState([])
     const [cart, setCart] = useState([])
 //   const [cart, setCart] = useState([{     id: 0,    amount: 0 }])
    const[amountOfProducts, setAmountOfProducts] = useState(0)

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
        <Context.Provider value={{ data, cart, setCart, amountOfProducts, setAmountOfProducts }}>
                {children}
        </Context.Provider>
    )


}

export {Context, ContextProvider}