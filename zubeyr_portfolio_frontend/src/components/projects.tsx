import React from 'react';

const Projects: React.FC = () => {
  return (
    <div className="p-8 bg-custom-light-gradient dark:bg-custom-dark-gradient min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-200">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">exe website opener</h2>
            <p className="text-gray-700 dark:text-gray-300">A tool that allows you to open websites directly from an executable file.</p>
            <a
              href="https://github.com/zub00/exe-website-opener"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              View on GitHub
            </a>
          </div>
          {/* Project 2 */}
          <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Rock Paper Scissors Game</h2>
            <p className="text-gray-700 dark:text-gray-300">A simple rock paper scissors game that you can play in the terminal.</p>
            <a
              href="https://github.com/zub00/Rock-paper-scissors-game"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              View on GitHub
            </a>
          </div>
          {/* Project 3 */}
          <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Project 3</h2>
            <p className="text-gray-700 dark:text-gray-300">Description of Project 3</p>
          </div>
          {/* Add more project components as needed */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
