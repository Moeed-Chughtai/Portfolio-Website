import React from "react";
import BlogCard from "./BlogCard";
import data from "../data/blog_data";

export default function Blog() {
  const cards = data.map((item) => {
    return <BlogCard key={item.id} {...item} />;
  });

  return (
    <div id="blog" className="mt-40 text-secondary flex justify-center">
      <div className="mt-60 relative flex flex-col justify-center w-3/5">
        <h1 className="text-4xl text-light font-Typewriter2">
          <span className="text-secondary font-Typewriter2 border-l-4 border-secondary pl-8">04. </span>Blog
        </h1>
        <div className="flex flex-wrap">
          {cards}
        </div>
      </div>
    </div>
  );
}