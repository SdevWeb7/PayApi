import { Link } from "react-router-dom";
import { Fader } from "../Fader.jsx";

export function HomePart2 () {

   return (
   <Fader>
      <div className="home-part2">

         <div className={'work-with'}>
            <h1>Who we work with</h1>

            <p>Today, millions of people around the world have successfully connected their accounts to apps they love using our API. We provide developers with the tools they need to create easy and accessible experiences for their users. </p>

            <Link
               to={"/about"}
               className={'btn btn-secondary'}>
               About Us
            </Link>
         </div>
         
         
         
         <div className={'collabs'}>
            <img src="/public/images/shared/desktop/tesla.svg" alt="a" />
            <img src="/public/images/shared/desktop/microsoft.svg" alt="a" />
            <img src="/public/images/shared/desktop/hewlett-packard.svg" alt="a" />
            <img src="/public/images/shared/desktop/oracle.svg" alt="a" />
            <img src="/public/images/shared/desktop/google.svg" alt="a" />
            <img src="/public/images/shared/desktop/nvidia.svg" alt="a" />
         </div>
      </div>
   </Fader>
   )
}
