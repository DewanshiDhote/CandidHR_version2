import Section from "./Section";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";
import gradiant_image from '../assests1/gradiant.png';
const Pricing = () => {
  return (
    <Section className=" relative z-2" id="pricing">
      <div className="absolute top-0 right-0 z-[-1]  w-1/2 h-auto">
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
      
        <Heading
          tag=""
          title="Get started with CandidHR.ai"
        />
        

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="flex justify-center mt-10">
          <a
            className="text- font-code font-bold tracking-wider uppercase border-b"
            href="/pricing"
          >
          
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
