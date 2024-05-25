"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { TextAlignJustify } from "@phosphor-icons/react";
import { usePathname } from "next/navigation";


export default function Cat_Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const [Open, setOpen] = useState(false);
const pathname=usePathname();
console.log("this is pathname",pathname)
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
   <div className="">
  
    {children}</div>
  
  );
}
