import React from 'react';
import Section from './Section';
import { curve } from '../assets';
import Button from './Button';
import { BackgroundCircles, BottomLine, Gradient } from './design/Hero';
import { ScrollParallax } from 'react-just-parallax';

const Hero = () => {
  const parallaxRef = React.useRef(null);

  return (
    <Section
      className="pt-[15rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Hi, I'm <span className="text-color-1">Atos Souza</span> <br />a
            Full Stack {` `}
            <span className="inline-block relative ">Developer </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Web development is not just a profession, <br /> it’s a passion for
            many software developers.
          </p>
          <Button href="https://github.com/AttosSouza" white target="_blank">
            GitHub
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
