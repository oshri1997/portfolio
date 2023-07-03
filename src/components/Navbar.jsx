"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { navLinks } from "@/Contants";
import DownloadCV from "./DownloadCV";
import ContactBtns from "./ContactBtns";
import DarkModeToggle from "./DarkModeToggle";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scroll, setScroll] = useState(false);
  const { resolvedTheme } = useTheme();
  const router = useRouter();
  const path = usePathname();

  const handleScroll = () => {
    if (window.scrollY >= 90) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    if (!path.startsWith("/projects/")) {
      window.history.scrollRestoration = "manual";
      router.push("/");
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.history.scrollRestoration = "auto";
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <nav
      className={
        scroll
          ? `nav fixed ${resolvedTheme}  z-50 h-20 w-full shadow-xl duration-200 ease-in-out`
          : `nav fixed ${resolvedTheme} z-50 h-20 w-full duration-200 ease-in-out`
      }
    >
      <div className="flex h-full w-full items-center justify-between px-2 2xl:px-16">
        <Link href="/">
          <Image
            src="/assets/logoNav.png"
            className="h-[120px] w-[120px] md:h-[200px] md:w-[200px]"
            width="200"
            height="200"
            alt="Logo"
          />
        </Link>
        <div>
          <ul className="hidden items-center justify-center md:flex">
            <DarkModeToggle />
            {navLinks.map((link) => (
              <Link key={link.id} href={link.href}>
                <li className="ml-10 text-sm uppercase hover:border-b hover:border-bluep">
                  {link.title}
                </li>
              </Link>
            ))}
            <DownloadCV />
          </ul>

          {/* Mobile --> */}
          <div className=" md:hidden">
            <div className="flex gap-8">
              <DarkModeToggle />
              <div onClick={handleToggle} className="cursor-pointer">
                <AiOutlineMenu size={25} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={toggle ? "fixed left-0 top-0 h-screen w-full bg-black/70 md:hidden" : ""}
      >
        <div
          className={
            toggle
              ? `fixed left-0 top-0 h-screen w-[75%] ${
                  resolvedTheme === "light" ? "bg-bodyBackground" : "bg-gray-900"
                } p-10 duration-500 ease-in sm:w-[65%] md:hidden md:w-[45%]`
              : `fixed left-[-100%] top-0 h-screen w-[75%] ${
                  resolvedTheme === "light" ? "bg-bodyBackground" : "bg-gray-900"
                } p-10 duration-500 ease-in sm:w-[65%] md:hidden md:w-[45%]`
          }
        >
          <div>
            <div className="flex w-full items-center justify-between gap-3 ">
              <Link href="/" onClick={handleToggle}>
                <Image
                  src="/assets/logoNav.png"
                  className="-ml-6"
                  width="140"
                  height="140"
                  alt="Logo"
                />
              </Link>
              <div className="flex items-center gap-6 ">
                <div
                  onClick={handleToggle}
                  className="blueCircle cursor-pointer rounded-full p-1 "
                >
                  <AiOutlineClose size={25} />
                </div>
              </div>
            </div>
            <div className="my-4 border-b border-gray-300">
              <p className="md:[90%] py w-[85%] py-4">Let's Build something together</p>
            </div>
          </div>
          <div className="flex h-[65%] flex-col justify-between py-4">
            <ul className="uppercase">
              {navLinks.map((link) => (
                <Link key={link.id} href={link.href} onClick={handleToggle}>
                  <li className="py-4">{link.title}</li>
                </Link>
              ))}
              <DownloadCV />
            </ul>
            <div>
              <p className="text-pr uppercase tracking-widest text-bluep">Let's Connect</p>
              <div className="my-4 flex w-full items-center justify-between">
                <ContactBtns />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
