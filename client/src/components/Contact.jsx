import React from "react";

export default function Contact() {
    return (
        <div id="contact" className="mt-40 text-secondary flex justify-center">
            <div className="mt-60 relative flex flex-col justify-center w-3/5">
                <h1 className="text-4xl text-light font-Typewriter2">
                    <span className="text-secondary font-Typewriter2 border-l-4 border-secondary pl-8">05. </span>Contact
                </h1>
                <div className="mt-8 flex flex-col items-center">
                    <h2 className="text-3xl text-secondary font-Typewriter2">Get In Touch</h2>
                    <p className="text-base text-gray-300 mb-4 mt-5 max-w-lg text-center">
                    I am actively seeking internship opportunities to further develop my skills. 
                    If you have any openings or would like to discuss potential collaborations, I would love to hear from you!
                    </p>
                    <button className="w-40 text-lg p-4 mt-8 ml-2 border-solid border-2 border-secondary font-bold font-Typewriter2">
                    Say Hello!</button>
                </div>
            </div>
        </div>
    );
}
