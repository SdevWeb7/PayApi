import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export function Menu ({setMenu}) {
   const menuRef = useRef(null)

   useEffect(() => {

      const handleMenu = (e) => {
         if (!menuRef.current.contains(e.target)) {
            setMenu(false)
         }
      }

      const time = setTimeout(() => {
         document.addEventListener('click', handleMenu)
      }, 30)

      return () => {
         document.removeEventListener('click', handleMenu)
         clearTimeout(time)
      }
   })

   return (
      <motion.div
         className="menu"
         initial={{transform: 'translateX(350px)'}}
         exit={{transform: 'translateX(350px)'}}
         animate={{transform: 'translateX(0)'}}
         ref={menuRef}>

         <motion.img
            src="/public/images/shared/mobile/close.svg"
            alt="a"
            className={'close'}
            onClick={() => setMenu(false)}
            initial={{transform: 'rotate(180deg)'}}
            exit={{transform: 'rotate(180deg)'}}
            animate={{transform: 'rotate(0)'}}
            transition={{delay: .2}} />

         <hr/>

         <Link
            to={'/pricing'}
            className={'nav-menu'}>
            Pricing
         </Link>


         <Link
            to={'/about'}
            className={'nav-menu'}>
            About
         </Link>


         <Link
            to={'/contact'}
            className={'nav-menu'}>
            Contact
         </Link>

         <Link
            to={"/contact"}
            className={'btn'}>
            Schedule a Demo
         </Link>
      </motion.div>
   )
}