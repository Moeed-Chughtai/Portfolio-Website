import React, { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import picture1 from "../assets/moeed-img1.jpg";
import picture2 from "../assets/moeed-img2.jpg";
import picture3 from "../assets/moeed-img3.jpg";
import picture4 from "../assets/moeed-img4.jpg";
import "../index.css";

export default function About() {
    const [isVisible, setIsVisible] = useState(false);

    const onEnterViewport = () => {
        setIsVisible(true);
    };

    return (
        <ScrollTrigger onEnter={onEnterViewport}>
            <div id="about" className={`sm:mt-40 text-secondary flex justify-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transition: 'opacity 1s ease-out, transform 2s ease-out' }}>
                <div className="mt-60 relative flex flex-col justify-center w-4/5 sm:w-3/5">
                    <h1 className="text-4xl text-light font-Typewriter2">
                        <span className="text-secondary font-Typewriter2 border-l-4 border-secondary pl-8 text-4xl">01. </span>About Me
                    </h1>
                    <div className="flex flex-col md:flex-row">
                        <p className="max-w-2xl mt-10 text-lg text-gray-300">
                            Hi there! I'm Moeed, an aspiring Software Engineer and Machine Learning Enthusiast.
                            My passion lies in developing the web and mobile development applications that integrate machine learning models to solve complex problems, personalise user experiences and drive innovation.
                            <br /><br />
                            I specialise in building full-stack web and mobile applications that address real-world problems.
                            I use React and Next.js for frontend development, and rely on Express and Node.js for backend services, or Flask for Python-based machine learning projects.
                            For data storage, I work with both SQL databases and MongoDB. In mobile app development, I use Java, Kotlin, and React Native.
                            My projects include developing a machine learning medical app to assist doctors and a web app that helps users navigate election policies and engage with candidates, using the OpenAI API.
                            <br /><br />
                            In my machine learning projects, I develop models to tackle complex challenges such as detecting deepfake videos and predicting equipment failures for timely maintenance.
                            I use a range of techniques including regression, neural networks and decision trees, as well as deep learning methods for computer vision and natural language processing.
                            To ensure optimal performance, I enhance these models through hyperparameter tuning and feature engineering, delivering solutions that are both accurate and impactful.
                            <br /><br />
                            Let's Connect! Open to opportunities, collaborations and networking.
                        </p>
                        <img src={picture2} alt="Image of Moeed Chughtai" className="object-cover w-full md:w-80 h-auto mt-10 md:mt-0 ml-0 md:ml-36 rounded-full border-4 border-secondary" />
                    </div>
                    <div className="flex flex-row">
                        <div className="group mt-10 sm:mt-14">
                            <h2 className="text-base sm:text-2xl font-semibold text-light font-Typewriter2 mb-4">Programming Languages</h2>
                            <ul className="list-disc pl-5">
                                <li className="sm:text-lg">JavaScript</li>
                                <li className="sm:text-lg mt-2">TypeScript</li>
                                <li className="sm:text-lg mt-2">HTML/CSS</li>
                                <li className="sm:text-lg mt-2">Python</li>
                                <li className="sm:text-lg mt-2">Java</li>
                                <li className="sm:text-lg mt-2">Kotlin</li>
                                <li className="sm:text-lg mt-2">C/C++</li>
                                <li className="sm:text-lg mt-2">SQL</li>
                            </ul>
                        </div>
                        <div className="group mt-10 sm:mt-14 ml-5 sm:ml-8">
                            <h2 className="text-base sm:text-2xl font-semibold text-light font-Typewriter2 mb-4">Libraries and Frameworks</h2>
                            <ul className="list-disc pl-5">
                                <li className="sm:text-lg">React</li>
                                <li className="sm:text-lg mt-2">Next.js</li>
                                <li className="sm:text-lg mt-2">Express</li>
                                <li className="sm:text-lg mt-2">Node.js</li>
                                <li className="sm:text-lg mt-2">TailwindCSS</li>
                                <li className="sm:text-lg mt-2">Flask</li>
                                <li className="sm:text-lg mt-2">TensorFlow</li>
                                <li className="sm:text-lg mt-2">Scikit-learn</li>
                                <li className="sm:text-lg mt-2">OpenCV</li>
                                <li className="sm:text-lg mt-2">Pandas</li>
                                <li className="sm:text-lg mt-2">Numpy</li>
                            </ul>
                        </div>
                        <div className="group mt-10 sm:mt-14 ml-5 sm:ml-8">
                            <h2 className="text-base sm:text-2xl font-semibold text-light font-Typewriter2 mb-4">DevOps/Databases</h2>
                            <ul className="list-disc pl-5">
                                <li className="sm:text-lg">Docker</li>
                                <li className="sm:text-lg mt-2">AWS</li>
                                <li className="sm:text-lg mt-2">Git</li>
                                <li className="sm:text-lg mt-2">MySQL</li>
                                <li className="sm:text-lg mt-2">MongoDB</li>
                                <li className="sm:text-lg mt-2">Firebase</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollTrigger>
    );
}
