import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section id="experience">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Experience
        </h1>
        <div className="flex flex-wrap m-4">
          {testimonials.map((testimonial) => (
            <div className="p-4  w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded border">
                <div className="flex items-center mb-4">
                  <TerminalIcon className="block w-8 text-gray-500" />
                  <span className="ml-2 text-white">
                    {testimonial.position}
                  </span>
                </div>

                {/* <p className="leading-relaxed mb-6">{testimonial.quote}</p> */}
                <div className="leading-relaxed mb-6 text-left">
                  {testimonial.quote.split("\n").map((line, index) => {
                    if (line.trim().startsWith("-")) {
                      return <li key={index}>{line.slice(1).trim()}</li>;
                    } else {
                      return <p key={index}>{line.trim()}</p>;
                    }
                  })}
                </div>
                <div className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src={testimonial.image}
                    className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {testimonial.name}
                    </span>
                    <span className="text-gray-500 text-sm uppercase">
                      {testimonial.company}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
