"use client";
import '@/styles/globals.css'
import '@/styles/page.scss'
import { Footer } from "@/components/footer";
import { Navigation } from '@/components/navigation';
import { Cart } from '@/components/cart';
import  CartProvider from '@/components/cart-provider';
export default function CartPage() {


  return (
    <div className="page">
      <main className="main">
      <CartProvider>
      <Navigation/>
      <Cart/>
      <Footer/>
      </CartProvider>
      </main>
    </div>
  );
}
