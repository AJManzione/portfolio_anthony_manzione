import React, { useState } from 'react';
import { AdvancedImage, lazyload } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/base';
import { useAnimationOnScroll } from './Animations';

import '../stylesheets/aboutpage.css';

const cld = new Cloudinary({
  cloud: {
    cloudName: 'depgzk2o2'
  },
  url: {
    secure: true
  },
});

export default function AboutPage() {
  const refSlideInRight = useAnimationOnScroll('slideInRight');
  const refSlideInLeft = useAnimationOnScroll('slideInLeft');
  const refFadeIn = useAnimationOnScroll('fadeIn');
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <section id="about">
    <br/><br/><br/><br/>
      <div className="flex-column align-items-sm-center">
        <h1 className="title text-center" ref={refSlideInRight}>ABOUT</h1>
        <h5 className="underline" ref={refSlideInLeft}></h5>
      </div>
      <div className='container'>
        <div className="d-flex flex-row justify-content-around align-items-lg-center flex-wrap">
          <div className="col-lg-4">
            <div className='author-image-container'>
              {loaded ? (
                <AdvancedImage
                  cldImg={cld.image('profile-pic-highest_uwkqnn')}
                  plugins={[lazyload()]}
                  alt=""
                  class='author' 
                />
              ) : (
                <AdvancedImage
                  cldImg={cld.image('profile-pic-lowest_qsnwew')}
                  alt=""
                  class="author"
                  onLoad={handleLoad}
                  plugins={[lazyload({ 
                  })]}
                />
              )}
            </div>
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
