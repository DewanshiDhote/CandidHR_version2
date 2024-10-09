
import { FaBuilding, FaUsers, FaUniversity } from 'react-icons/fa'; // Importing icons from react-icons

const KeyBenefits = () => {
  const benefits = [
    {
      icon: <FaBuilding className="text-6xl text-purple-500" />, // Icon for Corporate Acquisition Teams
      heading: 'Corporate Acquisition Teams',
      subheading: 'Helping companies acquire top talent efficiently.',
    },
    {
      icon: <FaUsers className="text-6xl text-blue-500" />, // Icon for Hiring Agencies
      heading: 'Hiring Agencies',
      subheading: 'Streamlining the hiring process with effective solutions.',
    },
    {
      icon: <FaUniversity className="text-6xl text-purple-500" />, // Icon for Colleges & Universities
      heading: 'Colleges & Universities',
      subheading: 'Connecting students with industry opportunities.',
    },
  ];

  return (
    <section className=" py-16">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-5xl font-semibold  text-center  mb-20 text-white">Who can benefit from us?</h2>

        <div className="flex flex-wrap justify-center gap-10">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="w-80  p-6 rounded-lg shadow-lg text-center flex flex-col items-center"
            >
              {/* Icon */}
              <div className="mb-4">{benefit.icon}</div>

              {/* Heading */}
              <h3 className="text-2xl font-semibold text-white mb-2">{benefit.heading}</h3>

              {/* Subheading */}
              <p className="text-gray-200 mt-3">{benefit.subheading}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;
