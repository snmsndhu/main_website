"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classnames from "classnames";

const NavBar = () => {
  const currentPath = usePathname();
  const links = [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Blog Posts", href: "/blog" },
  ];
  return (
    <nav className="flex justify-center py-8 text-white bg-black space-x-10 border-b mb-5 px-5 h-15 items-center">
      <Link className="text-2xl font-semibold " href="/">
        Sandeep Sandhu
      </Link>
      <ul className="flex  space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            className={classnames({
              "text-white": link.href === currentPath,
              "text-cream": link.href !== currentPath,
              " hover:text-white transition-colors": true,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
