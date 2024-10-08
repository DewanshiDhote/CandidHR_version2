import Section from "./Section";
import { BackgroundCircles } from "./design/Hero";
import { useRef } from "react";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
   <>
    <Section className="relative bg-gradient-to-b from-[#1C1132] to-[#000000] pt-20 pb-32 text-center text-white min-h-screen">
      {/* Centered Background Circles */}
    
      {/* Hero Content */}
      <div ref={parallaxRef} className="container mx-auto relative z-10">
        <div className="mb-15 mt-20">
          <a
            href="/demo"
            className=" bg-gray-800 text-white py-3 px-6 rounded-full shadow-md hover:shadow-lg"
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
          In today's fast-paced business world, time is money. HR professionals
          and hiring managers are constantly
          <br /> overwhelmed by a sea of resumes, struggling to sift through
          candidates efficiently. CandidHR.ai is here to change that.
        </p>
        <div className="absolute inset-0 z-0 flex justify-center items-center">
        <BackgroundCircles />
      </div>

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
          <div className="p-8 bg-white/20 text-black rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 text-white">
              Accelerate Recruitment Process by
            </h3>
            <p className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#7076F2] to-[#ba83ece8]">
              4x
            </p>
          </div>
          <div className="p-8 bg-white/20 text-black rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 text-white">
              Increase Hiring Efficiency by
            </h3>
            <p className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#7076F2] to-[#ba83ece8]">
              80%
            </p>
          </div>
          <div className="p-8 bg-white/20 text-black rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 text-white">
              Improve Quality Hiring by
            </h3>
            <p className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#7076F2] to-[#ba83ece8]">
              99%
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto text-center mt-40">
        {/* Heading */}
        <h2 className="text-6xl font-bold text-white mb-8 leading-normal">
          Supercharge your hiring process<br/> using{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7076F2] to-[#AEECF9]">
            CandidHR.ai
          </span>
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-16">
          {/* Card 1 */}
          <div className="bg-[#2c2f48] p-8 rounded-xl text-white shadow-md flex items-center space-x-4">
            <div>
              {/* Icon Placeholder */}
              <div className="w-16 h-16 bg-gradient-to-r from-[#7076F2] to-[#AEECF9] rounded-full flex justify-center items-center">
                {/* Add Icon SVG here */}
                <span className="text-3xl">📊</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold">AI-Powered Candidate Ranking</h3>
              <p className="text-gray-300">
                Automate resume screening and rank candidates with precision.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#2c2f48] p-8 rounded-xl text-white shadow-md flex items-center space-x-4">
            <div>
              {/* Icon Placeholder */}
              <div className="w-16 h-16 bg-gradient-to-r from-[#7076F2] to-[#AEECF9] rounded-full flex justify-center items-center">
                {/* Add Icon SVG here */}
                <span className="text-3xl">🧑‍💼</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Streamlined Personality Screening</h3>
              <p className="text-gray-300">
                Leverage video and audio interviews to evaluate personality fit.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#2c2f48] p-8 rounded-xl text-white shadow-md flex items-center space-x-4">
            <div>
              {/* Icon Placeholder */}
              <div className="w-16 h-16 bg-gradient-to-r from-[#7076F2] to-[#AEECF9] rounded-full flex justify-center items-center">
                {/* Add Icon SVG here */}
                <span className="text-3xl">📄</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Comprehensive Hiring Workflow</h3>
              <p className="text-gray-300">
                From resume parsing to technical tests, CandidHR streamlines every step.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#2c2f48] p-8 rounded-xl text-white shadow-md flex items-center space-x-4">
            <div>
              {/* Icon Placeholder */}
              <div className="w-16 h-16 bg-gradient-to-r from-[#7076F2] to-[#AEECF9] rounded-full flex justify-center items-center">
                {/* Add Icon SVG here */}
                <span className="text-3xl">⚡</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Maximized Efficiency</h3>
              <p className="text-gray-300">
                Cut manual tasks by 90%, focusing on the final interview with top candidates.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      
    </Section>

   </>
  );
};

export default Hero;
