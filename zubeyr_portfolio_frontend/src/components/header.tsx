import React from 'react';
import profile from '../images/Profile.png'
interface HeaderProps {
  scrollToContactMe: () => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToContactMe }) => {
  return (
    <div className="bg-custom-light-gradient dark:bg-custom-dark-gradient min-h-screen flex flex-col items-center justify-center text-center pt-16">
      <img
        src= {profile} // Replace with your profile photo URL
        alt="Profile"
        className="w60 h-60 rounded-full shadow-lg mb-6 "
      />
      <h1 className="text-5xl font-extrabold text-gray-900 dark:text-gray-200 mb-4 drop-shadow-lg">
        Welcome to My Portfolio
      </h1>
      <p className="text-xl text-gray-700 dark:text-gray-400 mb-8 max-w-md mx-auto drop-shadow-lg">
        I'm a 20 Year old Software Developer passionate about crafting amazing web applications.
      </p>
      <button
        onClick={scrollToContactMe}
        className="bg-gray-200 dark:bg-gray-700 text-purple-600 dark:text-gray-200 font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-purple-600 dark:hover:bg-gray-800 hover:text-white transition duration-300"
      >
        Contact Me
      </button>
    </div>
  );
};

export default Header;


