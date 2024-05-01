import React from "react";
import Link from 'next/link'
import DataCard from '@/utils/data/projects-data'
 import Image from "Next/Image"
function Projects() {
  return (
    <div>
      <div
        id="projects"
        className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
      >
        <div className="flex justify-center my-5 lg:py-8">
          <div className="flex  items-center">
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
              Projects
            </span>
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          </div>
        </div>
      </div>
      <div  >
        <div className="  mx-auto ">
           
          <div className="grid grid-cols-1   rounded-lg md:grid-cols-2 lg:grid-cols-2  md:gap-10 gap-4 lg:gap-16 md:mx-4 mx-0 lg:mx-8">
            {DataCard.map((item) => (
              <div key={item.id}>
                {/* <div className="bg-[#161a2f] rounded-lg shadow-md  " style={{borderRadius:'15px'}}>
                  <div className="relative  ">
                   <Image src={item.image} alt="not shows"   />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">
                      {item.heading}
                    </h3>
                    <p className=" ">{item.detail}</p>
                    <div className="mt-4 flex justify-between">
                      <Link href={item.demo} target="_blank" rel="noopener noreferrer" className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded-md">
                          Live Demo
                        
                      </Link>
                      <Link href={item.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 underline">Source Code 
                      </Link>
                    </div>
                  </div>
                </div> */}

                

<div className="w-full max-w-sm   border   rounded-lg shadow  bg-gray-800  border-gray-700">
    <a href="#">
        <Image className="p-8 rounded-t-lg" src={item.image} alt="product image" />
    </a>
    <div className="px-5 pb-5">
        <a href="#">
            <h5 className="text-xl font-semibold tracking-tight    text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
        </a>
         
        <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
        </div>
    </div>
</div>

              </div>
            ))}
          </div>




          
        </div>
      </div>

    </div>
  );
}

export default Projects;
