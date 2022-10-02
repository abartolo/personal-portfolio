import Image from "next/image";
import React, { useCallback } from "react";

const links = [
  {
    label: "About",
    href: "#",
  },
  {
    label: "Work Experience",
    href: "#",
  },
];

export const PortfolioNav = () => {
  const openResume = useCallback(() => {
    window.open("/pdf/Resume-Alexander-Bartolo.pdf", "_blank");
  }, []);

  return (
    <header className="flex flex-row justify-between items-center p-8">
      <Image
        loader={({ src }) => src}
        src="/images/logo-blue-dark.png"
        alt="Logo"
        width={50}
        height={40}
      />

      <nav>
        {links.map(({ href, label }) => {
          return (
            <a
              key={label}
              className="p-2 text-lg hover:text-orange hover:underline underline-offset-4"
              href={href}
            >
              {label}
            </a>
          );
        })}
        <button
          className="ml-2 p-2 bg-blue-dark hover:bg-orange text-white rounded-md text-md"
          onClick={openResume}
        >
          Resume
        </button>
      </nav>
    </header>
  );
};
