import React from 'react';
import {motion} from 'framer-motion'
import Header from '../components/Header';
import About from './About';
import { Link } from 'react-router-dom';
import  "../components/Homepage.css"
import  myimage from "C:/Users/ASAMOAH GREGORY/Desktop/project2/src/images/ibescard.jpg"
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from './Contact';


const Homepage=()=>{
  
    return(
      <div className='homepage-container'>
        <Header/>

        <div id='first-section'>
          <div id='first-section-item-one' >
            <br /> <br /> <br /> <br />
           <h1> Hey, I am  <i style={{color:"rgb(252, 47, 200)"}} > Asamoah Gregory Kwaku</i> </h1>
           <h1>I am Fullstack software engineer </h1>
           <h1> My location is Accra, Ghana </h1>
          </div>
          <div id='first-section-item-two' >
           <img src={myimage} id='personal-picture' alt="personal pic" />  
          </div>
        </div>
        <div id='second-section' >
        <About/>
          </div> 
         
       <Skills/>
       <Projects/>
       <Contact/>
      </div>
    )                                     

}
export default Homepage
