"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useAuth } from "@/lib/hooks/authContext";
import { toast } from "react-toastify";
import { TextAlignJustify, X } from "@phosphor-icons/react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Footer_Mob() {
  const { handleDeleteSession, sessionData, isLogged } = useAuth();
  const [open, setOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollTop = 0;

  const handleSignOut = async () => {
    await handleDeleteSession();
    toast.success("Logged out successfully");
  };

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      // Scrolling down
      setIsVisible(false);
    } else {
      // Scrolling up
      setIsVisible(true);
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`${
          isLogged ? "flex" : "hidden"
        } md:hidden gap-4 p-4 shadow sticky bottom-0 z-20 bg-white items-center justify-evenly transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">{sessionData.name}</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Profile</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem>Profile</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Orders</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem onClick={handleSignOut}>
              SignOut
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <button
          data-collapse-toggle="navbar"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={open}
          onClick={handleOpen}
        >
          <TextAlignJustify size={32} />
        </button>
      </div>
      <div
        className={` md:hidden block h-full w-64 p-4 shadow fixed top-0  z-30 bg-white transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-[-100%]"
        }`}
      >
        <div className="flex flex-col gap-4">
          <Button variant="outline" onClick={() => setOpen((prev) => !prev)}>
            <X size={32} />
          </Button>
          <ul className="flex lg:items-center max-lg:gap-4 max-lg:mb-4 flex-col mt-4 lg:flex-1 md:mt-0 lg:flex-row">
            <li>
              <Link
                href="/#"
                className="text-gray-500 text-sm font-medium hover:text-prime-blue-700 transition-all duration-500 mb-2 block lg:mr-6 lg:text-base md:mb-0 md:mr-3 hover:text-gray-900"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className="text-gray-500 text-sm font-medium hover:text-prime-blue-700 transition-all duration-500 mb-2 block lg:mr-6 lg:text-base md:mb-0 md:mr-3 hover:text-gray-900"
              >
                About us
              </Link>
            </li>
            <li className="relative">
              <Link
                href="/categories"
                className="text-gray-500 text-sm font-medium hover:text-prime-blue-700 transition-all duration-500 mb-2 block lg:mr-6 lg:text-base md:mb-0 md:mr-3 hover:text-gray-900"
              >
                Categories
              </Link>
            </li>
          </ul>
      
        </div>
      </div>
    </>
  );
}

    