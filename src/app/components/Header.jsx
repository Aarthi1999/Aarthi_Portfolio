"use client";

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Portal from "./Portal";

export default function Header() {
  const [open, setOpen] = useState(false);

  const headers = ["Home", "Skills", "Projects", "About", "Contact"];
  const scroll = (header) => {
    const section = document.getElementById(header.toLowerCase());
    if (section) {
      const yOffset = -75; // negative = scroll 25px above
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  return (
    <div
      id="header"
      className="fixed top-0 left-0 right-0 z-50 bg-primary h-16"
    >
      <div className="hidden md:flex lg:flex justify-end gap-11 text-white max-w-9/12 mx-auto h-full items-center">
        {headers.map((header) => {
          return (
            <nav
              key={header}
              className="cursor-pointer"
              onClick={() => scroll(header)}
            >
              {header}
            </nav>
          );
        })}
      </div>
      <Portal targetId="mobile-menu">
        <button
          className="md:hidden lg:hidden pl-7 pt-12"
          onClick={() => setOpen(!open)}
        >
          <Bars3Icon className="w-6 h-6 text-white" />
        </button>
      </Portal>
    </div>
  );
}
