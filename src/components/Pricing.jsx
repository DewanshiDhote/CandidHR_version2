import Section from "./Section";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";
import gradiant_image from '../assests1/gradiant.png';
const Pricing = () => {
  return (
    <Section className=" relative z-2" id="pricing">
      <div className="absolute top-0 right-0 z-[-1]  h-auto">
      <img
        src={gradiant_image}
        alt="Gradient Background"
        className=" h-auto transform scale-x-[-1]"
      />
    </div>
    <div className="absolute bottom-0 left-0 z-[1]   h-auto">
      <img
        src={gradiant_image}
        alt="Gradient Background"
        className=" h-auto transform scale-x-[1]"
      />
    </div>
      <div className="container ">
      
        <h1 className="text-center mb-15 text-5xl font-semibold">  Get started with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7076F2] to-[#AEECF9]">CandidHR.ai</span></h1>
         
        
       
        

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

       
      </div>
    </Section>
  );
};

export default Pricing;
