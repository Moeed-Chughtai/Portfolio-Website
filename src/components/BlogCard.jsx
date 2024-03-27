import React from "react";

export default function BlogCard(props) {
  return (
    <div className="bg-gray-900 rounded-lg shadow-md p-6 m-4 w-92 hover:shadow-lg transform hover:scale-105 transition duration-300">
      <h2 className="text-xl font-semibold mb-2 text-light hover:text-secondary font-Typewriter2 animate__animated animate__fadeInUp">{props.title}</h2>
      <p className="text-gray-300 mb-2 font-Typewriter2 animate__animated animate__fadeInUp">{props.date}</p>
      <p className="text-gray-300 animate__animated animate__fadeInUp">{props.description}</p>
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline mt-4 inline-block transition-transform transform hover:scale-110 duration-300 animate__animated animate__fadeInUp"
      >
        Read more
      </a>
    </div>
  );
}
