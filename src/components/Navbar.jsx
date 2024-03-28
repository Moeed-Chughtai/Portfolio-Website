import React, { useState } from "react";
import logo from '../assets/logo.png';
import cv from '../assets/CV.pdf';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="flex justify-between px-10 py-10 bg-primary text-base">
            <img src={logo} alt="logo" className="w-5 h-5" />
            <div className="block lg:hidden">
                <button onClick={toggleMenu} className="text-white focus:outline-none">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </button>
            </div>
            <ul className={`flex-col lg:flex lg:flex-row lg:items-center ${isOpen ? 'block' : 'hidden'}`}>
                <li className="px-3 py-2 mr-3 text-light hover:text-secondary font-medium font-Typewriter2">
                    <a href="#about"><span className="text-secondary">01.</span> About</a>
                </li>
                <li className="px-3 py-2 mr-3 text-light hover:text-secondary font-medium font-Typewriter2">
                    <a href="#projects"><span className="text-secondary">02.</span> Projects</a>
                </li>
                <li className="px-3 py-2 mr-3 text-light hover:text-secondary font-medium font-Typewriter2">
                    <a href="#hackathons"><span className="text-secondary">03.</span> Hackathons</a>
                </li>
                <li className="px-3 py-2 mr-3 text-light hover:text-secondary font-medium font-Typewriter2">
                    <a href="#blog"><span className="text-secondary">04.</span> Blog</a>
                </li>
                <li className="px-3 py-2 mr-3 text-light hover:text-secondary font-medium font-Typewriter2">
                    <a href="#contact"><span className="text-secondary">05.</span> Contact</a>
                </li>
                <li className={`px-3 py-2 mr-3 text-light hover:text-secondary font-medium font-Typewriter2 ${isOpen ? '' : 'border-solid border-2 border-secondary'}`}>
                    <a href={cv} target="_blank" rel="noopener noreferrer">{isOpen ? <span className="text-secondary">06.</span> : null} Resume</a>
                </li>
            </ul>
        </nav>
    );
}
