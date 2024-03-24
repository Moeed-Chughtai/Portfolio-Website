import React from "react";
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';
import medium from '../assets/medium.svg';

export default function Landing() {
    return (
        <div className="mt-40 ml-96 text-secondary">
            <div className="fixed left-40 bottom-0 h-40 border-l-2 border-secondary"></div>
            <a href="https://medium.com/@moeed.chughtai">
                <img src={medium} alt="Medium-Logo" className="w-10 h-10 my-3 fixed left-36 bottom-40 fill-light" />
            </a>
            <a href="https://www.linkedin.com/in/moeed-chughtai/">
                <img src={linkedin} alt="Linkedin-Logo" className="w-8 h-8 my-8 fixed left-36 bottom-48 fill-light" />
            </a>
            <a href="https://github.com/Moeed-Chughtai">
                <img src={github} alt="Github-Logo" className="w-8 h-8 my-10 fixed left-36 bottom-56" />
            </a>

            <p className="font-medium ml-2">Hi, my name is</p>
            <h1 className="text-7xl my-5 mx-1 text-light font-bold">Moeed Chughtai.</h1>
            <h2 className="text-6xl my-5 mx-1 text-light font-bold">I build things for the web.</h2>
            <p className="max-w-2xl text-lg mt-10 ml-2 text-light font-medium">
                I am a Computer Science student at the University of Manchester interested in software development.
                I enjoy working on projects related to web and mobile development with machine learning aspects.
                In my free time I like to attend hackathons and write blog posts about my experiences.
            </p>
            <button className="text-lg p-4 mt-12 ml-2 border-solid border-2 border-secondary font-bold">
                My projects!</button>
        </div>
    );
}
