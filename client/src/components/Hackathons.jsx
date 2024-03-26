import React from "react";
import HackathonCard from "./HackathonCard";

export default function Hackathons() {
    return (
        <div className="mt-40 text-secondary flex justify-center">
            <div className="mt-60 relative flex flex-col justify-center w-3/5">
                <h1 className="text-4xl text-light font-Typewriter2">
                    <span className="text-secondary font-Typewriter2 border-l-4 border-secondary pl-8">03. </span>Hackathons
                </h1>
                <div>
                    <HackathonCard />
                    <HackathonCard />
                    <HackathonCard />
                </div>
            </div>
        </div>
    );
}
