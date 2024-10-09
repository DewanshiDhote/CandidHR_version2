import { useState } from 'react';
import { FaRobot } from 'react-icons/fa';
import { IoIosArrowDown } from "react-icons/io";

const Chatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false); 
  const [showHelpMessage, setShowHelpMessage] = useState(true); 

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen); 
    setShowHelpMessage(false); 
  };

  return (
    <div>
      {/* Help Message */}
      {showHelpMessage && !isChatOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '110px',
            right: '25px',
            backgroundColor: '#ffffff', 
            color: '#273b97', 
            padding: '15px 30px',
            borderRadius: '10px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            zIndex: 1002,
          }}
        >
          Hi, How can I help you?
        </div>
      )}

     
      <div
        onClick={toggleChat}
        style={{
          position: 'fixed',
          bottom: '10px',
          right: '20px',
          backgroundColor: '#273b97', 
          borderRadius: '50%',
          width: '80px',
          height: '80px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          zIndex: 1001, 
        }}
      >
        {isChatOpen ? (
          <IoIosArrowDown color="white" size="40px" /> 
        ) : (
          <FaRobot color="white" size="40px" /> 
        )}
      </div>

      
      {isChatOpen && (
        <div style={{ position: 'fixed', bottom: '90px', right: '20px', zIndex: 1000 }}>
          <iframe
            title="Fastbots Chatbot"
            src="https://app.fastbots.ai/embed/cm1onkoqy1lhcr4bixw7c0upw"
            style={{
              width: '400px',
              height: '600px',
              border: 'none',
              borderRadius: '10px',
            }}
            allow="microphone; camera"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
