import  { useState } from 'react';

export default function SubscribeCard() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
    } else {
      setError('');
      alert('Email submitted successfully!');
    }
  };

  return (
    <div className="flex justify-center items-center relative x-0 mt-24 w-full p-20 pb-40">
      <div className="w-full max-w-2xl bg-gradient-to-br from-[#101327] via-[#1E2140] to-[#2D325A] p-8 rounded-2xl shadow-lg text-center ">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 pt-2">
          Join Us on Our Journey!
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 ">
          Contact Us for More Information
        </p>
        <form onSubmit={validateEmail} className="flex flex-col md:flex-row items-center justify-center">
          <div className="relative w-full md:w-auto flex-1 mb-4 md:mb-5 ">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full py-3 px-5 rounded-full bg-[#262B4D] text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7E72FF] focus:border-transparent transition-all duration-300"
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
          <button
            type="submit"
            className="mb-5 md:ml-4 w-full md:w-auto px-8 py-3 text-sm md:text-base font-semibold text-black rounded-full  bg-gradient-to-r from-[#5459b9] to-[#AEECF9] hover:text-white transition-all duration-300"
          >
            Start Now
          </button>
        </form>
      </div>
    </div>
  );
}
