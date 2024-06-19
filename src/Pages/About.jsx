import React from 'react';
import  "C:/Users/ASAMOAH GREGORY/Desktop/project2/src/components/About.css"
import image2 from "C:/Users/ASAMOAH GREGORY/Desktop/project2/src/images/domenico-loia-hGV2TfOh0ns-unsplash(2).jpg"

const About=()=>{
    return(
        <div id='about-container'>
            <div id='about-grid-container' >
             
              <div>
                <img src={image2} id='second-image' alt="" />
              </div>


            <div>
                <p style={{color:"white"}} >
                  My passion for solving problems is what led me to software engineering industry. As a guy who saw the impact technology was 
                  creating in the lives. During the last five years i have served on a number of roles in the sector. I started as a parttime and freelancer.
                  Arduino and robotics are one of my loving bits of technology and i teach students to also master that skills.76nmhj450 
              </p>
              <p style={{color:"white"}}>
                  When am not coding, you will normally see me reading books about history, business, time management and other fields of interest.              </p>
              </div>
              
            </div>
          

        </div>
    )
}
export default About