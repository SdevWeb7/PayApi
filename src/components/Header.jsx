import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "./Menu.jsx";

export function Header () {
   const [menu, setMenu] = useState(false)

   const burgerVariants = {
      hidden: {transform: 'rotate(-360deg)'},
      visible: {transform: 'rotate(0)'},
   }
   return (
      <header className={"header"}>

         <nav className={'navbar'}>

            <Link
               to={'/'}
               className={'logo'}>
               <img
                  src="/public/images/shared/desktop/logo.svg"
                  alt="a"/>
            </Link>

            <Link
               to={'/pricing'}
               className={'nav-link'}>
               Pricing
            </Link>

            <Link
               to={'/about'}
               className={'nav-link'}>
               About
            </Link>


            <Link
               to={'/contact'}
               className={'nav-link'}>
               Contact
            </Link>


            <Link
               to={'/contact'}
               className={'btn'}>
               Schedule a Demo
            </Link>

            <motion.img
               src="/public/images/shared/mobile/menu.svg"
               alt="a"
               className={'burger'}
               onClick={() => setMenu(true)}
               variants={burgerVariants}
               animate={menu ? 'hidden' : 'visible'} />
         </nav>

         <AnimatePresence>
            {menu && <Menu setMenu={setMenu} />}
         </AnimatePresence>
      </header>
   )
}