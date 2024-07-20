import { motion } from 'framer-motion'
import BgImage from '../../assets/bg-slate.png'
import CoffeeMain from '../../assets/black.png'
import NavBar from '../NavBar/NavBar'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { useState } from 'react'


const bgImage = {
    backgroundImage: `url(${BgImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
}

const Hero = () => {

    const [sidebar, setSidebar] = useState(false)

  return (
    <main style={bgImage}>
        <section className='relative min-h-[700px] w-full'>
            <div className="container">
                {/*Navbar Section*/}
                <NavBar  sidebar={sidebar} setSidebar={setSidebar}/>
                {/*Hero Section*/}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[680px]">
                    {/*Text content section*/}
                    <div className='text-lightOrange mt-[100px] md:mt-0 p-4 space-y-20'>
                        <motion.h1 initial={{opacity: 0, y: -100}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{type: "spring", stiffness: 100, damping: 10, delay: 1}} className='text-7xl font-bold leading-tight ml-14'>Blvck Tumbler</motion.h1>
                        <motion.div initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{type: "spring", stiffness: 100, damping: 10, delay: 1.2}} className='relative'>
                            <div className='relative z-10 space-y-4'>
                                <h1 className='text-2xl'>Black lifestyle lovers,</h1>
                                <h1 className='text-sm opacity-55 leading-loose'>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                    Eveniet distinctio aliquam odit, molestiae, ab nobis beatae 
                                    libero neque vel ut unde cupiditate inventore dolorum 
                                    odio ullam ratione tempora rem. Nisi.
                                    Lorem ipsum dolor sit amet consectetur 
                                    adipisicing elit. Neque.
                                </h1>
                            </div>
                            <div className='absolute -top-6 -left-10 w-[250x] h-[190px] bg-gray-700/25'></div>
                        </motion.div>
                    </div>
                    {/*Hero Image Section*/}
                    <div className='relative'>
                        <motion.img initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}} transition={{type: "spring", stiffness: 100, damping: 10, delay: 1.2}} src={CoffeeMain} alt=""  className='relative z-40 h-[350px] md:h-[600px] img-shadow'/>
                        {/*Orange Circle Ring*/}
                        <motion.div initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{type: "spring", stiffness: 100, damping: 10, delay: 0.8}} className='h-[180px] w-[180px] absolute top-24 -right-16 border-primary border-[20px] rounded-full z-10'></motion.div>
                        {/*Big text section*/}
                        <motion.div initial={{opacity: 0, x: -100}} animate={{opacity: 1, x: 0}} transition={{type: "spring", stiffness: 100, damping: 10, delay: 0.8}} className='absolute -top-20 left-[200px] z-[1]'>
                            <h1 className='text-[140px] scale-150 font-bold text-darkGray/40 leading-none'>
                                Blvck Tumbler
                            </h1>
                        </motion.div>
                    </div>
                    {/*Third div setion*/}
                    <div className='hidden lg:block'>
                        <motion.div initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{type: "spring", stiffness: 100, damping: 10, delay: 1.2}} className='text-lightOrange mt-[100px] md:mt-0 p-4 space-y-52'>
                            <h1 className='opacity-0 hidden text-7xl font-bold leading-tight ml-14'>Blvck Tumbler</h1>
                            <div className='relative'>
                                <div className='relative z-10 space-y-4'>
                                    <h1 className='text-2xl'>Black Tumber</h1>
                                    <h1 className='text-sm opacity-55 leading-loose'>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                        Labore ducimus perferendis exercitationem 
                                        reiciendis, sint at!
                                    </h1>
                                </div>
                                <div className='absolute -top-6 -right-10 w-[250x] h-[190px] bg-darkGray/50'></div>
                            </div>
                        </motion.div>
                        <div></div>
                    </div>
                </div>
            </div>

            {/*Sidebar menu section*/}
            {
                sidebar && (
                    <motion.div initial={{x: "100%"}} whileInView={{x: 0}} className='absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b from-primary/80 to-primaryDark/80 backdrop-blur-sm z-10'>
                        <div className='w-full h-full flex justify-center items-center'>
                            <div className='flex flex-col justify-center items-center gap-6 text-white'>
                                {/*Line*/}
                                <div className='w-[1px] h-[70px] bg-white'></div>
                                {/*Social Icons*/}
                                <div className='inline-block p-2 rounded-full cursor-pointer border border-white'>
                                    <FaFacebookF  className='text-2xl'/>
                                </div>
                                <div className='inline-block p-2 rounded-full cursor-pointer border border-white'>
                                    <FaTwitter className='text-2xl'/>
                                </div>
                                <div className='inline-block p-2 rounded-full cursor-pointer border border-white'>
                                    <FaInstagram className='text-2xl'/>
                                </div>
                                
                                <div className='w-[1px] h-[70px] bg-white'></div>
                            </div>
                        </div>
                    </motion.div>
                )
            }
            
        </section>        
    </main>
  )
}

export default Hero
