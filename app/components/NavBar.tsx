import React from "react";
import Link from "next/link";

const NavBar = () => {
  const links = [
    { label: "About", href: "/" },
    { label: "Contact", href: "/" },
    { label: "Blog Posts", href: "/" },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-15 items-center">
      <Link href="/">Sandeep Sandhu</Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            className="text-zinc-500 hover:text-zinc-800 transition-colors"
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
