import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "./Navbar";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import about from "./About-Me";
import Footer from "./Footer";
import Editing from "../public/editing.jpg";
import Figma from "../public/Figma.png";
import Scratch from "../public/Scratch.png";
import Web from "../public/Web-Pribadi.png";
function Project() {
  return (
    <>
      <Navbar />
      {/* Title */}
      <div className="font-nunito px-6">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold text-3xl text-[#0a5d4f]">PROJECTS</h1>
          <hr className="border-[#0a5d4f] border-2 rounded-2xl opacity-50 w-20"></hr>
          <p className="text-sm opacity-60 max-w-md text-center">
            Here you will find all of the project ive done in the past
          </p>
          {/* Project Content */}
          <div className="space-y-6 mb-6">
            {/* Editing */}
            <div className="bg-[#0a5d4f] w-full rounded-lg xl:w-[1000px] p-5 drop-shadow-lg hover:translate-y-2 duration-500 xl:justify-between">
              <div className="mt-3">
                <div className="xl:flex xl:w-[500px]">
                  <Image
                    className="rounded-lg"
                    src={Editing}
                    alt="editing"
                  ></Image>
                  <div className="xl:ml-6 xl:flex flex-col xl:justify-center">
                    <h1 className="font-bold text-white text-2xl">
                      Editing Video
                    </h1>
                    <div className="xl:w-fit">
                      <p className="text-white mt-0.5 xl:w-96">
                        Editing a video is one of my passion i worked on this
                        video about penglipuran where we do a documentary type
                        video for a school project
                      </p>
                      <Link href="https://www.youtube.com/watch?v=aQjf_OySVt8">
                        <button className="border-4 border-[#ede7de]  hover:bg-[#ede7de] rounded-lg font-bold w-28 h-12 hover:text-[#0a5d4f] transition duration-500 text-md text-[#ede7de] xl:mt-2">
                          Check It Out
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* UI/UX */}
            <div className="bg-[#0a5d4f] w-full rounded-lg xl:w-[1000px] p-5 drop-shadow-lg hover:translate-y-2 duration-500">
              <div className="mt-3">
                <div className="xl:flex xl:w-[500px]">
                  <Image
                    className="rounded-lg"
                    src={Figma}
                    alt="editing"
                  ></Image>
                  <div className="xl:ml-6 xl:flex flex-col xl:justify-center ">
                    <h1 className="font-bold text-white text-2xl">
                      UI/UX Design
                    </h1>
                    <div className="">
                      <p className="text-white mt-0.5 xl:w-96">
                        This is a project for the end of semester 1 a UI/UX
                        Design, i take inspiration from Steam to make
                        a Gamestore apps my friends helped me like giving advice
                        to make this project better
                      </p>
                      <Link href="https://www.figma.com/file/megnFvM1YKCVSRLz1GcHK3/Projek-PKL?type=design&node-id=0%3A1&mode=design&t=IvKVgzVo5m7TQiYx-1">
                        <button className="border-4 border-[#ede7de]  hover:bg-[#ede7de] rounded-lg font-bold w-28 h-12 hover:text-[#0a5d4f] transition duration-500 text-md text-[#ede7de] xl:mt-2">
                          Check It Out
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Web */}
            <div className="bg-[#0a5d4f] w-full rounded-lg xl:w-[1000px] p-5 drop-shadow-lg hover:translate-y-2 duration-500">
              <div className="mt-3">
                <div className="xl:flex xl:w-[500px]">
                  <Image className="rounded-lg" src={Web} alt="editing"></Image>
                  <div className="xl:ml-6 xl:flex flex-col xl:justify-center ">
                    <h1 className="font-bold text-white text-2xl">
                      Personal Web
                    </h1>
                    <div className="w-fit">
                      <p className="text-white mt-0.5 xl:w-96">
                        This is one of the web project ive done in school in the
                        early year where HTML and CSS still feels new to me
                        thats why im not really satisfied with the result
                      </p>
                      <Link href="https://github.com/Bastianreal/Project-Web-Pribadi">
                        <button className="border-4 border-[#ede7de]  hover:bg-[#ede7de] rounded-lg font-bold w-28 h-12 hover:text-[#0a5d4f] transition duration-500 text-md text-[#ede7de] xl:mt-2">
                          Check It Out
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scratch */}
            <div className="bg-[#0a5d4f] w-full xl:w-[1000px] rounded-lg p-5 drop-shadow-lg hover:translate-y-2 duration-500">
              <div className="mt-3">
                <div className="xl:flex xl:w-[500px]">
                  <Image
                    className="rounded-lg"
                    src={Scratch}
                    alt="editing"
                  ></Image>
                  <div className="xl:ml-6 xl:flex flex-col xl:justify-center">
                    <h1 className="font-bold text-white text-2xl">
                      Scratch
                    </h1>
                    <div className="w-fit">
                      <p className="text-white mt-0.5 xl:w-96">
                        This is another project for the end of semester but we did this in a group we make a basic scratch game named Crazy Cars
                      </p>
                      <Link href="https://scratch.mit.edu/projects/939327427">
                        <button className="border-4 border-[#ede7de]  hover:bg-[#ede7de] rounded-lg font-bold w-28 h-12 hover:text-[#0a5d4f] transition duration-500 text-md text-[#ede7de] xl:mt-2">
                          Check It Out
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Project;
