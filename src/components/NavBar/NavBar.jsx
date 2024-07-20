import { motion } from "framer-motion"
import { GiHamburgerMenu } from "react-icons/gi"

const NavBar = ({sidebar, setSidebar}) => {
  return (
    <div className="absolute top-0  left-0 w-full pt-7 text-white z-40">
      <div className="container">
        <div className="flex justify-between items-center">
            {/*Logo Section*/}
            <motion.h1 initial={{opacity: 0, y: -100}} animate={{opacity: 1, y: 0}} transition={{type: "spring", stiffness: 100, damping: 10, delay: 0.2}} className="text-2xl font-semibold uppercase"><span className="text-primary">Coders</span> Coffee.</motion.h1>
            {/*Hamburger Menu Section*/}
            <motion.div 
                initial={{opacity: 0, y: -100}} 
                animate={{opacity: 1, y: 0}} 
                transition={{type: "spring", stiffness: 100, damping: 10, delay: 0.2}}
                onClick={() => setSidebar(!sidebar)}
            >
                <GiHamburgerMenu  className="text-3xl cursor-pointer"/>
            </motion.div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
