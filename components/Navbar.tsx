"use client";
import { useAuth } from "@/lib/hooks/authContext";
import { MagicWand, TextAlignJustify, User } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";


export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);
  const { isLogged, handleDeleteSession,sessionData,userData } = useAuth();
// this is for profile from shadcn
  

  console.log("this is isLogged", isLogged,sessionData);
  console.log("this is userData", userData);
  const router = useRouter();

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleSignOut = async () => {
    await handleDeleteSession();
    toast.success("Logged out successfully");
  };

  return (
    <>
      <nav
        className="py-5 border-b-default border-solid border-gray-200 z-10 w-full lg:fixed bg-opacity-[0.9] bg-white top-0"
        id="topnav"
      >
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="w-full flex flex-col lg:flex-row">
            <div className="flex justify-between lg:hidden px-4 ">
              <a href="#" className="text-4xl text-blue-700 font-bold">
                RentGara
              </a>
              <div className="flex px-6 gap-4 items-center">
                <button
                  data-collapse-toggle="navbar"
                  type="button"
                  className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  aria-controls="navbar-default"
                  aria-expanded="false"
                  onClick={handleOpen}
                >
                  <TextAlignJustify size={32} />
                </button>{" "}
                {isLogged && (
                  <>
                    {/* <User size={32} /> */}

                    {/* dropdown menue for navbar from shadcn */}
                    <div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline">{sessionData.name}</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                          <DropdownMenuLabel>Profile</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuCheckboxItem>
                            Profile
                          </DropdownMenuCheckboxItem>
                          <DropdownMenuCheckboxItem>
                            Orders
                          </DropdownMenuCheckboxItem>
                          <DropdownMenuCheckboxItem onClick={handleSignOut}>
                            SignOut
                          </DropdownMenuCheckboxItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    {userData.Type === "Renter" && (
                      <>
                        <Button className="text-white flex gap-3">
                          <span>Go to Console</span>
                          <MagicWand size={32} />
                        </Button>
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
            <div
              className={`w-full lg:flex justify-between max-lg:bg-white py-5 max-lg:mt-1 max-lg:px-4 max-lg:shadow-lg max-lg:shadow-gray-200 max-lg:h-auto max-lg:overflow-auto transition-all duration-500 delay-200 ${
                !open ? "hidden" : ""
              }`}
              id="navbar"
            >
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
              <a
                href="#"
                className="hidden lg:flex items-center text-4xl font-semibold text-blue-400"
              >
                RentGara
              </a>
              <div className="flex lg:items-center justify-start flex-col lg:flex-row max-lg:gap-4 lg:flex-1 lg:justify-end">
                {!isLogged ? (
                  <>
                    <button
                      onClick={() => router.push("/SignInPage")}
                      className="bg-indigo-50 text-indigo-600 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm hover:bg-indigo-100"
                    >
                      Login
                    </button>
                    <button
                      onClick={() => router.push("/SignUpPage")}
                      className="bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm lg:ml-5 hover:bg-indigo-700"
                    >
                      Sign up
                    </button>
                  </>
                ) : (
                  <>
                    <div className="lg:flex  hidden px-6 gap-4 items-center">
                      <div className="max-h-[40] max-w-[40px] ">
                        <Image
                          src="/Images/pp.jpg"
                          alt="profile"
                          height={100}
                          width={100}
                          className="rounded-full"
                        ></Image>
                      </div>
                      {/* dropdown menue for navbar from shadcn */}
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline">{sessionData.name}</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                          <DropdownMenuLabel>Profile</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuCheckboxItem className="hover:bg-white">
                            Status Bar
                          </DropdownMenuCheckboxItem>
                          <DropdownMenuCheckboxItem className="hover:bg-white">
                            Orders
                          </DropdownMenuCheckboxItem>
                          <DropdownMenuCheckboxItem
                            onClick={handleSignOut}
                            className="hover:bg-white"
                          >
                            SignOut
                          </DropdownMenuCheckboxItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                      {userData.Type === "Renter" && (
                        <>
                          <Button className="text-white flex gap-3">
                            <span>Go to Console</span>
                            <MagicWand size={32} />
                          </Button>
                        </>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
