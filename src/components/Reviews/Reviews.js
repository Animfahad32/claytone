import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import reviewbg from '../../images/review-bg.jpg';
import './Reviews.css';
const Reviews = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://animfahad32.github.io/fakeData/reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <>

        <div className="container mt-5">
            <h1 className="headers-title">Testimonials</h1>
        </div>
        <Carousel>

       {
           reviews.map(review =>
            <Carousel.Item key={review.id} className="slider-h">
                  <img
              className="d-block w-100"
              src={reviewbg}
              alt="First slide"
            />
            <Carousel.Caption className="carousel-caption">
            <Fade bottom>
              <h2 className="slider-header">{review?.name} </h2>
               <p className="slider-paragraph"><i className="fas fa-quote-left q-color"></i> {review?.text} <i className="fas fa-quote-right q-color"></i></p> 
              
              </Fade>
            </Carousel.Caption>
          </Carousel.Item>
            
            
            )
       }

       
       
       
       
      </Carousel>
      </>
    );
};

export default Reviews;