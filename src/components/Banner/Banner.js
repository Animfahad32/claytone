import React from 'react';
import { Carousel } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import slider2 from '../../images/slider1.jpg';
import slider1 from '../../images/slider2.jpg';
import './Banner.css';


const Banner = () => {
    return (
       
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider1}
            alt="First slide"
          />
          <Carousel.Caption className="carousel-caption">
          <Fade bottom>
            <h2 className="slider-header">POTTERY <br /> MADE WITH LOVE </h2>
            <p className="slider-paragraph">A field of clay touched by the genius of man becomes a castle.</p>
            <Link to={'/allproducts'}><button className="btn slide-btn">Shop Now</button></Link>
            </Fade>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider2}
            alt="Second slide"
          />
      
          <Carousel.Caption className="text-start">
          <Fade bottom>
            <h2 className="slider-header">PORCELAIN VASES</h2>
            <p className="slider-paragraph">In touch with your heart. Let's get our hands dirty.</p>
            <Link to={'/allproducts'}><button className="btn slide-btn">Shop Now</button></Link>
            
            </Fade>
          </Carousel.Caption>
        </Carousel.Item>
       
       
      </Carousel>
      
    );
};

export default Banner;