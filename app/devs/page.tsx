"use client";

import Dev from "@/components/Dev";
import MagicButton from "@/components/MagicButton";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { StickyScroll } from "@/components/ui/StickyScroll";
import { navItems2 } from "@/data";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";

const Devs = () => {
  const devItems = [
    {
      title: "John Noah",
      description:
        "John Noah is a skilled software developer specializing in desktop applications. With extensive experience in creating robust and user-friendly software for personal computers, John excels in languages commonly used for desktop development. He has a strong background in designing intuitive user interfaces and optimizing application performance. John's expertise includes cross-platform development, ensuring his applications run smoothly on various operating systems.",
      content: (
        <div className="text-center pt-20 ">
          Software Developer
          <p>Contact - 0746578693</p>
          <p>Email - john@gmail.com</p>
        </div>
      ),
    },
    {
      title: "Leon Ndungu",
      description:
        "Hi! 👋 My name is Leon and I am a software engineer.I am a web developer with more than a year of experience in creating responsive web applications from scratch. I use the latest technologies and frameworks. I am also passionate about artificial intelligence and how it can transform businesses and people’s lives. I am always eager to learn new skills and explore new challenges in the field of AI.",
      content: (
        <div className="text-center pt-20 ">
          Software Developer
          <p>Contact - 0746578753</p>
          <p>Email - leon@gmail.com</p>
        </div>
      ),
    },
    {
      title: "Bruce Mukanzi Andahwa",
      description:
        "My name is Bruce Mukanzi Andahwa, and I am a passionate and dedicated software engineer with a drive for innovation and excellence in the tech industry. My journey began in Nairobi, Kenya, where I was born and raised. From a young age, I was fascinated by computers and the endless possibilities they presented. This fascination grew into a deep passion for programming, which led me to pursue my studies at Jomo Kenyatta University of Agriculture and Technology (JKUAT) in Nairobi.",
      content: (
        <div className="text-center pt-20 ">
          Software Developer
          <p>Contact - 0746878693</p>
          <p>Email - bruce@gmail.com</p>
        </div>
      ),
    },
  ];
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full mb-10">
        <FloatingNav navItems={navItems2} />
        <Dev />
        <StickyScroll
          contentClassName="flex justify-center items-center"
          content={devItems}
        />
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

export default Devs;
