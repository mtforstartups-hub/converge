"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "./ui/Button";
import MobileMenu from "./MobileMenu";
import Image from "next/image";

const menuLinks = [
  { title: "Product", link: "/product" },
  { title: "Intelligence", link: "/intelligence" },
  { title: "Industries", link: "/industries" },
  { title: "Proof", link: "/proof" },
  { title: "Platform", link: "/platform" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger on initial load to handle cases where the user starts halfway down the page
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-[0.5px] ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-md border-white/20 shadow-lg py-3"
          : "bg-transparent border-transparent py-4"
      }`}
    >
      <div className="mx-auto max-w-95/100 md:max-w-5/6 text-white flex justify-between items-center px-4 md:px-6 lg:px-10">
        <Link href="/" className="text-xl">
          <Image
            src="/images/logo.svg"
            alt="Converge Logo"
            width={160}
            height={80}
            className="w-30 md:w-40 h-auto"
          />
        </Link>
        <nav className="hidden lg:block">
          <ul className="flex gap-8">
            {menuLinks.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.link}
                  className="text-white/80 hover:text-white"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden lg:flex justify-end items-center gap-5">
          <button className="cursor-pointer">Login</button>
          <Button href="/live-deal" title="See it on a live deal" />
        </div>

        <MobileMenu links={menuLinks} />
      </div>
    </header>
  );
}
