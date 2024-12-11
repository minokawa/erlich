"use client";
import "@/styles/cart.scss"
import { CartContext } from './cart-provider';
import React, { useContext } from 'react'
export function Cart() {
  const{cartItem} = useContext(CartContext)

  console.log('cart items',cartItem);
  return (
    <div className="cart">
      <h1>Cart Items</h1>
    </div>
  );
}