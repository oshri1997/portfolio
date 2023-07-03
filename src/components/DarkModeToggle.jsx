"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const DarkModeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const handelTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };
  return (
    <div>
      <div className="relative flex h-[24px] w-[42px] cursor-pointer items-center justify-between rounded-[30px] border border-bluep p-[2px]">
        <div className="text-[12px]">🌙</div>
        <div className="text-[12px]">🔆</div>
        <div
          onClick={handelTheme}
          className={`absolute  ${
            resolvedTheme === "dark" ? "left-[2px]" : "right-[2px]"
          }  h-[15px] w-[15px] rounded-full bg-bluep`}
        />
      </div>
    </div>
  );
};

export default DarkModeToggle;
