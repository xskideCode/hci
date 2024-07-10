"use client";

import Habit from "@/components/Habit";
import MagicButton from "@/components/MagicButton";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems2 } from "@/data";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";

const Habits = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full mb-10">
        <FloatingNav navItems={navItems2} />
        <Habit />
        <div className="flex justify-center items-center pt-5 border-2 border-gray-400 mt-20 rounded-md ">
          <iframe
            src="https://docs.google.com/presentation/d/1Ssrzqpimo7Wiq54aCebbQkEO1BDO_PlceJQuaXwbwfQ/embed?start=false&loop=false&delayms=3000"
            frameBorder="0"
            width="960"
            height="569"
            allowFullScreen={true}
          ></iframe>
        </div>
        <div className="relative flex justify-end items-center w-full">
          <Link href="/">
            <MagicButton
              title="Back to Home"
              icon={<FaArrowLeft />}
              position="right"
            />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Habits;
