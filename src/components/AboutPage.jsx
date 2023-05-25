import React, { useRef, useState, useEffect} from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useFadeInTransition, useSlideInRight, useSlideInLeft} from './Animations';

import '../stylesheets/aboutpage.css';

import AuthorImage from '../assets/images/anthony-manzione-portrait.jpg';
import AuthorImageMin from '../assets/images/anthony-manzione-portrait-min.jpg';

export default function AboutPage() {
  const fadeIn = useRef(null);
  const slideInRight = useRef(null);
  const slideInLeft = useRef(null);

  useFadeInTransition(fadeIn, { duration: 1}); // Fade in with custom options
  useSlideInRight(slideInRight, { duration: 10}); // Slide in from the right with custom options
  useSlideInLeft(slideInLeft, { duration: 1}); // Slide in from the right with custom options


  return (
    <section id="about">
    <br/><br/><br/><br/>
      <div className="flex-column align-items-sm-center">
        <h1 className="title text-center" ref={slideInLeft}>ABOUT</h1>
        <h5 className="underline" ref={slideInRight}></h5>
      </div>
      <div className='container' ref={fadeIn}>
        <div className="d-flex flex-row justify-content-around align-items-lg-center flex-wrap">
          <div className="col-lg-4">
            <LazyLoadImage
              id='author'
              src={AuthorImage}
              placeholderSrc={AuthorImageMin}
              alt="An image of the Author Anthony Manzione"
              effect="blur"
            />
          </div>
          <div class="col-lg-6">
            <div class="container">
              <h2 class="text-center">What I do</h2>
              <hr/>
              <ul>
                <li>Full Stack Web Development</li>
                <br/>
                <li>Front End Web Design</li>
                <br/>
                <li>Back End Solutions</li>
                <br/>
                <li>Software Development</li>
              </ul>
              <hr/>
              <p className="bio-shmed">
                Hi, my name is Anthony and I am a full stack web developer. I have a passion for building applications and solving problems using the latest technologies and best practices. When I'm not coding, you can find me rock climbing or enjoying the great outdoors.
              </p>
              <br/>
            </div>
          </div>
        </div>
      </div> 
      <br/>
    </section> 
  )
}
