"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function MobileMenu({
  links,
}: {
  links: { link: string; title: string }[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="lg:hidden">
      <button
        className="text-white"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <Menu />
      </button>
      {/* Menu panel */}
      {open && (
        <div className="absolute left-0 top-full w-full bg-primary text-white p-4">
          <ul className="flex flex-col gap-4">
            {links.map((item, i: number) => (
              <li key={i}>
                <Link href={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
