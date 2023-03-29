import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";


import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { email1 } from "../assets";

const Contact = () => {
  const ref = useRef()
  const [success,setSuccess] = useState(null)
  
  const handelSubmit =e=>{
      e.preventDefault() 
  
      emailjs.sendForm('service_ujyvzpl', 'template_1bhc9kt', ref.current, 'sN8bAzmhBfFV6Zd_G')
        .then((result) => {
            console.log(result.text);
            setSuccess(true)
        }, (error) => {
            console.log(error.text);
            setSuccess(false)
        });
  
  }
  
  

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] mt-auto mb-auto items-start'
      >
        <div className="ml-12">
        <h3 className='text-white  md:text-[70px] sm:text-[50px] xs:text-[40px] text-[30px] font-bold font-serif'>Let's Chat</h3>
        <p className='text-[#915EFF]  md:text-[40px] sm:text-[50px] xs:text-[40px] text-[30px] font-serif mb-0 pb-0'>Tell Me About Your</p>
        <p className='text-[#915EFF]  md:text-[40px] sm:text-[50px] xs:text-[40px] text-[30px] font-serif mt-0 pt-0 mb-4'>Project.</p>
        <p className="text-[#dfd9ff] font-medium lg:text-[21px] sm:text-[18px] xs:text-[19px] text-[16px] lg:leading-[25px] font-serif mt-0 pb-8">Let's Build Something together✌️✌️.</p>
        </div>
        <div className='flex py-6  bg-black-100 p-8 rounded-2xl  shadow-mail1 mr-32 ml-8 mt-4 mb-4'>
        <div className="pr-2"><img src={ email1 } className='h-24 w-24  ' /></div>
        
        <div>
        <h3 className='text-white  md:text-[45px] sm:text-[50px] xs:text-[40px] text-[30px] font-mono'>Mail me at</h3>
        <p className="text-[#dfd9ff] font-medium lg:text-[18px] sm:text-[18px] xs:text-[19px] text-[16px] lg:leading-[25px] font-mono mt-0">azaharul.rashid2000@gmail.com.</p>
        </div>
        
        </div>
        
      </motion.div>

      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl items-end shadow-mail mr-16 mt-4 mb-4'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={ref}
          onSubmit={handelSubmit}
          className='mt-6 flex flex-col gap-4'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            Send
          </button>
          {success &&
                    "Your message has been sent. We'll get back to you soon ❤️"}
        </form>
      </motion.div>

      
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

