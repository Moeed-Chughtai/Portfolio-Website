import React from "react";
import picture from "../assets/moeed-img.png";
import "../index.css";

export default function About() {
    return (
        <div id="about" className="sm:mt-40 text-secondary flex justify-center">
            <div className="mt-60 relative flex flex-col justify-center w-4/5 sm:w-3/5">
                <h1 className=" text-4xl text-light font-Typewriter2">
                    <span className=" text-secondary font-Typewriter2 border-l-4 border-secondary pl-8 text-4xl">01. </span>About Me
                </h1>
                <div className="flex flex-col md:flex-row">
                    <p className="max-w-2xl mt-10 text-lg text-gray-300">
                        Hey there, I'm Moeed, a Computer Science student at the University of Manchester.
                        My passion lies at the intersection of web and mobile development, machine learning, and algorithms.
                        <br></br><br></br>
                        In my journey so far, I've built a variety of full-stack web applications leveraging a range of technologies like React, Next.js, Tailwind CSS, Express, Node.js, and databases like SQL and MongoDB.
                        From building this portfolio website to crafting platforms for ecommerce ventures, I've enjoyed every moment of learning and refining my skills.
                        <br></br><br></br>
                        I also enjoy developing mobile applications using Java and Kotlin in Android Studio.
                        These projects range from reimagining existing software to developing machine learning solutions aimed at addressing real-world challenges.
                        <br></br><br></br>
                        My love for mathematics drives my enthusiasm for machine learning and algorithms.
                        In my projects, I not only implement established algorithms but also design my own, exploring new avenues of problem-solving and innovation.
                        <br></br><br></br>
                        If you share the same enthusiasm for technology and programming, feel free to reach out and connect!
                    </p>
                    <img src={picture} alt="Image of Moeed Chughtai" className="object-cover w-full md:w-80 h-auto mt-10 md:mt-0 ml-0 md:ml-36 rounded-full border-4 border-secondary"></img> {/* Modified width and margin classes */}
                </div>
            </div>
            <div>
                
            </div>
        </div>
    );
}
