import React from 'react'
import { Link } from 'react-router-dom';
import { Tooltip as ReactTooltip } from 'react-tooltip'
import pic from '../pics/me.png' 
import 'react-tooltip/dist/react-tooltip.css'
import './styleContact.css'
export default function Contact() {


    return (
    <div>
         <header className="header">
        <span className="logo">EL Hanchaoui.</span>
        <nav className="navbar">
            <Link to="/" style={{"--i": 1}}>Home</Link>
            <Link to="/about" style={{"--i": 2}}>About</Link>
            <Link to="/skills" style={{"--i": 3}}>Skills</Link>
            <Link to="/projects" style={{"--i": 4}}>Projects</Link>
            <Link to="" style={{"--i": 5}} className="active">contact</Link>
        </nav>
    </header>
     <section className="home">
     <div className="home-content">

       <h1>Say Hello</h1>
    
       <p>These are the site where you can contact me</p>
       <div className="social-media">
         <a href="#" style={{"--i": 6}} id="my-element" data-tooltip-content="0616774152" className='social-conact'><i class='bx bx-phone'></i></a>
         <ReactTooltip anchorId="my-element" />
         <a href="https://www.linkedin.com/in/taoufiq-elhanchaoui" style={{"--i": 8}} className='social-conact'><i className="bx bxl-linkedin" /></a>
         <a href="#" style={{"--i": 9}} id="my-2-element" data-tooltip-content="t.elhanchaoui@gmail.com" className='social-conact'><i class='bx bxl-gmail' ></i></a>
         <ReactTooltip anchorId="my-2-element" />
       </div>
     </div>
     <div className="home-img">
       <img src={pic} alt="" />
     </div>
   </section>
   </div>
     );
}