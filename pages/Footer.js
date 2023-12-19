import React from "react";
import instagram from "../public/instagram.svg";
import Image from "next/image";
import Navbar from "./Navbar";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import youtube from "../public/youtube.svg";
import github from "../public/github.svg";
import house from "../public/house.svg";
import phone from "../public/phone.svg";
import envelope from "../public/envelope.svg";
const Footer = () => {
  return (
    <footer className="bg-[#0a5d4f] text-white font-nunito w-s w-full">
      <div className="px-5 pt-4">
        <div className="md:flex md:justify-between">
        <div className="">
          <div>
          <h1 className="text-2xl font-bold mt-3 md:mt-0 md:text-left">
              Sebastian
            </h1>
            <p className="text-sm max-w-xs text-justify md:text-left">
              A beginner front end dev that willing to learn something new and not afraid of failing
            </p>         
          <div className="">
          <div className="mt-3 flex">
              <Image src={house} alt="House"></Image>
              <p className="ml-2">Jl Pucuk 1 No 99x Banjar Tangtu</p>
            </div>
            <div className="mt-1 flex">            
              <Image src={phone} alt="Phone"></Image>
              <p className="ml-2">0812-3902-9304</p>              
            </div>
            <div className="mt-1 flex">            
              <Image src={envelope} alt="Email"></Image>
              <p className="ml-2">bastiankristiawan9@gmail.com</p>              
            </div>
          </div>
          </div>
          </div>
          <div className="md:flex md:items-center mt-4">
          <div className="md:text-right justify-between">
            <h1 className="text-2xl font-bold">Social Media</h1>
            <div className="flex right-0 space-x-2">
              <Link href="https://www.instagram.com/bsttian_?igshid=YTQwZjQ0NmI0OA">
                <Image className="md:ml-48" src={instagram} alt="instagram"></Image>
              </Link>
              <Link href="https://www.youtube.com/@zelfix4938">
                <Image className="" src={youtube} alt="instagram"></Image>
              </Link>
              <Link href="https://github.com/Bastianreal">
                <Image className='' src={github} alt="instagram"></Image>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-white opacity-60 mt-1"></hr>
      <p className="text-sm opacity-60 flex flex-col items-center justify-center mt-2 pb-2 ">
        Copyright Sebastian 2023
      </p>
    </footer>
  );
};

export default Footer;
