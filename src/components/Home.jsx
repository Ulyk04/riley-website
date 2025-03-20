import React from 'react'
import { useEffect } from 'react'
import '../styles/home.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {motion} from "framer-motion"
import sun from '../images/sun.png'
import cloud from '../images/cloud.png'
import phone from '../images/download.png'
import phone2 from '../images/download (2).png'
import finsmen from '../images/finsmen.png'
import nbc from '../images/nbc.png'
import tech from '../images/tech.png'
import { img, title } from 'framer-motion/client'
import Card from './Card'
import mascot from '../images/mascot1.svg'
import curious from '../images/Curious.svg'
import mascot2 from '..//images/mascot2.svg'
import knight from '../images/knight.svg'
import morning from '../images/desktopillo.svg'
import affect from '../images/affectionate.svg'
import books from '../images/books.svg'
import moon from '../images/moon.svg'
import award from '../images/award.svg'
import product from '../images/phone-2.svg'
import star from '../images/star.png'
import { data } from 'react-router-dom'
import Accordian from './Accordian'


const Home = () => {


    const accordianData = [
        {
            title: 'How do I know I can trust Riley',
            content: 'Riley is advice is grounded in the latest pediatric research and expert knowledge. We work closely with pediatricians, child development specialists, and parenting experts to ensure our information is accurate and up-to-date. Plus, Riley learns from your experiences, becoming more personalized and helpful over time. Think of Riley as a best friend with a Ph.D. in child development who is always by your side!'
        },
        {
            title: 'How will you keep my family is data private?',
            content: 'Your family is privacy is our top priority. We use bank-level encryption to protect your data, and we never share your information with third parties. Riley is personalized advice is generated just for you, based on the information you choose to share. You are always in control of your data, and you can delete it at any time.'
        },
        {
            title: 'Do you offer a free trial?',
            content: 'We do not offer a free trial, but we do provide a 14-day money-back guarantee—no questions asked! Try Riley risk-free, and if it is not the right fit for you, we all refund your purchase within 14 days.'
        },
        {
            title: 'Can I use Riley for other baby tracking needs?',
            content: 'Yes. Riley is not just a baby sleep-tracking app. It is an all-in-one parenting tool, helping parents track sleep, feeding, diaper changes, developmental milestones, and more.'
        }
    ]
    
        useEffect(() => {
            Aos.init({
                delay: 100,
                once: false,
                easing: 'linear'
            });
        } , []);    

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
                <article className="title-home" data-aos="fade-up" >
                    <h1>
                    The Baby Tracker That Gets You
                    </h1>
                    <p>Riley is the only all-in-one baby tracker that learns your family's unique rhythm to give you confidence and physician-backed guidance when it matters most.</p>
                    <button>Try 7 days free </button>
                </article>
                <article className="image-home" data-aos="fade-up" >
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
                <article className="title-home-2" data-aos="fade-right" >
                    <h1>Less Worry, More Wonder</h1>
                    <p>Parenting might not come with a manual, but it now comes with an app</p>
                </article>
                
                <article className="big-desc-home-2">
                    <article className="desc-home-2" data-aos="fade-right" >
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

            <section className="section-3">
                <article className="title-home-3" data-aos="fade-up" >
                    <h1>How Riley works</h1>
                    <p>Hint: it's not magic! Riley safely stores your data and uses the latest technology to help you make confident parenting decisions.</p>
                    <button>Get Started Now</button>
                </article>

                <article className="desc-home-3" data-aos="fade-up" >
                        <div className="card-desc-3">
                            <img src={affect} alt="" />
                            <h1>Sharing advice, never your data</h1>
                            <p>Your family's safety matters. Any information you provide us is secure and never shared with anyone, ever.</p>
                        </div>
                        <div className="card-desc-3">
                            <img src={books} alt="" />
                            <h1>Science-powered, AI-supported</h1>
                            <p>Skip the 3am panic Googling. Riley uses the best medical data and pediatrician-endorsed resources to provide reliable insights in seconds.</p>
                        </div>
                        <div className="card-desc-3">
                            <img src={moon} alt="" />
                            <h1>Riley grows with your family</h1>
                            <p>There's no generic advice here! Riley personalizes itself to you based on the details you provide. The more details, the deeper the personalization.</p>
                        </div>
                </article>

                <article className="image-home-3">
                        <img src={mascot} alt="" />
                </article>
            </section>

            <section className="section-4">
                <article className="title-home-4">
                    <div className="card-home-4" data-aos="fade-left" >
                        <img src={award} alt="" />
                        <h1>Get personalized insights for:</h1>
                        <h3>baby sleep</h3>
                    </div>
                    <div className="card-home-4">
                        <img src={product} alt="" />
                    </div>
                    <div className="card-home-4" data-aos="fade-right" >
                        <p>Riley can create custom plans for every milestone - from independent sleep and starting solids to potty training and tantrums - giving you the confidence to tackle anything parenthood throws your way.</p>
                        <img src={star} alt="" />
                    </div>
                </article>
            </section>
            
            <section className="section-5">
                <article className="wrapper-home-5">
                    <article className="title-home-5">
                        <h1>Why Parents Love Riley</h1>
                        <p>Join a community of parents like you who get it all done with Riley</p>
                        <button>Join the club</button>
                    </article>

                    <article className="desc-home-5">
                        <div className="card-home-5" data-aos='fade-down' data-aos-duration='1000' >
                            <p>Riley feels like a personalized parent companion that will grow with my child. It offers tailored advice, activities, and resources that make navigating the challenges of parenthood so much easier.</p>
                            <h1>Holly W.</h1>
                        </div>
                        <div className="card-home-5" data-aos='fade-down' data-aos-duration='2000' >
                            <p>Riley is such an amazing tool for managing our family life. From activity ideas, tracking feedings, and answers backed by data - Riley just plugs into my life as a parent. It’s like having a parenting assistant right at my fingertips!</p>
                            <h1>Alex G.</h1>
                        </div>
                        <div className="card-home-5" data-aos='fade-down' data-aos-duration='3000' >
                            <p>Riley is like having a best friend with a PhD in child development who remembers what's important to me and helps me effectively parent my kiddo. I can't imagine parenting without it - and the personalized guidance is amazing.</p>
                            <h1>Sebastian M.</h1>
                        </div>
                    </article>
                </article>
            </section>

            <section className="section-6">
                <article className="title-home-6" data-aos ='fade-down' data-aos-duration='2000' >
                        <h2>FAQ</h2>
                        {accordianData.map(({title , content}) => (
                            <Accordian title={title} content={content} />
                        ))}
                </article>
            </section>
          
        </main>
    </div>
  )
}

export default Home
