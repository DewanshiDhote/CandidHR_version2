import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import KeyBenefits from "./components/KeyBenefits";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import Chatbot from "./components/Chatbot";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Chatbot/>
        <Hero />
        <Benefits />
        <KeyBenefits/>
        <Services />
        <Roadmap />
        <Pricing />
        <Collaboration />
       
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
