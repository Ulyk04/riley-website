import React from 'react'
import '../styles/home.css'
import {motion} from "framer-motion"
import sun from '../images/sun.png'
import cloud from '../images/cloud.png'
import phone from '../images/download.png'
import phone2 from '../images/download (2).png'

const Home = () => {
  return (
    <div className='home-page' > 
        <main>
            <section className="section-1">

                <article className="background-home">
                    <div className="sun-home">
                        <motion.img 
                        src={sun}
                        className='sun'
                        animate = {{x: ['50vw' ,'-10vw', '50vw']}}
                        transition={{repeat:Infinity , duration: 50  , ease: 'linear'}} />
                    </div>
                    <motion.img 
                    src={cloud}
                    className='cloud'
                    animate = {{x: ['50vw' ,'-10vw', '50vw']}}
                    transition={{repeat:Infinity , duration: 70 , ease: 'linear'}} />
                    <motion.img 
                    src={cloud}
                    className='cloud-1'
                    animate = {{x: ['50vw' ,'-10vw', '50vw']}}
                    transition={{repeat:Infinity , duration: 70 , ease: 'linear'}} />
                    <motion.img 
                    src={cloud}
                    className='cloud-2'
                    animate = {{x: ['50vw' ,'-10vw', '50vw']}}
                    transition={{repeat:Infinity , duration: 70 , ease: 'linear'}} />
                </article>

                <header>
                    <ul>
                        <li>
                            Features and Pricing
                        </li>
                        <li>
                            Gift Riley
                        </li>
                        <li>
                            Blog
                        </li>
                        <li>What's New?</li>
                        <button type="button"> Get Started </button>
                    </ul>
                </header>
                <article className="title-home">
                    <h1>
                    The Baby Tracker That Gets You
                    </h1>
                    <p>Riley is the only all-in-one baby tracker that learns your family's unique rhythm to give you confidence and physician-backed guidance when it matters most.</p>
                    <button>Try 7 days free </button>
                </article>
                <article className="image-home">
                    <img src={phone} alt="" />
                    <img src={phone2} alt="" />
                </article>

            </section>
        </main>
    </div>
  )
}

export default Home