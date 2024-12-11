"use client";

import { createContext, useState, useEffect } from 'react'
import { Items } from './items';


export const CartContext = createContext(null);


const CartProvider = (props) => {
    
    const [cartItem,setCartItem] = useState(  ()=>{
        let cart = {}
        for(let i=1;i<=Items.length;i++){
            cart[i]=0
        }
        return cart
    } );

    const addItem = (pid:any)=>{
        setCartItem((prev:any)=>({...prev,[pid]:prev[pid]+1}))
    }
    const removeItem = (pid:any)=>{
        setCartItem((prev:any)=>({...prev,[pid]:prev[pid]-1}))
    }
    const getItems = (pid:any)=>{
        return cartItem;
    }
    
    const actions = {cartItem,addItem, removeItem,getItems }

  return (
   <CartContext.Provider value={actions}>{props.children}</CartContext.Provider>
  )
}

export default CartProvider;