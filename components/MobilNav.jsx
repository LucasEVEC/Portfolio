"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  {
    name: "Accueil",
    path: "/",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "CV",
    path: "/resume",
  },
  {
    name: "Mon travail",
    path: "/work",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const MobilNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button
          className="flex justify-center items-center"
          onClick={() => setIsOpen(true)}
        >
          <CiMenuFries className="text-[32px] text-accent" />
        </button>
      </SheetTrigger>
      <SheetContent className="fixed top-0 right-0 w-64 h-full shadow-lg z-50 flex flex-col">
        {/* Logo */}
        <div className="mt-16 mb-16 text-center text-2xl">
          <Link href="/">
            <h1 className="text-black text-3xl font-semibold">
              Lucas<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        {/* Nav */}
        <nav className="text-black flex flex-col justify-center items-center gap-8 mb-64">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`${
                link.path === pathname &&
                "text-accent border-b-2 border-accent"
              } text-xl capitalize hover:text-accent transition-all`}
              onClick={handleLinkClick}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobilNav;
