import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import image4 from "../images/image4.png";

const Statistics = () => {
  return (
    <section className="max-w-7xl mx-auto mt-16" >
      {/* Heading */}
      <div>
        <h1 className="text-5xl mb-8 font-semibold leading-snug">
          Supercharge your hiring process
          <br />
          using{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7076F2] to-[#AEECF9]">
            CandidHR.ai
          </span>
        </h1>
      </div>

      {/* First Row with Margin on Left and Right */}
      <div className="flex space-x-8 mb-8 mx-4 lg:mx-8 mt-16">
        {/* Box 1 (less width) */}
        <div className="bg-[#2c2f48] p-6 rounded-xl text-white shadow-md flex items-center space-x-4 w-1/3 h-40">
          <div className="text-left flex-grow">
            <h3 className="text-xl font-semibold">AI-Powered Candidate Ranking</h3>
            <p className="text-gray-300">
              Automate resume screening and rank candidates with precision.
            </p>
          </div>
          <div className="flex-shrink-0 w-16 h-16">
            <img src={image1} alt="Image 1" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>

        {/* Box 2 (more width) */}
        <div className="bg-[#2c2f48] p-6 rounded-xl text-white shadow-md flex items-center space-x-4 w-2/3 h-40">
          <div className="text-left flex-grow">
            <h3 className="text-xl font-semibold">Streamlined<br/> Personality Screening</h3>
            <p className="text-gray-300">
              Leverage video and audio interviews to evaluate personality fit.
            </p>
          </div>
          <div className="flex-shrink-0 w-80 h-24">
            <img src={image2} alt="Image 2" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
      </div>

      {/* Second Row with Margin on Left and Right */}
      <div className="flex space-x-8 mx-4 lg:mx-8">
        {/* Box 3 (more width) */}
        <div className="bg-[#2c2f48] p-6 rounded-xl text-white shadow-md flex items-center space-x-4 w-2/3 h-40">
          <div className="flex-shrink-0 w-24 h-24">
            <img src={image3} alt="Image 3" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="flex-grow text-right">
            <h3 className="text-xl font-semibold">Comprehensive Hiring Workflow</h3>
            <p className="text-gray-300">
              From resume parsing to technical tests, CandidHR streamlines every step.
            </p>
          </div>
        </div>

        {/* Box 4 (less width) */}
        <div className="bg-[#2c2f48] p-6 rounded-xl text-white shadow-md flex items-center space-x-24 w-2/3 h-40">
          <div className="flex-shrink-0 w-16 h-16">
            <img src={image4} alt="Image 4" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="flex-grow text-right">
            <h3 className="text-xl font-semibold">Maximized Efficiency</h3>
            <p className="text-gray-300">
              Cut manual tasks by 90%, focusing on the final interview with top candidates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
