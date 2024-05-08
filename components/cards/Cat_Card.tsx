import React from "react";
import Image from "next/image";

interface Cat_CardProps {
  name: string;
  url: string;
  description: string;
}

export default function Cat_Card({ name, url, description }: Cat_CardProps) {
  return (
    <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden hover:translate-y-[-5%] transition-transform ease-in-out duration-300">
      <div className="relative pb-2/5 max-w-48 max-h-32">
        <Image
          src={url}
          alt={name}
          className="rounded-t-lg"
          height={1000}
          width={1000}
        />
      </div>
      <div className="p-4 mt-16">
        <h1 className="text-2xl font-semibold mb-2 text-blue-500">{name}</h1>
        <p className="text-lg text-gray-700">{description}</p>
        <button className="text-white font-semibold px-4 py-2 bg-blue-500 hover:bg-blue-800 mt-4 rounded-lg shadow-md">
          Browse
        </button>
      </div>
    </div>
  );
}
