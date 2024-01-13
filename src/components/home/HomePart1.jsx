import { Link } from "react-router-dom";
import { Fader } from "../Fader.jsx";

export function HomePart1 () {

   return (
   <Fader>
      <div className="home-part1">

         <div>
            <h1>Start building with our APIs for absolutely free.</h1>

            <div className="flex">
               <input type="text" placeholder={'Enter email address'} />

               <Link
                  to={'/contact'}
                  className={'btn'}>
                  Schedule a Demo
               </Link>
            </div>

            <p>Have any questions?&nbsp;
               <Link to={'/contact'}>Contact Us</Link>
            </p>
         </div>


         <img src="/public/images/home/desktop/illustration-phone-mockup.svg" alt="a" />

      </div>
   </Fader>
   )
}
