import React from "react";
import HackathonCard from "./HackathonCard";
import data from "../data/hackathon_data";

export default function Hackathons() {
    const cards = data.map(item => {
        return (
            <HackathonCard
                key={item.id}
                {...item}
            />
        )
    })

    return (
        <div id="hackathons" className="mt-40 text-secondary flex justify-center">
            <div className="mt-60 relative flex flex-col justify-center w-3/5">
                <h1 className="text-4xl text-light font-Typewriter2">
                    <span className="text-secondary font-Typewriter2 border-l-4 border-secondary pl-8">03. </span>Hackathons
                </h1>
                <div>
                    {cards}
                </div>
            </div>
        </div>
    );
}
