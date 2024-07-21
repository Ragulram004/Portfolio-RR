import { useState, useEffect, useRef } from 'react';
import Section from "./Section";
import Heading from "./Heading";
import { benefits } from "../constants";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import { FreeMode, Mousewheel, Pagination } from 'swiper/modules';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Projects = () => {
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
      className={`pt-[4rem] `}
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="projects"
    >
      <div ref={ref}>
        <motion.div variants={textVariant()} initial="hidden" animate={isInView ? "show" : "hidden"}>
          <div className="relative z-10 lg:mt-20 xl:mt-20 mb-20 lg:mb-0 xl:mb-0 lg:block">
            <h5 className="tagline mb-6 text-center text-n-1/50">
              PROJECT GALLERY
            </h5>
          </div>
        </motion.div>
        <div className="container lg:mt-[10rem] xl:mt-[7rem] z-2">
          <motion.div variants={textVariant()} initial="hidden" animate={isInView ? "show" : "hidden"}>
            <Heading className={"absolute max-x-md -mt-[1.70rem] lg:-mt-[2.25rem] xl:-mt-[2.25rem] lg:max-w-2xl"} title="PROJECTS" />
          </motion.div>
          <div className="flex items-center justify-center flex-col">
            <Swiper
              breakpoints={{
                435: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                1025: {
                  slidesPerView: 3,
                }
              }}
              freeMode={true}
              pagination={{ clickable: true }}
              mousewheel={true}
              style={{
                "--swiper-pagination-color": "#F0DB4F",
                "--swiper-pagination-bullet-inactive-color": "#2f2f2f",
                "--swiper-pagination-bullet-inactive-opacity": "1",
                "--swiper-pagination-bullet-size": "8px",
                "--swiper-pagination-bullet-horizontal-gap": "2px"
              }}
              modules={[FreeMode, Pagination, Mousewheel]}
              className="max-w-[100%] lg:max-w-[90%]"
            >
              {benefits.map((item, index) => (
                <SwiperSlide key={item.id}>
                  <motion.div
                    variants={fadeIn("up", "spring", index * 0.2, 0.75)}
                    initial="hidden"
                    animate={isInView ? "show" : "hidden"}
                    className="flex flex-col mb-15 group relative shadow-lg xl:w-[22rem] p-0.5 bg-[length:100%_100%] xl:rounded-tl-[30px] rounded-tl-[27px] rounded-tr-[55px] xl:rounded-tr-[70px] mr-2 hover:cursor-grab active:cursor-grabbing"
                    style={{
                      backgroundImage: `url(${item.backgroundUrl})`,
                      backdropFilter: 'blur(3px)'
                    }}
                  >
                    <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                      <h5 className="h5 mb-5">{item.title}</h5>
                      <p className="body-2 mb-6 text-n-3">{item.text}</p>
                      <div className="flex items-center mt-auto">
                        <img 
                          src={item.iconUrl} 
                          width={30}
                          height={40}
                          alt={item.title}
                        />
                        <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">Explore</p>
                        <Arrow/>
                      </div>
                    </div>
                    {item.light && <GradientLight/>}
                    <ClipPath/>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
