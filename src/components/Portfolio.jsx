import React, { useRef, useState, useEffect} from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useFadeInTransition, useSlideInRight, useSlideInLeft} from './Animations';

import '../stylesheets/portfolio.css'

export default function Portfolio() {
  const fadeIn = useRef(null);
  const slideInRight = useRef(null);
  const slideInLeft = useRef(null);


  useFadeInTransition(fadeIn); // Fade in with custom options
  useSlideInRight(slideInRight); // Slide in from the right with custom options
  useSlideInLeft(slideInLeft); // Slide in from the right with custom options


  return (
      <section id="portfolio">
      <br/><br/><br/><br/>
        <div className="flex-column align-items-sm-center">
          <h1 className="text-center title" ref={slideInLeft}>PROJECTS</h1>
          <h5 className="underline" ref={slideInRight}></h5>
        </div>
        <div className="container mt-5" ref={fadeIn}>
          <div className="row">
            <div className="d-flex justify-content-center mb-4"> 
              <h4 className="redbox">Full-Stack</h4>
            </div>

            <div className="col-lg-4">
              <figure class="effect-portfolio">
                <div class="image-overlay">
                  <img className='movies' src="https://raw.githubusercontent.com/AJManzione/mjmanz_port_assets/master/anthony/gifs/port-one.gif" alt="the designer's first portfolio piece of a website that uses the Disney API and OMDB API"/>
                  <div class="caption">
                    <h1>MICKEY N FRIENDS FINDER</h1>
                  </div>
                </div>
                <figcaption>
                  <div class="slide-in">
                    <p>Search any Disney character</p>
                    <p>See all Movies and TV shows they appear in</p>
                    <p>Learn more about that TV show or Movie</p>
                  </div>
                </figcaption>			
              </figure>
            </div>


            <div className="col-lg-4">
              <figure class="effect-portfolio">
                <div class="image-overlay">
                  <img className='movies' src="https://raw.githubusercontent.com/AJManzione/mjmanz_port_assets/master/anthony/gifs/port-two.gif" alt="the designer's second portfolio piece of a website that creates wish lists and registry's"/>
                  <div class="caption">
                    <h1>WISH LIST</h1>
                  </div>
                </div>
                <figcaption>
                  <div class="slide-in">
                    <p>Login and Create an Acount</p>
                    <p>Create Wish Lists and Registry's</p>
                    <p>Add, Edit, Remove Items, Budget, and Share!</p>
                  </div>
                </figcaption>			
              </figure>
            </div>


            <div className="col-lg-4">
              <figure class="effect-portfolio">
                <div class="image-overlay">
                  <img className='movies' src="https://raw.githubusercontent.com/AJManzione/mjmanz_port_assets/master/anthony/gifs/port-three.gif" alt="the designer's second portfolio piece of a website that creates wish lists and registry's"/>
                  <div class="caption">
                    <h1>POKEDEX TRACKER</h1>
                  </div>
                </div>
                <figcaption>
                  <div class="slide-in">
                    <p>Login and Create an Acount</p>
                    <p>Keep Track of Your Pokedex</p>
                    <p>Customize Sprites, Earn Badges!</p>
                  </div>
                </figcaption>			
              </figure>
            </div>
            <br/><br/><br/><br/><br/><br/>


{/*             <div class="reveal mt-5">
              <div class="d-flex justify-content-center mb-4 "> 
                <h4 class="redbox">Command-Line-Apps</h4>
              </div>
              <div class="d-flex flex-row justify-content-center flex-wrap">
                <div class="col-lg-4 m-3">
                  <img class="movies" id="cliOne" src="-----X" alt="A command line application gif."></img>
                </div>
                <div class="col-lg-4 m-3">
                  <img id="cliTwo" class="movies" src="-----X" alt="a command line application gif."></img>
                </div>
              </div>
            </div> */}

            
          </div>
        </div>
      </section>
  )
}
