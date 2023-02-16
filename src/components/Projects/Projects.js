import React from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';
import './styleProjects.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import tatbib from '../pics/logo.png' 
import sousShoup from '../pics/SousShop.png' 
import marketPlace from '../pics/marketPlace.png' 
export default function Projects() {
    return (
      <div>
      <header className="header">
     <span className="logo">EL Hanchaoui.</span>
     <nav className="navbar">
         <Link to="/" style={{"--i": 1}}>Home</Link>
         <Link to="/about" style={{"--i": 2}}>About</Link>
         <Link to="/skills" style={{"--i": 3}}>Skills</Link>
         <Link to="" style={{"--i": 4}} className="active">Projects</Link>
         <Link to="/contact" style={{"--i": 5}}>contact</Link>
     </nav>
 </header>

 <div className="slide-container swiper"> 
 <h3>My Projects</h3>
  <div className="slide-content">
    <div className="card-wrapper swiper-wrapper"> 
 <Swiper
       modules={[Navigation, Pagination, A11y]}
       spaceBetween={60}
       slidesPerView={3}
       navigation
       pagination={{ clickable: true }}
       onSwiper={(swiper) => console.log(swiper)}
       onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide> 
        <div className="card swiper-slide">
        <div className="image-content">
          <span className="overlay" />
          <div className="card-image">
            <img src={tatbib} alt="" class="card-img"/>
          </div>
        </div>
        <div className="card-content">
          <h2 className="name">Tatbib.ma</h2>
          <p className="description">Online Appointment Scheduling web application.</p>
          <Link to="https://tatbib.vercel.app" className="button">View More</Link>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card swiper-slide">
        <div className="image-content">
          <span className="overlay" />
          <div className="card-image">
            <img src={sousShoup} alt="" class="card-img"/>
          </div>
        </div>
        <div className="card-content">
          <h2 className="name">Souss Shop</h2>
          <p className="description">This site aims to present the products of the Souss region (food, babouchs, jewelry), to make them known and to sell them.</p>
          <Link to="https://tatbib.vercel.app" className="button">View More</Link>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
         <div className="card swiper-slide">
        <div className="image-content">
          <span className="overlay" />
          <div className="card-image">
            <img src={marketPlace} alt="" class="card-img"/>
          </div>
        </div>
        <div className="card-content">
          <h2 className="name">MarketPlace</h2>
          <p className="description">E-Commerce MarketPlace website (Medical Representative).</p>
          <Link to="https://tatbib.vercel.app" className="button">View More</Link>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide> 
        <div className="card swiper-slide">
        <div className="image-content">
          <span className="overlay" />
          <div className="card-image">
            <img src={tatbib} alt="" class="card-img"/>
          </div>
        </div>
        <div className="card-content">
          <h2 className="name">Tatbib.ma</h2>
          <p className="description">Online Appointment Scheduling web application.</p>
          <Link to="https://tatbib.vercel.app" className="button">View More</Link>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
         <div className="card swiper-slide">
        <div className="image-content">
          <span className="overlay" />
          <div className="card-image">
            <img src={marketPlace} alt="" class="card-img"/>
          </div>
        </div>
        <div className="card-content">
          <h2 className="name">MarketPlace</h2>
          <p className="description">E-Commerce MarketPlace website (Medical Representative).</p>
          <Link to="https://tatbib.vercel.app" className="button">View More</Link>
        </div>
      </div>
      </SwiperSlide>
    </Swiper>
     </div>
    </div>
    </div>
</div>
)}