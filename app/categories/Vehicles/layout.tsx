"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { TextAlignJustify } from "@phosphor-icons/react";
import Nabvar from "@/components/Navbar";

export default function Vehicle_Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const [Open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="">
      {children}
    </div>
  );
}
