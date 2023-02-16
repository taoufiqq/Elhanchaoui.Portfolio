import React from 'react'
import { Link } from 'react-router-dom';
import './styleSkills.css'
export default function Skills() {
    return (
      <div>
      <header className="header">
     <span className="logo">EL Hanchaoui.</span>
     <nav className="navbar">
         <Link to="/" style={{"--i": 1}}>Home</Link>
         <Link to="/about" style={{"--i": 2}}>About</Link>
         <Link to="" style={{"--i": 3}} className="active">Skills</Link>
         <Link to="/projects" style={{"--i": 4}}>Projects</Link>
         <Link to="/contact" style={{"--i": 5}}>contact</Link>
     </nav>
 </header>
  <section className="home">
  <div className="home-content" style={{width:'50%'}}>
  <h1><span>My Skills</span></h1>
  <h3><span>What i know</span></h3>
    <p>Here is a list of the skills i have mastered with a percentage for each skill.
     Thanks to active pedagogy, I can learn any programming language and adapt to it in real time.</p>
    </div>
    <div className="home-img" style={{width:'45%'}}>
  <div className="bars">
    <div className="info">
      <span>ReactJs</span>
      <span>80%</span>
    </div>
    <div className="line react" />
  </div>
  <div className="bars">
    <div className="info">
      <span>VueJs</span>
      <span>70%</span>
    </div>
    <div className="line vue" />
  </div>
  <div className="bars">
    <div className="info">
      <span>NuxtJs</span>
      <span>60%               
      </span></div>
    <div className="line nuxt" />
  </div>
  <div className="bars">
    <div className="info">
      <span>NextJs</span>
      <span>50%</span>              
    </div>
    <div className="line next" />
  </div>
  <div className="bars">
    <div className="info">
      <span>JavaScript</span>
      <span>80%</span>                   
    </div>
    <div className="line javascript" />
  </div>
</div>
</section>
</div>
    )}