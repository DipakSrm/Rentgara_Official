"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import {
  TextAlignJustify,
  ArrowRight,
  CaretRight,
} from "@phosphor-icons/react";
import Hero_Img from "@/public/images/hero.jpg";
import { useRouter } from "next/navigation";
export default function Hero() {
  const [Open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  console.log("oppen", Open);
  const router = useRouter();
  return (
    <>
      <nav
        className="py-5 border-b-default border-solid border-gray-200 z-10 w-full  lg:fixed  bg-opacity-[0.9] bg-white"
        id="topnav">
        <div className="mx-auto max-w-7xl  lg:px-8">
          <div className="w-full flex flex-col lg:flex-row">
            <div className="flex justify-between lg:hidden px-4">
              <a href="#" className="text-4xl text-blue-700 font-bold">
                RentGara
              </a>
              <button
                data-collapse-toggle="navbar"
                type="button"
                className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-controls="navbar-default"
                aria-expanded="false">
                <TextAlignJustify size={32} onClick={handleOpen} />
              </button>
            </div>
            <div
              className={` w-full lg:flex justify-between max-lg:bg-white py-5 max-lg:mt-1 max-lg:px-4 max-lg:shadow-lg max-lg:shadow-gray-200 max-lg:h-auto max-lg:overflow-auto transition-all duration-500 delay-200 ${
                !Open ? "hidden" : ""
              }`}
              id="navbar">
              <ul className="flex lg:items-center max-lg:gap-4 max-lg:mb-4 flex-col mt-4 lg:flex-1 md:mt-0 lg:flex-row">
                <li>
                  <Link
                    href="/#"
                    className="text-gray-500 text-sm font-medium hover:text-prime-blue-700 transition-all duration-500 mb-2 block lg:mr-6 lg:text-base md:mb-0 md:mr-3 hover:text-gray-900">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    className="text-gray-500 text-sm font-medium hover:text-prime-blue-700 transition-all duration-500 mb-2 block lg:mr-6 lg:text-base md:mb-0 md:mr-3 hover:text-gray-900">
                    About us
                  </Link>
                </li>

                <li className="relative">
                  <Link
                    href="/categories"
                    className="text-gray-500 text-sm font-medium hover:text-prime-blue-700 transition-all duration-500 mb-2 block lg:mr-6 lg:text-base md:mb-0 md:mr-3 hover:text-gray-900">
                    Categories
                  </Link>
                  {/* <!-- Dropdown menu --> */}
                </li>
              </ul>
              <a
                href="#"
                className="hidden lg:flex items-center text-4xl font-semibold text-blue-400">
                RentGara
              </a>
              <div className="flex lg:items-center justify-start flex-col lg:flex-row max-lg:gap-4 lg:flex-1 lg:justify-end">
                <button onClick={()=>router.push('/SignInPage')} className="bg-indigo-50 text-indigo-600 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm hover:bg-indigo-100">
                  Login
                </button>
                <button onClick={()=>router.push('/SignUpPage')} className="bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm lg:ml-5 hover:bg-indigo-700">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="pt-8 lg:pt-32 hero_img bg-center bg-cover">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="border border-indigo-600 p-1 w-60 mx-auto rounded-full flex items-center justify-between mb-4">
            <span className="font-inter text-xs font-medium text-gray-900 ml-3">
              Explore categories to get started
            </span>
            <Link
              className="w-8 h-8 rounded-full flex justify-center items-center bg-indigo-600"
              href="/categories">
              <ArrowRight size={32} className="text-white" />
            </Link>
          </div>
          <h1 className="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-gray-900 mb-5 md:text-5xl leading-[50px]">
            Get all kinds of Rental Services in
            <span className="text-indigo-600"> One Place </span>
          </h1>
          <p className="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">
            First time in Nepal you can rent different types of services
          </p>
          <Link
            href="/SignUpPage"
            className="w-full md:w-auto mb-14 inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center text-white rounded-full bg-indigo-600 shadow-xs hover:bg-indigo-700 transition-all duration-500">
            Create account
            <CaretRight size={32} />
          </Link>
        </div>
      </section>
    </>
  );
}
