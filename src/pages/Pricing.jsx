import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import { PricingPart1 } from "../components/pricing/PricingPart1.jsx";

export function Pricing () {

   return (
      <>
         <Header />

         <PricingPart1 />

         <Footer />

         <div className="bg-pattern-normal"></div>

      </>
   )
}