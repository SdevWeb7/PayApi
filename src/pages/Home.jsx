import { Header } from "../components/Header.jsx";
import { HomePart1 } from "../components/home/HomePart1.jsx";
import { HomePart2 } from "../components/home/HomePart2.jsx";
import { HomePart3 } from "../components/home/HomePart3.jsx";
import { Footer } from "../components/Footer.jsx";

export function Home () {

   return (
   <>
      <Header />

      <HomePart1 />
      <HomePart2 />
      <HomePart3 />

      <div className="bg-pattern-home"></div>

      <Footer />

   </>
   )
}