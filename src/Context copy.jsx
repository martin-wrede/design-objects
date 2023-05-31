import React, { useEffect, useState } from 'react'

const Context = React.createContext()

function ContextProvider({children}){
    const [data, setData] = useState([])
   const url = "./data.json"
    
    const [cartId, setCartId] = useState([])
    const [cartAmount,  setCartAmount] = useState([])
   
    

    useEffect(() => {
        const getData = async() => {
            try{
               const response = await fetch(url)
               if(!response.ok){
                throw new Error(response.status)
               }
               const data = await response.json()
               setData(data)
               console.log(data) 
            }
            catch(error){console.error(error)}
        }
        getData()

    },[])
    return(
        <Context.Provider value={{ data, cartId, setCartId, cartAmount }}>
                {children}
        </Context.Provider>
    )


}

export {Context, ContextProvider}