import React from 'react';
import Section from './Section';
import Heading from './Heading';
import { socials } from '../constants';

const About = () => {
  return (
    <Section id="about">
      <div className="container">
        <Heading tag="About" title="Who am i ?" />
        <div className="relative">
          <div className="relative z-1 text-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[35rem]">
            <p className="mb-8">
              I'm a full stack web developer with over 2 years of experience
              with a focus on frontend. Based in Brazil,
              <br /> I'm always ready to take on new challenges and look forward
              to bringing my skills to new projects.
            </p>
            <p>
              Graduated in Systems Analysis and Development, I have a strong
              background on building web application <br /> following the best
              practices with JavaScript, Node.js, PHP and TypeScript.
            </p>
            <Heading title="Any opportunity ?" className="mt-15" />

            <p>attos.souza18@gmai.com</p>

            <ul className="flex justify-center  mt-7 gap-5 flex-wrap">
              {socials.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
                >
                  <img
                    src={item.iconUrl}
                    width={16}
                    height={16}
                    alt={item.title}
                  />
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
