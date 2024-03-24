import React from "react";

export default function About() {
    return (
        <div className="mt-96 ml-96">
            <h1 className="text-4xl text-secondary underline">01. About Me</h1>
            <p className="max-w-2xl mt-10 text-lg text-light">Hello! My name is Brittany and I enjoy creating things that live on the internet.
                My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes 
                — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
            </p>
            <p className="max-w-2xl mt-10 text-lg text-light">
                Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. 
                My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
            </p>
        </div>
    );
}
