import BgImage from '../../assets/bg-slate.png'
import CoffeeMain from '../../assets/black.png'


const bgImage = {
    backgroundImage: `url(${BgImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
}

const Hero = () => {
  return (
    <main style={bgImage}>
        <section className='min-h-[750px] w-full'>
            <div className="container">
                {/*Navbar Section*/}
                {/*Hero Section*/}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[680px]">
                    {/*Text content section*/}
                    <div className='text-lightOrange mt-[100px] md:mt-0 p-4 space-y-20'>
                        <h1 className='text-7xl font-bold leading-tight ml-14'>Blvck Tumbler</h1>
                        <div className='relative'>
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
                        </div>
                    </div>
                    {/*Hero Image Section*/}
                    <div className='relative'>
                        <img src={CoffeeMain} alt=""  className='relative z-40 h-[400px] md:h-[700px] img-shadow'/>
                        {/*Orange Circle Ring*/}
                        <div className='h-[180px] w-[180px] absolute top-24 -right-16 border-primary border-[20px] rounded-full z-10'></div>
                        {/*Big text section*/}
                        <div className='absolute -top-20 left-[200px] z-[1]'>
                            <h1 className='text-[140px] scale-150 font-bold text-darkGray/40 leading-none'>
                                Blvck Tumbler
                            </h1>
                        </div>
                    </div>
                    {/*Third div setion*/}
                    <div className='text-lightOrange mt-[100px] md:mt-0 p-4 space-y-52'>
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
                    </div>
                    <div></div>
                </div>
            </div>
        </section>        
    </main>
  )
}

export default Hero
