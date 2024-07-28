import React, { useState, useEffect, useRef } from 'react';
import Section from './Section';
import { collabApps, collabContent } from '../constants';
import { rrlogo, check } from "../assets";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from "../utils/motion";
import Heading from './Heading';

const Skills = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, { threshold: 0.1 });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <Section
      className={`pt-[4rem]`}
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="skills"
    >
      <div ref={ref}>
        <motion.div variants={textVariant()} initial="hidden" animate={isInView ? "show" : "hidden"}>
          <div className="relative z-10 lg:mt-20 xl:mt-20 mb-20 lg:mb-0 xl:mb-0 lg:block">
            <h5 className="tagline mb-6 text-center text-n-1/50">
              EXPERTISE
            </h5>
          </div>
        </motion.div>

        <div className='container lg:flex mt-[5rem]'>
          <div className='max-w-[25rem]'>
            <motion.div variants={textVariant()} initial="hidden" animate={isInView ? "show" : "hidden"}>
              <Heading className={'h1 mb-4 md:mb-8'} title={"SKILLS"}/>
            </motion.div>
            <ul className='max-w-[22rem] mb-10 md:mb-14'>
              {collabContent.map((item) => (
                <motion.li 
                  className='mb-3 py-3' 
                  key={item.id}
                  variants={fadeIn("up", "spring", 0.3, 0.75)}
                  initial="hidden"
                  animate={isInView ? "show" : "hidden"}
                >
                  <div className='flex items-center'>
                    <img src={check} width={24} height={24} alt="check" />
                    <h6 className='body-2 ml-5'>{item.title}</h6>
                  </div>
                  {item.text && (<p className='body-2 ml-5 text-n-4'>{item.text}</p>)}
                </motion.li>
              ))}
            </ul>
          </div>
          <motion.div
            variants={fadeIn("right", "spring")}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            <div className='lg:ml-auto xl:w-[38rem] mt-4'>
              <div className='relative left-1/2 lg:left-full xl:left-full flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100'>
                <div className='flex w-60 aspect-square m-auto border border-n-6 rounded-full'>
                  <div className='w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full'>
                    <div className='flex items-center justify-center w-full h-full bg-n-8 rounded-full'>
                      <img
                        className='rounded-md'
                        src={rrlogo}
                        width={48}
                        height={48}
                        alt="RR"
                      />
                    </div>
                  </div>
                </div>
                <ul>
                  {collabApps.map((app, index) => (
                    <motion.li
                      key={app.id}
                      className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${index * 45}`}
                      animate={{ rotate:360 }}
                      transition={{
                        repeat: Infinity,
                        duration: 15,
                        ease: 'linear',
                        delay: index * 1.5 // Staggered animation for each icon
                      }}
                    >
                      <div className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border-n-1/15 rounded-xl`}>
                        <img
                          src={app.icon}
                          width={app.width}
                          height={app.height}
                          className='m-auto'
                          alt={app.title}
                        />
                      </div>
                    </motion.li>
                  ))}
                </ul>
                <LeftCurve />
                <RightCurve />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
