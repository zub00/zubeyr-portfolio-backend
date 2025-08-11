import React from 'react';

const Hobbies: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-custom-light-gradient dark:bg-custom-dark-gradient py-16">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-200 mb-6 text-center">Hobbies</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        In my free time, I enjoy engaging in various hobbies that enrich my life. Skating is one of my favourite things to do, as it allows me to experience the thrill of speed and the freedom of movement. Music holds a special place in my heart, it’s always been something i’ve found peace in and i want to even get into writing too. Reading philosophy is another one of  my hobbies, i’ve always had a thirst for knowledge and things like that just never fail to captivate me.        </p>
      </div>
    </div>
  );
};

export default Hobbies;
