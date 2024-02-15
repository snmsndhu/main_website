import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <Link href="/">Logo</Link>
      <ul>
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/">Contact</Link>
        </li>
        <li>
          <Link href="/">Blog Posts</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
