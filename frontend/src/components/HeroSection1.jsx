import React from 'react'
import Navbar1 from './Navbar1'

const HeroSection1 = () => {
  return (
    <section className='heroSection' id='heroSection'>
        <Navbar1 />
        <div className="container">
            <div className="banner">
                <div className="largeBox"><h1 className="title">Delicious</h1></div>
                <div className="combined_boxes">
                    <div className="imageBox">
                        <img src="/hero1.png" alt="hero1" />
                    </div>
                    <div className="textAndLogo">
                        <div className="textWithSvg">
                            <h1 className="title">Food</h1>
                            <h1 className="title dishes_title">Dishes</h1>
                            <img src="/threelines.svg" alt="three" />
                        </div>
                        <img src="/image.png" alt="logo" className='logo'/>
                    </div>
                </div>
            </div>
            <div className="banner">
                <div className="imageBox">
                    <img src="/hero3.png" alt="hero2" />
                </div>
                <h1 className="title dishes_title">Dishes</h1>
            </div>
        </div>
      
    </section>
  )
}


export default HeroSection1