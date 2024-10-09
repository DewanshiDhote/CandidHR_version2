import { } from "../assets";
import { collabApps, collabContent } from "../constants";

import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import about_logo from '../assests1/about_logo.png';
import gradiant_image from '../assests1/gradiant.png';

const Collaboration = () => {
  return (
    <Section crosses id='collaboration ' className='relative z-0'>
      <div className="absolute  left-0 z-[1] w-1/2 h-auto">
      <img
        src={gradiant_image}
        alt="Gradient Background"
        className=" h-auto transform scale-x-[1]"
      />
    </div>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8 font-semibold ">
          About Diacto and<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7076F2] to-[#AEECF9]"> CandidHR.ai</span> 

          </h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                
                {item.text1 && (
                  <p className="body-2 mt-3 text-n-4">{item.text1}</p>
                )}
                <div className="flex items-center p-5">
                  <div className="text-3xl">{item.title}</div>
        
                  
                </div>
                
                {item.text2 && (
                  <p className="body-2 mt-3 text-n-4">{item.text2}</p>
                )}

                
                
              </li>
              
            ))}
          </ul>

          <a
            href="/demo"
            className="bg-gradient-to-r from-[#5459b9] to-[#AEECF9] text-black py-3 px-6 rounded-full shadow-md hover:shadow-lg"
          >
           Try it now
          </a>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">
         

          
         
              
                
                  <img className="opacity-50"
                    src={about_logo}
                    width={450}
                    height={200}
                    alt="brainwave"
                  />
               
              
           

            

            <LeftCurve />
            <RightCurve />
          
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
