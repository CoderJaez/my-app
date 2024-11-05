import React from "react";
import Link from "next/link";
const Header: React.FC = () => {
  return (
    <div className="flex justify-between h-10 bg-blue-300 items-center px-4">
      <h1>Brand Name</h1>
      <nav>
        <ul className="flex gap-2">
          <Link href="/" className="hover:pointer">
            Home
          </Link>
          <Link href="/about" className="hover:pointer">
            About
          </Link>
          <Link href="/contact" className="hover:pointer">
            Contact Us
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
