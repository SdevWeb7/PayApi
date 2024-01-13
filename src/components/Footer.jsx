import { Link } from "react-router-dom";
import { Logo } from "../svg/Logo.jsx";

export function Footer () {

   return (
      <div className="footer">

         <div className="part1">
            <h1>Ready to start?</h1>

            <div>
               <input type="text" placeholder={'Enter email address'} />
               <Link
                  to={'/contact'}
                  className={"btn"}>
                  Schedule a Demo
               </Link>
            </div>
         </div>


         <nav className={'nav'}>
            <div className={'navigation'}>
            <Link to={'/'} className={'logo'}>
               <Logo />
            </Link>

            <Link to={'/pricing'}>
               Pricing
            </Link>

            <Link to={'/about'}>
               About
            </Link>

            <Link to={'/contact'}>
               Contact
            </Link>
            </div>


         <div className={'rs'}>
            <Link to={'/'}>
               <img src="/public/images/shared/desktop/facebook.svg" alt="a" />
            </Link>

            <Link to={'/'}>

            <img src="/public/images/shared/desktop/twitter.svg" alt="a" />
            </Link>

            <Link to={'/'}>
               <img src="/public/images/shared/desktop/linkedin.svg" alt="a" />
            </Link>
         </div>
         </nav>
      </div>
   )
}