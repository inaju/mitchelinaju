import React from "react";

type HeadingProps = {
  tag?: string;
};

function Heading({ tag }: HeadingProps) {
  return (
    <div
      className={`${tag ? "pt-10 pb-4 sm:pt-24 sm:pb-20" : "py-12 sm:py-20"} w-full text-center relative`}
    >
      {tag ? (
        <>
          <h1 className="text-3xl sm:text-4xl inline-block w-auto mx-auto mb-8 relative">
            Projects built with <b>{tag}</b>
          
          </h1>
        </>
      ) : (
        <h1 className="text-4xl sm:text-6xl inline-block w-auto mx-auto mb-8 relative">
          Projects
         
        </h1>
      )}
      {!tag && (
        <p className="text-fun-gray text-xl sm:text-2xl max-w-3xl m-auto">
          I've built cool apps and websites using anything from HTML to React, to NextJs
          . Here are some of my favorite projects over the course
          of my journey.
        </p>
      )}
    </div>
  );
}

export default Heading;
