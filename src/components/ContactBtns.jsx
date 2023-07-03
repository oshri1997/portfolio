"use client";
import { AiOutlineMail, AiFillFacebook } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactBtns = () => {
  return (
    //staggerChildren:0.2
    <>
      <a
        href="https://www.linkedin.com/in/oshrimoalem/"
        className="blueCircle cursor-pointer p-2 duration-300 ease-in-out hover:scale-105"
      >
        <FaLinkedinIn color="#5651e5" size={20} />
      </a>
      <a
        href="https://github.com/oshri1997"
        className="blueCircle cursor-pointer p-2 duration-300 ease-in-out hover:scale-105"
      >
        <FaGithub color="#5651e5" size={20} />
      </a>
      <a
        href="mailto:oshri19970@gmail.com"
        className="blueCircle cursor-pointer p-2 duration-300 ease-in-out hover:scale-105"
      >
        <AiOutlineMail color="#5651e5" size={20} />
      </a>
      <a
        href="https://www.facebook.com/oshri.moalem"
        className="blueCircle cursor-pointer p-2 duration-300 ease-in-out hover:scale-105"
      >
        <AiFillFacebook color="#5651e5" size={20} />
      </a>
    </>
  );
};

export default ContactBtns;
