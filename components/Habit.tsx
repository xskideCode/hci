import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { BackgroundBeams } from "./ui/BackgroundBeams";

const Habit = () => {
  return (
    <div>
      <BackgroundBeams className="-z-10" />
      <div className="flex justify-center relative my-40 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Savannah Coders
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Our Habits Tracker Presentation"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Habit;
