import React from 'react'
import { Link } from 'react-router-dom';
import './styleMe.css'
import pic from '../pics/me.png' 
export default function Me() {


    return (
    <div>
         <header className="header">
        <span className="logo">EL Hanchaoui.</span>
        <nav className="navbar">
            <Link to="/" style={{"--i": 1}} className="active">Home</Link>
            <Link to="/about" style={{"--i": 2}}>About</Link>
            <Link to="/skills" style={{"--i": 3}}>Skills</Link>
            <Link to="/projects" style={{"--i": 4}}>Projects</Link>
            <Link to="/contact" style={{"--i": 5}}>contact</Link>
        </nav>
    </header>
     <section className="home">
     <div className="home-content">
       <h3>Hello, It's Me</h3>
       <h1>EL Hanchaoui Taoufiq</h1>
       <h3>And I'm a <span>Frontend Developer</span></h3>
       <p>This is my official portfolio website to showes all details and work exiprins web development</p>
       <div className="social-media">
         <a href="https://www.facebook.com/TaouFiq.ELHaNCHaOUI/" style={{"--i": 6}}><i className="bx bxl-facebook" /></a>
         <a href="https://twitter.com/TElhanchaoui" style={{"--i": 7}}><i className="bx bxl-twitter" /></a>
         <a href="https://www.linkedin.com/in/taoufiq-elhanchaoui" style={{"--i": 8}}><i className="bx bxl-linkedin" /></a>
         <a href="https://github.com/taoufiqq" style={{"--i": 9}}><i className="bx bxl-github" /></a>
       </div>
       <Link to={require("../files/CV.pdf")} downloadl target='_blank' className="btnDownloadCv">Hire Me</Link>
     </div>
     <div className="home-img">
       <img src={pic} alt="" />
     </div>
   </section>
   </div>
     );
}