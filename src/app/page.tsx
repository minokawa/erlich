import '@/styles/globals.css'
import '@/styles/page.scss'
import { Footer } from "@/components/footer";
import { Navigation } from '@/components/navigation';
import { CTA } from '@/components/cta';
import { Hero } from '@/components/hero';
import { Inspo } from '@/components/inspo';
import { Recent } from '@/components/recent';
import { Signup } from '@/components/signup';
import { Trending } from '@/components/trending';
import { Deals } from '@/components/deals';
import { Items } from '@/components/items';
import  CartProvider from '@/components/cart-provider';
const Categories = [
  {label: "Winter Fashion", img:"trend1.png"},
  {label: "Boots", img:"trend2.png"},
  {label: "Night Out", img:"trend3.jpg"},
  {label: "Holidays", img:"trend9.png"},
  {label: "Outerwear", img:"trend5.jpg"},
  {label: "White Dresses", img:"trend6.jpg"},
  {label: "Sweaters", img:"trend7.jpg"},
  {label: "Party", img:"trend8.jpg"}
]



const Recommended = [
  {label: "Winter Fashion", img:"nexxt1.jpg"},
  {label: "Boots", img:"next2.jpg"},
  {label: "Night Out", img:"next3.jpg"},
  {label: "Holidays", img:"next4.jpg"},
  {label: "Outerwear", img:"next5.jpg"}
]

const HashTags = ["#Thanksgiving","#NewYears","#Knitted","#WFH","#FallHashion"]

const CTAData = [{variant:1, title:'Black Friday Exclusive', subtitle: 'Free shipping on all orders for vip 2 and up', bg:'bg.png', action:'#'},{variant:2,  title:'New Arrivals', subtitle: 'Get ready for the holidays with us!', action:'#', bg:'bg-1.png'}]

export default function Home() {
  return (
    <div className="page">
      <main className="main">
        <CartProvider>
          <Navigation/>
          <Hero/>
          <Deals/>
          <CTA CTAData={CTAData} row={0}/>
          <Trending categories={Categories} hashtags={HashTags}/>
          <CTA CTAData={CTAData} row={1}/>
          <Recent  purchases={Items} />
          <Inspo recommended={Recommended}/>
          <Signup content={"sign up for exclusive deals and updates"}/>
          <Footer/>
      </CartProvider>
      </main>
    </div>
  );
}
