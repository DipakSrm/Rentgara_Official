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

  return (
    <>
     
      <section className="pt-8 lg:pt-32 hero_img bg-center bg-cover">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="border border-indigo-600 p-1 w-60 mx-auto rounded-full flex items-center justify-between mb-4">
            <span className="font-inter text-xs font-medium text-gray-900 ml-3">
              Explore categories to get started
            </span>
            <Link
              className="w-8 h-8 rounded-full flex justify-center items-center bg-indigo-600"
              href="/categories"
            >
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
            className="w-full md:w-auto mb-14 inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center text-white rounded-full bg-indigo-600 shadow-xs hover:bg-indigo-700 transition-all duration-500"
          >
            Create account
            <CaretRight size={32} />
          </Link>
        </div>
      </section>
    </>
  );
}
