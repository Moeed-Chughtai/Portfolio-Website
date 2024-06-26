import React, { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import { useMediaQuery } from '@react-hook/media-query';
import "../index.css";
import ProjectCard from "./ProjectCard";
import HackathonCard2 from "./HackathonCard2";
import data from "../data/project_data";

export default function Projects() {
    const isSmScreen = useMediaQuery('(max-width: 640px)');
    const [isVisible, setIsVisible] = useState(false);

    const onEnterViewport = () => {
        setIsVisible(true);
    };

    const cards = data.map(item => {
        return (
            <ProjectCard
                key={item.id}
                {...item}
                isVisible={isVisible}
            />
        )
    });

    const cards2 = data.map(item => {
        return (
            <HackathonCard2
                key={item.id}
                {...item}
                isVisible={isVisible}
            />
        )
    });

    return (
        <ScrollTrigger onEnter={onEnterViewport}>
            <div id="projects" className={`mt-10 sm:mt-40 text-secondary flex justify-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transition: 'opacity 1s ease-out, transform 2s ease-out' }}>
                <div className="mt-60 relative flex flex-col justify-center w-4/5 sm:w-3/5">
                    <h1 className="text-4xl text-light font-Typewriter2">
                        <span className="text-secondary font-Typewriter2 border-l-4 border-secondary pl-8">02. </span>Projects
                    </h1>
                    <div>
                        {isSmScreen ? cards2 : cards}
                    </div>
                </div>
            </div>
        </ScrollTrigger>
    );
}
