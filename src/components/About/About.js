import React from 'react'
import { Link } from 'react-router-dom';
import './styleAbout.css'
import pic from '../pics/pic1.png' 
export default function About() {

    return (
      <div>
      <header className="header">
     <span className="logo">EL Hanchaoui.</span>
     <nav className="navbar">
         <Link to="/" style={{"--i": 1}}>Home</Link>
         <Link to="/about" style={{"--i": 2}} className="active">About</Link>
         <Link to="/skills" style={{"--i": 3}}>Skills</Link>
         <Link to="/projects" style={{"--i": 4}}>Projects</Link>
         <Link to="/contact" style={{"--i": 5}}>contact</Link>
     </nav>
 </header>
  <section className="home">
  <div className="home-content">
  <h1><span>About Me</span></h1>
    <h3><span>who i am</span> </h3>
    <p>Hello, I'm a EL HANCHAOUI Taoufiq and i am a web & mobile developer.
      I can provide clean code and pixel perfect design. 
      I also make the website more & more interactive with web animations.
      A responsive design makes your website accessible to all users, regardless of thier device.</p>
      <Link to={require("../files/CV.pdf")} downloadl className="btnDownloadCv">Download CV</Link>
    </div>
    <div className="home-img">
    <img src={pic} alt="" />
  </div>
</section>
</div>
)}