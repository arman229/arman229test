'use client';
import { useEffect,useRef } from "react";

import { personalData } from "@/utils/data/personaldata";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import { FaEnvelope  } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

function HeroSection() {
  const typewriterRef = useRef(null);
  useEffect(() => {
    const interval = setInterval(() => {
      if (typewriterRef.current) {
        typewriterRef.current
          .typeString("Frontend Developer.")
          .pauseFor(1000)
          .deleteAll()
          .typeString("Backend Developer.")
          .pauseFor(1000)
          .deleteAll()
          .typeString("Nextjs Developer.")
          .pauseFor(1000)
          .deleteAll()
          .typeString("Fastapi Developer.")
          .pauseFor(1000)
          .deleteAll()
          .typeString("Python Developer.")
          .pauseFor(1000)
          .deleteAll()
          .start();
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
<div>


<div className="hero-section flex flex-col items-start justify-center   text-white   h-[80vh]">
  <h1 className="text-2xl font-bold leading-10 text-[#16f2b3] md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
  <span className="text-red-400">Hi</span>
   <Typewriter
    onInit={(typewriter) => {
      typewriter.typeString("I'm ARMAN .").start();
    }}
  />
 
  </h1>
   <h1 className="text-2xl font-bold leading-10 text-white md:font-bold lg:text-[2.6rem] lg:leading-[3.5rem]">
  <Typewriter
            options={{ loop: true }}
            onInit={(typewriter) => {
              typewriterRef.current = typewriter;
            }}
          />
          </h1>
          <div className="my-8 flex items-center gap-5">
            <Link
              href={'https://github.com/arman229'}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsGithub size={30} />
            </Link>
            <Link
              href={'https://www.linkedin.com/in/arman-ashraf-427951219/' }
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsLinkedin size={30} />
            </Link>
            <Link
            href="mailto:armanashraf015@gmail.com"
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaEnvelope  size={30} />
            </Link>
            
            
          </div>
          <div className="flex items-center gap-3">
            <Link href="#contact" className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold" role="button" 
             href="https://drive.google.com/file/d/1gjWzOAU1iF9N70VuBfU1kM-7b1JlCEpp/view?usp=sharing"
             download="Arman_Resume_16-10-2023-21-15-52.pdf"
             target="_blank">
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>
</div>


 
    </div>
  );
};

export default HeroSection;