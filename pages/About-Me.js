import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "./Navbar";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import about from "./About-Me";
import profile from "../public/Profile.jpg";
import Footer from "./Footer";
import arrow from "../public/arrow.svg";
const inter = Inter({ subsets: ["latin"] });
export default function About() {
  return (
    <>
      <Navbar />
      {/* Title */}
      <div className="font-nunito text-[#025a4e]">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold text-3xl md:text-5xl">ABOUT ME</h1>
          <hr className="border-black border-2 w-24 md:w-48 rounded-xl opacity-40"></hr>
          <p className="text-sm text-black opacity-50 md:text-lg">Know More About Me</p>
          <div className="flex flex-col items-center justify-center 2xl:flex 2xl:flex-row xl:flex xl:flex-row space-y-5 2xl:py-8">
            <div className="w-full px-10 py-3 md:px-36 xl:p-0 xl:w-[500px]">
              <Image src={profile} alt="profile"></Image>
            </div>
            {/* About Content */}
            <div className="flex flex-col items-center justify-center 2xl:space-x-14 xl:space-x-10 xl:py-12">
              <h1 className="font-bold text-3xl text-center 2xl:ml-5 md:text-4xl 2xl:text-6xl xl:text-center xl:items-center">
                Hi My Name is Sebastian
              </h1>
              <p className="max-w-4xl text-lg mx-5 mt-2 md:text-3xl md:max-w-4xl xl:max-w-2xl xl:mt-2 2xl:max-w-4xl text-justify">
                Im a 11th grader Software Engineering student at SMK N 1 Denpasar that like to try
                new things, im also a novice front end website developer and a
                beginner UI/UX Designer
              </p>
              <div className="flex flex-row h-fit mt-7 opacity-60 md:hidden">
                <Image src={arrow} alt="arrow"></Image>
                <p className="text-black ml-2 md:hidden">
                  See what i can do below
                </p>
              </div>
              {/* Skill List */}
              <div className="flex gap-x-3 mt-5 md:space-x-14 lg:space-x-60 xl:space-x-14">
                <div className="bg-[#025a4e] rounded-lg w-32 mt-4 xl:mr-7">
                  <h1 className="font-bold text-white ml-4 mt-2">Figma</h1>
                  <p className="text-white ml-4">UI/UX Design</p>
                  <h1 className="font-bold text-white ml-4 mt-2">Java</h1>
                  <p className="text-white ml-4">Programming</p>
                </div>
                <div className="bg-[#025a4e] rounded-lg w-32 mt-4">
                  <h1 className="font-bold text-white ml-4 mt-2">CSS</h1>
                  <p className="text-white ml-4">Front End</p>
                  <h1 className="font-bold text-white ml-4 mt-2">C#</h1>
                  <p className="text-white ml-4">Unity</p>
                </div>
                <div className="block">
                  <div className="bg-[#025a4e] rounded-lg w-32 mt-4">
                    <h1 className="font-bold text-white ml-4 mt-2">HTML</h1>
                    <p className="text-white ml-4">Front End</p>
                  </div>
                  <div className="bg-[#025a4e] rounded-lg w-32 mt-4">
                    <h1 className="font-bold text-white ml-4 mt-2">Python</h1>
                    <p className="text-white ml-4">Programming</p>
                  </div>
                </div>
              </div>
              {/* Other */}
              <div className="flex flex-col items-center justify-center mt-7">
                <h1 className="font-bold text-3xl md:text-4xl xl:text-4xl 2xl:text-6xl">
                  Other Things about me
                </h1>
                <p className="text-justify md:max-w-4xl lg:max-w-4xl 2xl: max-w-4xl mx-5 mt-2 text-lg xl:max-w-2xl md:text-3xl 2xl:text-4xl 2xl:max-w-4xl mb-5 md:mt-3">
                  Beside being a front end developer being a video editor is one
                  of my passion and im also a beginner photographer i love to
                  explore new things and learned the new thing from the
                  proffesionals
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
