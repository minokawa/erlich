'use client'
import { Logo } from "./logo";
import "@/styles/navigation.scss"
import {IcoInfo} from "./icons/info"
import { IcoAct} from "./icons/actions";
import Link from "next/link";
import { useContext, useState} from 'react';
import { CartContext } from './cart-provider';
import { Items } from "./items";

export function Navigation() {
  const{ getItems,removeItem} = useContext(CartContext)
  const [cartHover,setCartHover] = useState(0);
  let cartItems = getItems();
  return (
    <div className="navbar">
      <div className="navlinks">
        <a>Women</a>
        <a>Plus</a>
        <a>Men</a>
        <a>Accessories</a>
      </div>
      <div className="logo-wrap"><Link href="/">  <Logo.Standard className="logo"/></Link></div>
    
      <div className="actions"   onMouseLeave={() => setCartHover(0)}>
        <a><IcoAct.User/></a>
        <a className="cart-link" onMouseEnter={() => setCartHover(1)}><IcoAct.ShoppingBag/><div className={`cart-widget ${cartHover && 'open'}`}>
    Items
    
        </div>
        </a>
        
        <a><IcoAct.User/></a>
        <a><IcoAct.Heart/></a>
        <a><IcoAct.Support/></a>
        <a><IcoAct.Search/></a>
      </div>
      <div className="benefits">
        <a><IcoInfo.Crown/>Exclusive Deals for VIP 2 and up!</a>
        <a><IcoInfo.Star/>Weekly New Arrivals</a>
        <a><IcoInfo.Deliver/>Free Shipping On Orders Over $100</a>
        <a><IcoInfo.Location/>Track Your Order</a>
        <a><IcoInfo.Tag/>10% Off On Your First Order!</a>
      </div>
    </div>
  );
}