import React from "react";
import ContactBtns from "./ContactBtns";

const Footer = () => {
  return (
    <div id="footer" className="w-full border-t border-gray-300/40 p-4">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col-reverse items-center justify-between p-4 md:flex-row">
        <div className="py-4">
          <p className="text-base">Build By Oshri Moalem </p>
        </div>
        <div className="flex w-full max-w-[330px] items-center justify-between py-4">
          <ContactBtns />
        </div>
      </div>
    </div>
  );
};

export default Footer;
