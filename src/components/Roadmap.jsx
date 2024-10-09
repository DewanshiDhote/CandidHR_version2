import Heading from "./Heading";
import Section from "./Section";

import { roadmap } from "../constants";
import { grid } from "../assets";
import { Gradient } from "./design/Roadmap";
import gradiant_image from "../assests1/gradiant.png";

const Roadmap = () => (
  <Section className="overflow-hidden relative z-0" id="roadmap">
    <div className="absolute top-0 right-0 z-[-1] w-1/3  h-auto">
      <img
        src={gradiant_image}
        alt="Gradient Background"
        className="w-full h-auto transform scale-x-[-1]"
      />
    </div>
    <div className="container md:pb-10 font-semibold ">
      <Heading  title=" Our Key Features" />

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {roadmap.map((item) => {
          return (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                item.colorful
                  ? "bg-gradient-to-b from-[#7076F2] to-[#ba83ece8]"
                  : "bg-n-6"
              }`}
              key={item.id}
            >
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 max-w-full">
                  <img
                    className="w-full"
                    src={grid}
                    width={550}
                    height={550}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1">
                  <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20"></div>

                  <div className="mb-10 -my-10 -mx-15">
                    <img
                      className="w-40 ml-32"
                      src={item.imageUrl}
                      alt={item.title}
                    />
                  </div>
                  <h4 className="h4 mb-4">{item.title}</h4>
                  <p className="body-2 text-n-4">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}

        <Gradient />
        <div className="flex justify-center mt-12 md:mt-15 ">
          <a
            href="/demo"
            className="bg-gradient-to-r from-[#5459b9] to-[#AEECF9] text-black py-3 px-6 rounded-full shadow-md hover:shadow-lg"
          >
            Request Demo
          </a>
        </div>
      </div>
    </div>
  </Section>
);

export default Roadmap;
