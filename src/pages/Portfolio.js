import React from 'react';

import ImagesSlider from "../components/ImagesSlider"
import Footer from "../components/Footer"
import PageNav from "../components/PageNav"
import styles from './Portfolio.module.css'

function Portfolio(){
    
    return(
<section className={styles.sectionOne}>
    <PageNav/>
 <div className={styles.sliderCont}>
    {/* <h2>Check out our work</h2> */}
    <ImagesSlider/>
 </div>
 <Footer/>
</section>
    )
}


export default Portfolio