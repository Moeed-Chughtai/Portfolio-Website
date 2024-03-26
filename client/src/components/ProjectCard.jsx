import React from "react";

export default function ProjectCard() {
    return (
        <div className="flex bg-gray-900 rounded-lg shadow-lg mt-10 p-6 w-full transition duration-300 ease-in-out transform hover:scale-105">
            <div className="flex flex-col w-full">
                <h2 className="text-3xl text-light font-semibold mb-4 transition duration-300 ease-in-out transform hover:text-secondary font-Typewriter2">Project Name</h2>
                <p className="text-lg text-gray-300 mb-6 max-w-2xl">As the sunlight filtered through the dense canopy, dappling the forest floor with a mosaic of light and shadow, the tranquility of the woods enveloped every sense. Birds chirped melodiously overhead, their songs intermingling with the rustle of leaves in the gentle breeze. A faint scent of earth and moss hung in the air, invoking a sense of timeless serenity. In this secluded corner of the wilderness, far removed from the hustle and bustle of modern life, one could truly lose themselves in the beauty of nature's embrace.</p>
                <div className="flex items-center mb-6">
                    <ul className="flex flex-wrap">
                        <li className="bg-gray-800 text-gray-300 text-sm px-2 py-1 rounded-full mr-2 mb-2 transition duration-300 ease-in-out transform hover:bg-secondary hover:text-black font-medium">React</li>
                        <li className="bg-gray-800 text-gray-300 text-sm px-2 py-1 rounded-full mr-2 mb-2 transition duration-300 ease-in-out transform hover:bg-secondary hover:text-black font-medium">Tailwind CSS</li>
                        <li className="bg-gray-800 text-gray-300 text-sm px-2 py-1 rounded-full mr-2 mb-2 transition duration-300 ease-in-out transform hover:bg-secondary hover:text-black font-medium">GitHub</li>
                    </ul>
                </div>
                <a href="https://github.com/Moeed-Chughtai" className="flex items-center text-gray-300 hover:text-gray-400 transition duration-300 ease-in-out transform hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github w-8 h-8 mr-2">
                        <title>GitHub</title>
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                </a>
            </div>
            <img src="https://via.placeholder.com/150" alt="Project" className="ml-6 rounded-lg overflow-hidden border-2 border-gray-700 transition duration-300 ease-in-out transform hover:rotate-3 hover:scale-105 hover:border-gray-400" />
        </div>
    );
}
