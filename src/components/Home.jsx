import React from 'react'
import '../styles/home.css'
import {motion} from "framer-motion"
import sun from '../images/sun.png'
import cloud from '../images/cloud.png'
import phone from '../images/download.png'
import phone2 from '../images/download (2).png'
import finsmen from '../images/finsmen.png'
import nbc from '../images/nbc.png'
import tech from '../images/tech.png'
import { img } from 'framer-motion/client'
import Card from './Card'
import mascot from '../images/mascot1.svg'
import curious from '../images/Curious.svg'
import mascot2 from '..//images/mascot2.svg'
import knight from '../images/knight.svg'
import morning from '../images/desktopillo.svg'

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
                
                <article className="carusel-home" >
                    
                    <div className="slide"  style={{
                    "--width": "200px" ,
                    "--height": "200px",
                    "--quantity": 9 }}>
                        <div class="list">
                            <div className="item" style={{"--position" :1}} > <img src={finsmen} alt="" /></div>
                            <div className="item" style={{"--position" :2}} > <img src={nbc} alt="" /></div>
                            <div className="item" style={{"--position" :3}} > <img src={tech} alt="" /></div>
                        </div>
                    </div>
                </article>
            </section>
            
            <section className="section-2">
                <article className="title-home-2">
                    <h1>Less Worry, More Wonder</h1>
                    <p>Parenting might not come with a manual, but it now comes with an app</p>
                </article>
                
                <article className="big-desc-home-2">
                    <article className="desc-home-2">
                        <Card children={mascot} text={"Real-time parenting support: even at 3am"} desc={ "No more late-night Googling or going down an internet rabbit hole. Riley delivers instant, expert answers to all of your parenting questions – day or night."} ></Card>
                        <Card children={knight} text={"Your parenting toolbox, all in one place"} desc={ "Riley makes it easy to ask, track, and organize everything you need. Diapers, growth, vaccinations, milestones - all in one place."} ></Card>
                        <Card children={mascot2} text={"When you need a solution, not a 10 hour course"} desc={ "From independent sleep to handling tantrums, the first five years keep you on your toes. Riley guides you every (baby) step of the way with custom plans made just for you."} ></Card>
                        <Card children={curious} text={"Personalized parenting, powered by you"} desc={ "Riley isn't just smart—it's uniquely yours. Riley learns and adapts based on your preferences and parenting style with advice that feels like it's from a trusted friend."} ></Card>
                    </article>
                </article>

                <article className="image-home-2">
                    <img src={morning} alt="" />
                </article>
            </section>

          
        </main>
    </div>
  )
}

export default Home
