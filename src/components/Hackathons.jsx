import React from "react";
import { useMediaQuery } from '@react-hook/media-query';
import "../index.css";
import HackathonCard from "./HackathonCard";
import HackathonCard2 from "./HackathonCard2";
import data from "../data/hackathon_data";

export default function Hackathons() {
    const isSmScreen = useMediaQuery('(max-width: 640px)'); // Define the screen size for 'sm'

    const cards = data.map(item => {
        return (
            <HackathonCard
                key={item.id}
                {...item}
            />
        )
    })

    const cards2 = data.map(item => {
        return (
            <HackathonCard2
                key={item.id}
                {...item}
            />
        )
    })

    return (
        <div id="hackathons" className="mt-10 sm:mt-40 text-secondary flex justify-center">
            <div className="mt-60 relative flex flex-col justify-center w-4/5 sm:w-3/5">
                <h1 className="text-4xl text-light font-Typewriter2">
                    <span className="text-secondary font-Typewriter2 border-l-4 border-secondary pl-8">03. </span>Hackathons
                </h1>
                <div>
                    {isSmScreen ? cards2 : cards}
                </div>
            </div>
        </div>
    );
}
