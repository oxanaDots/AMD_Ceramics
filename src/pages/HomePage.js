

import PageNav from "../components/PageNav"
import {useState, useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'; 
import { HashLink } from "react-router-hash-link";
import styles from './Homepage.module.css'
import Question from './Question'
import Footer from '../components/Footer'

const logos =[
    {
        companyName: "Amazon",
        path: "https://img.icons8.com/color/300/amazon-music--v3.png"
    },

    {
        companyName: "Air BnB",
        path: "https://img.icons8.com/color/300/airbnb.png"
    },
    {
        companyName: "Google",
        path: "https://img.icons8.com/color/300/google-groups--v2.png"
    },
    {
        companyName: "Nikon",
        path: "https://img.icons8.com/color/300/nikon.png"
    },
    {
        companyName: "Google",
        path: "https://img.icons8.com/color/240/zigbee.png"

    }
]

const questions =
[
    {
        question: 'Is there a charge for surveys or receiving a bathroom renovation quote?',
        answer: 'Absolutely not. All surveys and bathroom renovation quotes are provided completely free of charge and without any obligation. We believe in offering transparent and upfront services to assist you in making an informed decision with ease.'
    },

    {
        question: 'How long does a typical bathroom installation project take?',
        answer: 'A standard bathroom installation project usually takes between 10 and 12 working days. This timeframe allows us to ensure meticulous attention to detail and high-quality workmanship, while also respecting your schedule and convenience.'
    },

    {
        question: 'Are your bathroom installations covered by a warranty?',
        answer: 'Indeed, we stand firmly behind the quality of our craftsmanship. Each bathroom installation we undertake is backed by a 24-month craftsmanship warranty. This warranty is our commitment to you, ensuring that our work meets the highest standards of quality and durability.'
    },

    {
        question: 'Do you have insurance coverage for your bathroom installation services?',
        answer: 'Yes, we prioritize the safety and assurance of our clients in all our services. Our company is fully insured, holding a £10 million public liability insurance. This ensures that both our clients and our work are comprehensively protected throughout the installation process.'
    }

]

function HomePage(){

    const companyLogos = logos;

    const textRef = useRef(null)
    const heroRef = useRef(null)
    const paragraphRef = useRef(null)
    const descTextRef = useRef(null)
   
 
   


    useEffect(() =>{
      const timer = setTimeout(() => {
      
          textRef.current.classList.add('active');
          heroRef.current.classList.add('active');
          paragraphRef.current.classList.add('active');
          descTextRef.current.classList.add('active')
   
      }, 1000);
  
      return () => clearTimeout(timer);
    }, [])



    return(

       <div className={styles.cont}>
        
<header className={styles.header}>

<PageNav/>
      <div className='hero-cont' ref={heroRef}>
      
  <div className='hero' >
    <div className='text-cont' ref={textRef}>
  <h2>Welcome to <span style={{color: '#47484a', opacity: '0.8'}}>AMD Ceramics</span></h2>
  </div>
    <p  ref={paragraphRef}>London based tiling company, dedicated to our craft</p>
    </div>
  <p ref={descTextRef}>At AMD Ceramics, we specialize in expert tiling solutions that breathe new life into your home or office. Whether you're revamping your kitchen, bathroom, or adding a touch of elegance to your entryway, our professional tilers are equipped to handle all your needs.</p>
   
      </div>

      </header>
     <section className={styles.flexCol}>
        <div className={styles.textCont}>
      <h1>Our Clients</h1>
      <p>We have been working for one of the most prestigious clients in the construction industry </p>
<div className={styles.logosCont}>
{companyLogos.map(logo => <img  className={styles.logo} key={logo.companyName} src={logo.path}/>)}
</div>
      </div>
     </section>

     <section className={styles.sectionTwo}>
        <div className={styles.textCol}>
       <h2>
      Transform any room with high-quality tiling that reflects your style and meets your functional needs.
       </h2>
       <p>
       Unsure of your requirements or where to begin? Use our <strong>Tile Calculator</strong> to easily determine the total area you need to tile and get an approximate quote for our services.
       </p>

       <HashLink smooth to="/services#quote" >
                      <button>Get a Quote</button>
                 </HashLink>

     

        <div className={styles.imageCont}>
        <img src="images/Single-illustr.png"/>

        </div>
    
        </div>
       
     </section>

     <section id="Q%26A" className={styles.sectionThree}> 
<h2>Common Queries</h2>
     <div className={styles.qCont}>
       <Question questions={questions}/>
     </div>
     </section>
     <Footer/>
      </div>

     
    )
  }

  export default HomePage