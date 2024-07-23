import { useState,useRef } from "react";
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser';
import { slideIn } from "../utils/motion";
import Section from "./Section";
import Heading from "./Heading";


const Contact = () => {
  const formRef = useRef();
  const[form,setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    
  }
  const handleSubmit = (e) => {

  }

  return (
    <Section
      className={`pt-[4rem]`}
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="contact"
    >
      <div className="relative z-10 lg:mt-20 xl:mt-20 mb-20 lg:mb-0 xl:mb-0 lg:block">
        <h5 className="tagline mb-6 text-center text-n-1/50">
          GET IN TOUCH
        </h5>
      </div>
      <div className="container relative z-2">
        <Heading className={" mad:max-x-md lg:max-w-2xl"} title="CONTACT"/>
      </div>

      <div
      className={`xl:mt-12  xl:flex-row flex-col-reverse gap-10 overflow-hidden
        flex-[0.75] bg-black-100 rounded-2xl p-5 xl:w-1/2 md:w-1/2 lg:w-1/2 mx-auto
        `}
      >
          
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className='mt-12 flex flex-col gap-8'
            >
              <label className='flex flex-col'>
                <span className='text-n-1 font-medium mb-4'>Name</span>
                <input
                  type='text'
                  name='name'
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your good name?"
                  className='bg-n-6 py-4 px-6 placeholder:text-n-4 text-n-1 rounded-lg outline-none border-none font-medium'
                />
              </label>
              <label className='flex flex-col'>
                <span className='text-n-1 font-medium mb-4'>Email-ID</span>
                <input
                  type='email'
                  name='email'
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your web address?"
                  className='bg-n-6 py-4 px-6 placeholder:text-n-4 text-n-1 rounded-lg outline-none border-none font-medium'
                />
              </label>
              <label className='flex flex-col'>
                <span className='text-n-1 font-medium mb-4'>Message</span>
                <textarea
                  rows={5}
                  name='message'
                  value={form.message}
                  onChange={handleChange}
                  placeholder='What you want to say?'
                  className='bg-n-6 py-4 px-6 placeholder:text-n-4 text-n-1 rounded-lg outline-none border-none font-medium'
                />
              </label>

              <button
                type='submit'
                className='bg-n-6 py-3 px-8 rounded-xl outline-none w-fit text-n-1 font-bold shadow-md shadow-primary mx-auto'
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
      </div>      
    </Section>
  )
}

export default Contact
