import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "./Navbar";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import about from "./About-Me";
import Footer from "./Footer"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Home */}
      <section id="Home">
        <div className=" font-nunito">
          <div class="flex flex-col items-center h-screen justify-center gap-y-2">
            <h class="text-center text-[#0a5d4f] font-bold text-3xl md:text-5xl">
              Hi My Name Is Sebastian
            </h>

            <div className="text-center text-[#0a5d4f] text-2xl md:text-3xl flex space-x-2 w-30">
              <p class=""></p>
              <Typewriter
                options={{
                  strings: [
                    "i am a software engineering student",
                    "i am a novice front end developer",
                    "",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-y-3 md:inline-block md:space-x-4 xl:inline-block xl:space-x-10 ">
              <Link href="/About-Me">
                <button className="bg-[#0a5d4f] hover:bg-white  hover:border-[#0a5d4f] hover:border-4 transition duration-500 rounded-lg font-bold w-40 h-14  text-lg hover:text-black text-white hover:-translate-y-1 ">
                  ABOUT ME
                </button>
              </Link>
              <Link href="/Project">
              <button className="border-4 border-[#0a5d4f]  hover:bg-[#0a5d4f] rounded-lg font-bold w-48 h-14 hover:text-white transition duration-500 text-lg text-black hover:-translate-y-1">
                MY PROJECT
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Home ends here */}
     <Footer />
    </>
  );
}
