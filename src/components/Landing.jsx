import React, { useState, useEffect } from "react";
import "../index.css";

export default function Landing() {
    const [showContent, setShowContent] = useState(false);
    const isSmallScreen = () => window.innerWidth < 640;

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowContent(true);
        }, 550);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className={`mt-16 sm:mt-40 text-secondary flex justify-center ${showContent ? 'opacity-100 transition-opacity duration-500' : 'opacity-0'}`}>
            {!isSmallScreen() && (
                <div className="fixed left-8 sm:left-20 bottom-0 h-40 border-l-2 border-lighter"></div>
            )}
            {!isSmallScreen() && (
                <>
                    <a href="https://github.com/Moeed-Chughtai" target="_blank" rel="noopener noreferrer" className="fixed left-5 sm:left-17 bottom-68 z-50">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-github text-lighter hover:text-secondary w-6 h-6"
                        >
                            <title>GitHub</title>
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/moeed-chughtai/" target="_blank" rel="noopener noreferrer" className="fixed left-5 sm:left-17 bottom-56 z-50">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-linkedin text-lighter hover:text-secondary w-6 h-6"
                        >
                            <title>LinkedIn</title>
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                    </a>
                    <a href="https://medium.com/@moeed.chughtai" target="_blank" rel="noopener noreferrer" className="fixed left-5 sm:left-17 bottom-44 z-50">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            fill="currentColor"
                            preserveAspectRatio="xMidYMid"
                            viewBox="0 -55 256 256"
                            className="text-lighter hover:text-secondary w-6 h-6"
                        >
                            <title>Medium</title>
                            <path d="M72.2009141,1.42108547e-14 C112.076502,1.42108547e-14 144.399375,32.5485469 144.399375,72.6964154 C144.399375,112.844284 112.074049,145.390378 72.2009141,145.390378 C32.327779,145.390378 0,112.844284 0,72.6964154 C0,32.5485469 32.325326,1.42108547e-14 72.2009141,1.42108547e-14 Z M187.500628,4.25836743 C207.438422,4.25836743 223.601085,34.8960455 223.601085,72.6964154 L223.603538,72.6964154 C223.603538,110.486973 207.440875,141.134463 187.503081,141.134463 C167.565287,141.134463 151.402624,110.486973 151.402624,72.6964154 C151.402624,34.9058574 167.562834,4.25836743 187.500628,4.25836743 Z M243.303393,11.3867175 C250.314,11.3867175 256,38.835526 256,72.6964154 C256,106.547493 250.316453,134.006113 243.303393,134.006113 C236.290333,134.006113 230.609239,106.554852 230.609239,72.6964154 C230.609239,38.837979 236.292786,11.3867175 243.303393,11.3867175 Z"></path>
                        </svg>
                    </a>
                </>
            )}
            <div className="md:block hidden">
                <a href="mailto:moeed.chughtai@outlook.com">
                    <div className="fixed -right-7.5 bottom-72 transform rotate-90 origin-center text-lighter hover:text-secondary z-50">
                        moeed.chughtai@outlook.com
                    </div>
                </a>
            </div>
            <div className="flex flex-col justify-center w-4/5 sm:w-3/5">
                <p className="font-medium ml-2 font-Typewriter2">Hi, my name is</p>
                <h1 className="text-7xl my-5 mx-1 text-light font-bold">Moeed Chughtai.</h1>
                <h2 className="text-2xl sm:text-3xl my-5 mx-1 text-secondary font-bold">I like to bring ideas to life through coding.</h2>
                <p className="sm:max-w-xl sm:text-xl mt-5 ml-2 text-gray-300 font-medium">
                    I'm a Computer Science student passionate about coding and creating. 
                    From building web and mobile applications to developing machine learning models, I love integrating AI into my projects. 
                    As a hackathon enthusiast, I’m always seeking new challenges and opportunities to grow.
                </p>
                <a href="#projects">
                    <button className="w-40 text-lg p-4 mt-12 ml-2 border-solid border-2 border-secondary font-bold font-Typewriter2">
                        My projects!
                    </button>
                </a>
            </div>
            {!isSmallScreen() && (
                <div className="fixed right-20 bottom-0 h-40 border-l-2 border-lighter md:block hidden"></div>
            )}
            {isSmallScreen() && (
                <>
                    <div className="absolute right-8 bottom-0 h-20 border-l-2 border-lighter z-10"></div>
                    <a href="https://github.com/Moeed-Chughtai" target="_blank" rel="noopener noreferrer" className="absolute right-6 bottom-48 z-50">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-github text-lighter hover:text-secondary w-6 h-6"
                        >
                            <title>GitHub</title>
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/moeed-chughtai/" target="_blank" rel="noopener noreferrer" className="absolute right-6 bottom-36 z-50">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-linkedin text-lighter hover:text-secondary w-6 h-6"
                        >
                            <title>LinkedIn</title>
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                    </a>
                    <a href="https://medium.com/@moeed.chughtai" target="_blank" rel="noopener noreferrer" className="absolute right-6 bottom-24 z-50">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            fill="currentColor"
                            preserveAspectRatio="xMidYMid"
                            viewBox="0 -55 256 256"
                            className="text-lighter hover:text-secondary w-6 h-6"
                        >
                            <title>Medium</title>
                            <path d="M72.2009141,1.42108547e-14 C112.076502,1.42108547e-14 144.399375,32.5485469 144.399375,72.6964154 C144.399375,112.844284 112.074049,145.390378 72.2009141,145.390378 C32.327779,145.390378 0,112.844284 0,72.6964154 C0,32.5485469 32.325326,1.42108547e-14 72.2009141,1.42108547e-14 Z M187.500628,4.25836743 C207.438422,4.25836743 223.601085,34.8960455 223.601085,72.6964154 L223.603538,72.6964154 C223.603538,110.486973 207.440875,141.134463 187.503081,141.134463 C167.565287,141.134463 151.402624,110.486973 151.402624,72.6964154 C151.402624,34.9058574 167.562834,4.25836743 187.500628,4.25836743 Z M243.303393,11.3867175 C250.314,11.3867175 256,38.835526 256,72.6964154 C256,106.547493 250.316453,134.006113 243.303393,134.006113 C236.290333,134.006113 230.609239,106.554852 230.609239,72.6964154 C230.609239,38.837979 236.292786,11.3867175 243.303393,11.3867175 Z"></path>
                        </svg>
                    </a>
                </>
            )}
        </div>
    );
}
