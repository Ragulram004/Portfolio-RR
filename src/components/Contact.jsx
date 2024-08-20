import { useState, useRef, useEffect } from "react";
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { slideIn, fadeIn ,textVariant } from "../utils/motion";
import Section from "./Section";
import Heading from "./Heading";
import { socials } from "../constants";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, { threshold: 0.1 });

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send('service_ux6pr78', 'template_lcdwsmq',
      {
        from_name: form.name,
        to_name: 'Ragulram',
        from_email: form.email,
        to_email: 'ragulram0427@gmail.com',
        message: form.message
      },
      'D7g4pcZUNWKlYKbr1'
    )
      .then(() => {
        setLoading(false);
        alert('Thanks for your time. I’ll catch up with you soon.');
        setForm({
          name: '',
          email: '',
          message: ''
        });
      }, (error) => {
        setLoading(false);
        console.log(error);
        alert('Oops, something didn’t work as expected.');
      });
  };

  return (
    <Section
      className={`pt-[4rem] pb-[2rem] `}
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="contact"
    >
      <div ref={contactRef}>
        <motion.div
          variants={textVariant()}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="relative z-10 lg:mt-20 xl:mt-20 mb-20 lg:mb-0 xl:mb-0 lg:block"
        >
          <h5 className="tagline mb-6 text-center text-n-1/50">
            GET IN TOUCH
          </h5>
        </motion.div>
        <div className="container relative ">
          <motion.div
            variants={fadeIn("up", "spring", 0.3, 0.75)}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            <Heading className={" mad:max-x-md lg:max-w-2xl"} title="CONTACT" />
          </motion.div>
        </div>

        <motion.div
          className={` xl:flex-row flex-col-reverse gap-10 overflow-hidden flex-[0.75] bg-black-100 -mt-[3.5rem] md:-mt-[4rem] lg:-mt-[4.5rem]  xl:-mt-[4.7rem] xl:w-1/2 md:w-[74%] lg:w-[57%] mx-auto backdrop-blur-[2px] xl:backdrop-blur-[3px]`}
          variants={slideIn('up', 'spring', 0.5, 1)}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          <form
            autoComplete="off"
            ref={formRef}
            onSubmit={handleSubmit}
            className='flex flex-col gap-5 rounded-sm border-2 border-n-4 p-5'
          >
            <label className='flex flex-col'>
              <span className='body-2 mb-2'>Name</span>
              <input
                required
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className='bg-transparent py-4 px-6 placeholder:text-n-4 body-2  outline-none border-b-2 rounded-sm focus:border-color-2 font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='body-2 mb-2'>Email-ID</span>
              <input
                required
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email-id?"
                className='bg-transparent py-4 px-6 placeholder:text-n-4 body-2  outline-none border-b-2 rounded-sm focus:border-color-2 font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='body-2 mb-2'>Message</span>
              <textarea
                required
                rows={3}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder="What's your message to me?"
                className='bg-transparent py-4 px-6 placeholder:text-n-4 body-2  outline-none border-b-2 rounded-sm focus:border-color-2 font-medium'
              />
            </label>

            <button
              type='submit'
              className='body-2 bg-color-1 py-3 px-8 rounded-xl outline-none w-fit text-n-7 font-bold shadow-md shadow-primary mx-auto'
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
        <motion.div
          className="xl:absolute lg:absolute md:absolute bottom-[10rem] xl:left-2 lg:left-0 md:-left-3 z-1"
          variants={slideIn('left', 'spring', 0.7, 1)}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          <ul className="flex justify-center mt-[5rem] md:flex-col lg:flex-col xl:flex-col ">
            {socials.map(({ iconUrl, id, title, url }) => (
              <li className="p-5" key={id}>
                <a
                  href={url}
                  target="_blank"
                  className="cursor-pointer"
                >
                  <img
                    src={iconUrl}
                    width={24}
                    height={25}
                    alt={title}
                  />
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div
          className="relative z-10 md:mt-20 lg:mt-20 xl:mt-20 lg:block"
          variants={textVariant()}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          <h5 className="mb-6 text-center text-n-1/50">
            RAGULRAM &copy; {new Date().getFullYear()}
          </h5>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;
