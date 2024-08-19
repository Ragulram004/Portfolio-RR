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
import { motion, useSpring } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Projects = () => {

  const [img, setImg] = useState({
    src: "",
    alt: "",
    opacity: 0,
    x: 0,
    y: 0,
  });

  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  };

  const imagePos = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  };

  const handleMove = (e) => {
    const { clientX, clientY } = e;
    imagePos.x.set(clientX + 10);
    imagePos.y.set(clientY + 10);
  };

  const handleMouseEnter = (item) => {
    setImg({
      src: item.img,
      alt: item.label,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setImg((prevImg) => ({
      ...prevImg,
      opacity: 0,
    }));
  };

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
          <div className="relative  lg:mt-20 xl:mt-20 mb-20 lg:mb-0 xl:mb-0 lg:block ">
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
              onMouseMove={handleMove}
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
                    className="flex flex-col mb-15 group relative shadow-lg xl:w-[22rem] p-0.5 bg-[length:100%_100%] xl:rounded-tl-[30px] rounded-tl-[27px] rounded-tr-[55px] xl:rounded-tr-[70px] mr-2 z-1000"
                    style={{
                      backgroundImage: `url(${item.backgroundUrl})`,
                      backdropFilter: 'blur(3px)'
                    }}
                    onMouseEnter={() => handleMouseEnter(item)}
                    onMouseLeave={handleMouseLeave}
                    onMouseMove={handleMove}
                  >
                    <div className="relative z-10 flex flex-col min-h-[22rem] p-[2.4rem]">
                      <h5 className="h5 mb-5">{item.title}</h5>
                      <p className="body-2 mb-6 text-n-3">{item.text}</p>
                      <div className="flex items-center mt-auto">
                        <a href={item.url} target='_blank' className="cursor-pointer ">
                          <img 
                            src={item.iconUrl} 
                            width={30}
                            height={40}
                            alt={item.title}
                          />
                        </a>
                        <a href={item.url2} target='_blank' className='flex items-center ml-auto'>
                          <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">Explore</p>
                          <Arrow/>
                        </a>
                      </div>
                    </div>
                    {item.light && <GradientLight/>}
                    <ClipPath/>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
            <motion.img
              src={img.src}
              alt={img.alt}
              className="hidden lg:block absolute w-[25%] rounded-lg object-cover object-center pointer-events-none transition-opacity duration-200 ease-in-out"
              style={{
                top: imagePos.y,
                left: imagePos.x,
                opacity: img.opacity,
                transform: 'translate(-30%, -110%)',
                zIndex:1,
              }}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
