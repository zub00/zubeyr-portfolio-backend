import React, { useState } from 'react';
import axios from 'axios';

const ContactMePage: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Send POST request to backend endpoint
      const response = await axios.post("http://localhost:3001/api/contacts", {
        fullName,
        email,
      });
      console.log(response.data); // handle success
      alert("Message sent successfully!");
      // Clear the form fields after successful submission
      setFullName("");
      setEmail("");
    } catch (error) {
      console.error(error); // handle error
      alert("Failed to send message.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-custom-light-gradient dark:bg-custom-dark-gradient">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-4xl w-full flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 w-full mb-8 md:mb-0 md:pr-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-200 mb-6 text-center md:text-left">Contact Me</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"
                placeholder="Your Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="text-center md:text-left">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="md:w-1/2 w-full flex flex-col items-center md:items-start md:pl-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-200 mb-4 text-center md:text-left">Find me on</h2>
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex flex-col items-center md:items-start">
              <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="GitHub" className="mb-2"/>
              <a
                href="https://github.com/zub00"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                GitHub
              </a>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="LinkedIn" className="mb-2"/>
              <a
                href="https://linkedin.com/in/zub00"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMePage;
