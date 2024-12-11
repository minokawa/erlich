import { Promo } from "./marketing/deals";
import "@/styles/deals.scss"
export function Deals() {


  return (
    <div className="deals row">
      
      <Promo.FiveOff/>
      <Promo.FifteenOff/>
      <Promo.ThirtyOff/>
      <Promo.TwentyOff/> 
      <button className="secondary">Check out all site-wide deals</button>
    </div>
  );
}