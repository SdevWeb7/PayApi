import { motion, useInView } from 'framer-motion'
import { useRef } from "react";

export function Fader ({children, delay = 0}) {

   const divRef = useRef(null)
   const {isInView} = useInView(divRef)

   return (
      <motion.div ref={divRef} initial={{transform: 'translateY(20px)', opacity: 0}} whileInView={{transform: "translateY(0)", opacity: 1}} animate={isInView} transition={{ease: 'easeInOut', duration: .7, delay: delay}}>
         {children}
      </motion.div>
   )
}