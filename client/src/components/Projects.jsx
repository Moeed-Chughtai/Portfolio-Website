import React from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
    return (
        <div className="mt-40 text-secondary flex justify-center">
            <div className="mt-60 relative flex flex-col justify-center w-3/5">
                <h1 className="text-4xl text-light font-Typewriter2">
                    <span className="text-secondary font-Typewriter2 border-l-4 border-secondary pl-8">02. </span>Projects
                </h1>
                <div>
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>
        </div>
    );
}
