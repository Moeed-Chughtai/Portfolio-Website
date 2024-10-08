import React, { useState } from "react";
import "../index.css";

export default function HackathonCard(props) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === props.images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? props.images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="flex sm:flex-row flex-col bg-gray-900 rounded-lg shadow-lg mt-10 p-6 w-full transition duration-300 ease-in-out transform hover:scale-105 relative mb-8">
            <div className="relative flex flex-col w-full mr-5 mb-6">
                {props.images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Project ${index}`}
                        className={`absolute rounded-lg overflow-hidden border-2 border-gray-700 transition duration-300 ease-in-out ${
                            index === currentImageIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                        } ${index === currentImageIndex ? 'rotate-0 scale-100' : 'rotate-3 scale-105'}`}
                        style={{ 
                            maxWidth: '100%', 
                            maxHeight: '100%', 
                            width: 'auto', 
                            height: 'auto',
                            position: 'absolute',
                            left: '50%',
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                        }}
                    />
                ))}
                <button
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-gray-300 hover:text-gray-400 transition duration-300 ease-in-out p-2 rounded-full z-10"
                    onClick={prevImage}
                >
                    &lt;
                </button>
                <button
                    className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-gray-800 text-gray-300 hover:text-gray-400 transition duration-300 ease-in-out p-2 rounded-full z-10"
                    onClick={nextImage}
                >
                    &gt;
                </button>
            </div>
            <div className="flex flex-col w-full">
                <div className="flex justify-between mb-4">
                    <h2 className="text-3xl text-light font-semibold transition duration-300 ease-in-out transform hover:text-secondary font-Typewriter2">{props.title}</h2>
                    <a href={props.link} target="_blank" className="flex items-center text-gray-300 transition duration-300 ease-in-out transform hover:scale-105 hover:text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github w-6 h-6">
                            <title>GitHub</title>
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                    </a>
                </div>
                <p className="text-lg text-gray-300 mb-6">{props.description}</p>
                <div className="flex items-center mb-6">
                    <ul className="flex flex-wrap">
                        {props.technologies.map((tech, index) => (
                            <li key={index} className="bg-gray-800 text-gray-300 text-sm px-2 py-1 rounded-full mr-2 mb-2 transition duration-300 ease-in-out transform hover:bg-secondary hover:text-black font-medium">{tech}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
