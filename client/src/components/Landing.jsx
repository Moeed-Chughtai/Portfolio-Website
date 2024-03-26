import React from "react";


export default function Landing() {
    return (
        <div className="mt-40 text-secondary flex justify-center">
            <div className="fixed left-20 bottom-0 h-40 border-l-2 border-lighter"></div>
            <a href="https://github.com/Moeed-Chughtai">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-github text-lighter w-6 h-6 fixed left-17 bottom-56">
                <title>GitHub</title>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            </a>
            <a href="https://www.linkedin.com/in/moeed-chughtai/">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-linkedin text-lighter w-6 h-6 fixed left-17 bottom-44">
                <title>LinkedIn</title>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
            </svg>
            </a>
            <a href="https://medium.com/@moeed.chughtai">
            </a>
            <div className="flex flex-col justify-center w-3/5">
                <p className="font-medium ml-2 font-Typewriter2">Hi, my name is</p>
                <h1 className="text-7xl my-5 mx-1 text-light font-bold">Moeed Chughtai.</h1>
                <h2 className="text-3xl my-5 mx-1 text-secondary font-bold">I shape my concepts into solutions, one line at a time.</h2>
                <p className="max-w-xl text-xl mt-5 ml-2 text-gray-300 font-medium">
                    I am a Computer Science student with a passion for coding and creating.
                    From building responsive web applications to diving into mobile app development, 
                    I'm constantly seeking new challenges and opportunities to grow.
                </p>
                <button className="w-40 text-lg p-4 mt-12 ml-2 border-solid border-2 border-secondary font-bold font-Typewriter2">
                    My projects!</button>
            </div>
            <div class="fixed -right-7.5 bottom-72 transform rotate-90 origin-center text-lighter">moeed.chughtai@outlook.com</div>
            <div className="fixed right-20 bottom-0 h-40 border-l-2 border-lighter"></div>
        </div>
    );
}
