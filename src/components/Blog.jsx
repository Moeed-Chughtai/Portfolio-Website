import React, { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import BlogCard from "./BlogCard";
import data from "../data/blog_data";
import "../index.css";

export default function Blog() {
  const [isVisible, setIsVisible] = useState(false);

  const onEnterViewport = () => {
    setIsVisible(true);
  };

  const cards = data.map((item) => {
    return (
      <BlogCard
        key={item.id}
        {...item}
        isVisible={isVisible}
      />
    );
  });

  return (
    <ScrollTrigger onEnter={onEnterViewport}>
      <div id="blog" className={`mt-10 sm:mt-40 text-secondary flex justify-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transition: 'opacity 1s ease-out, transform 2s ease-out' }}>
        <div className="mt-60 relative flex flex-col justify-center w-4/5 sm:w-3/5">
          <h1 className="text-4xl text-light font-Typewriter2">
            <span className="text-secondary font-Typewriter2 border-l-4 border-secondary pl-8">04. </span>Blog
          </h1>
          <div className="flex flex-wrap">
            {cards}
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
}
