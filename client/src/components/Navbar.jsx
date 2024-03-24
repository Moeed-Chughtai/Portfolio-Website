import React from "react";
import logo from '../assets/logo.png';
import '../index.css';

export default function Navbar() {
	return (
		<nav className="flex justify-between px-10 py-10 bg-primary text-base">
			<img src={logo} alt="logo" className="w-5 h-5" />
			<ul className="flex">
				<li className="px-3 py-2 mr-3 text-light hover:text-secondary font-medium">
					<a href="/"><span className="text-secondary">01.</span> About</a></li>
				<li className="px-3 py-2 mr-3 text-light hover:text-secondary font-medium">
					<a href="/"><span className="text-secondary">02.</span> Projects</a></li>
				<li className="px-3 py-2 mr-3 text-light hover:text-secondary font-medium">
					<a href="/"><span className="text-secondary">03.</span> Hackathons</a></li>
				<li className="px-3 py-2 mr-3 text-light hover:text-secondary font-medium">
					<a href="/"><span className="text-secondary">04.</span> Blog</a></li>
				<li className="px-3 py-2 mr-3 text-light hover:text-secondary font-medium">
					<a href="/"><span className="text-secondary">05.</span> Contact</a></li>
				<li className="-mt-0.5 px-5 py-2 border-solid border-2 border-secondary text-light font-medium">Resume</li>
			</ul>
		</nav>
	)
}
