import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) =>  {

    const [cartItems,setCartItems] = useState({})

    const addToCart = (itemId) => {
        if(!cartItems[itemId]){                                      /*Si cartItems no es "available"*/
            setCartItems((prev)=>({...prev,[itemId]:1}))             /*Si es la primera vez que el cliente añade un producto en el carrito*/ 
        }    
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId+1]}))
        }                              
    }

    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    
    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = food_list.find((product)=> product._id === item)
                        totalAmount += itemInfo.price* cartItems[item];
            }
           return totalAmount;
        }
    }

    const contextValue= {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }
    
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider