"use client";
import React, { useContext } from 'react'
import { CartContext } from './cart-provider';
import "@/styles/recent.scss"
export function Recent({purchases}) {
  const{ addItem, getItems} = useContext(CartContext)
  let cartItems = getItems();
  console.log(cartItems);
  return (
    <div className="recent">
      <h2>Recently Bought</h2>
      <p className="h2-sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis, mauris, pretium, auctor a.</p>
      <div className="cards"> 
      {purchases.map((item) => {
        let onsale = item.sale? 'onsale':'';

        return (
            <a key={item.pid} className={"card"}  onClick={()=>addItem(item.pid)}>
              <span className='count-count'>{cartItems[item.pid]}</span>
              <div className='image-wrap'>
              <img src={`/images/${item.img}`}/> 
              </div>
              <span className="label">{item.label}</span>
              {item.sale && <span className="sale">${item.sale}</span>}
              <span className={`price ${onsale}`}>${item.price}</span>
            </a>
          )
        })}
      </div>
    </div>
  );
}