import React from "react";
import "../index.css";
import ProjectCard from "./ProjectCard";
import data from "../data/project_data";

export default function Projects() {
    const cards = data.map(item => {
        return (
            <ProjectCard
                key={item.id}
                {...item}
            />
        )
    })

    return (
        <div id="projects" className="mt-10 sm:mt-40 text-secondary flex justify-center">
            <div className="mt-60 relative flex flex-col justify-center w-4/5 sm:w-3/5">
                <h1 className="text-4xl text-light font-Typewriter2">
                    <span className="text-secondary font-Typewriter2 border-l-4 border-secondary pl-8">02. </span>Projects
                </h1>
                <div>
                    {cards}
                </div>
            </div>
        </div>
    );
}
