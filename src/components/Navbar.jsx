// Navbar.js

import React from "react";
import logo from '../assets/logo.png';
import cv from '../assets/CV.pdf';
import '../index.css';

export default function Navbar() {
    return (
        <nav className="flex justify-between px-10 py-10 bg-primary text-base">
            <img src={logo} alt="logo" className="w-5 h-5" />
            <ul className="flex">
                <li className="px-3 py-2 mr-3 text-light hover:text-secondary font-medium font-Typewriter2">
                    <a href="#about"><span className="text-secondary font-Typewriter2">01.</span> About</a>
                </li>
                <li className="px-3 py-2 mr-3 text-light hover:text-secondary font-medium font-Typewriter2">
                    <a href="#projects"><span className="text-secondary font-Typewriter2">02.</span> Projects</a>
                </li>
                <li className="px-3 py-2 mr-3 text-light hover:text-secondary font-medium font-Typewriter2">
                    <a href="#hackathons"><span className="text-secondary font-Typewriter2">03.</span> Hackathons</a>
                </li>
                <li className="px-3 py-2 mr-3 text-light hover:text-secondary font-medium font-Typewriter2">
                    <a href="#blog"><span className="text-secondary font-Typewriter2">04.</span> Blog</a>
                </li>
                <li className="px-3 py-2 mr-5 text-light hover:text-secondary font-medium font-Typewriter2">
                    <a href="#contact"><span className="text-secondary font-Typewriter2">05.</span> Contact</a>
                </li>
                <li className="-mt-0.5 px-5 py-2 border-solid border-2 border-secondary text-light font-medium font-Typewriter2">
                    <a href={cv} target="_blank" rel="noopener noreferrer">Resume</a>
                </li>
            </ul>
        </nav>
    );
}
