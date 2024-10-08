import Section from "./Section";
import { BackgroundCircles } from "./design/Hero";
import { useRef } from "react";


// import bgImage from "../images/Group.png";
import ellipse from "../images/Ellipse 8.png";
import svg_image from "../images/Group.svg";
import Statistics from "./Statistics";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section className="relative py-10 lg:py-16 xl:py-20 pt-20 pb-32 text-center text-white min-h-screen z-0">
      {/* Background Image */}
      <div
        style={{
          backgroundImage: `url(${svg_image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top center",
         
          height:"75%", // Fallback color if image isn't applied
        }}
        className="absolute inset-0 z-0" // Ensure this div is behind all other content
      ></div>

      {/* Background Circles positioned here, behind content */}
      <div className="absolute inset-0 z-10 flex justify-center items-center">
        <BackgroundCircles />
      </div>

      {/* Ellipse Image positioned in the right corner */}
      <div className="absolute top-0 right-0 z-[-1]  h-auto rotate-180">
                    <img
                        src={ellipse}
                        alt="Gradient Background"
                        className="w-full h-auto transform scale-x-[-1]"
                    />
                </div>

      <div className="absolute top-0 -left-[10rem] w-[56.625rem] h-[5.625rem] rotate-180  ">
      <img
        className="absolute  left-1/2 w-[79.5625rem] max-w-[79.5625rem] h-[88.5625rem] -translate-x-1/2 -translate-y-1/2"
        src={ellipse}
        width={1417}
        height={1417}
        alt="Gradient"
      />
    </div>

      {/* Hero Content */}
      <div ref={parallaxRef} className="container mx-auto relative z-20">
        <div className="mb-15 mt-10">
          <a
            href="/demo"
            className="bg-gray-800 text-white py-3 px-6 rounded-full shadow-md hover:shadow-lg"
          >
            Welcome to
          </a>
        </div>
        <h1 className="text-8xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#7076F2] to-[#AEECF9]">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7076F2] to-[#AEECF9]">
            CandidHR.ai
          </span>
        </h1>

        <p className="text-5xl mb-8 font-semibold">
          Revolutionizing the Hiring Process
        </p>
        <p className="text-gray-300 mb-10 text-lg">
          In todays fast-paced business world, time is money. HR professionals
          and hiring managers are constantly
          <br /> overwhelmed by a sea of resumes, struggling to sift through
          candidates efficiently. CandidHR.ai is here to change that.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center space-x-6 mb-16">
          <a
            href="/demo"
            className="bg-gradient-to-r from-[#5459b9] to-[#AEECF9] text-white py-3 px-6 rounded-full shadow-md hover:shadow-lg"
          >
            Request Demo
          </a>
          <a
            href="/contact"
            className="border border-blue-500 text-white py-3 px-6 rounded-full hover:bg-blue-500"
          >
            Contact Us
          </a>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-8 bg-white/10 text-black rounded-2xl shadow-md">
            <h3 className="text-xl font-bold mb-2 text-white">
              Accelerate Recruitment Process by
            </h3>
            <p className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#7076F2] to-[#ba83ece8]">
              4x
            </p>
          </div>
          <div className="p-8 bg-white/10 text-black rounded-2xl shadow-md">
            <h3 className="text-xl font-bold mb-2 text-white">
              Increase Hiring Efficiency by
            </h3>
            <p className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#7076F2] to-[#ba83ece8]">
              80%
            </p>
          </div>
          <div className="p-8 bg-white/10 text-black rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-2 text-white">
              Improve Quality Hiring by
            </h3>
            <p className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#7076F2] to-[#ba83ece8]">
              99%
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto text-center mt-72">
      <Statistics/>
        
      </div>
     
      {/* Bottom Line */}
    </Section>
  );
};

export default Hero;
