"use client";
import { useState } from "react";
import { CgClose, CgMenuRight } from "react-icons/cg";
import Link from "next/link";
import { usePathname } from "next/navigation";


const Navbar = () => {
  const pathname = usePathname();
  const [showNavbar, setShowNavbar] = useState(false);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const hideNavbar = () => {
    setShowNavbar(false);
  };

  return (
    <nav className="navbar bg-slate-900">
      <div className="container">
        <div className="logo text-xl">
         Geez-articles
        </div>
        <div className="menu-icon text-xl" onClick={handleShowNavbar}>
          {showNavbar ? <CgClose /> : <CgMenuRight /> }
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <Link
                className={`link ${pathname === "/" ? "active" : ""}`}
                href="/"
                onClick={hideNavbar}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`link ${pathname === "/about" ? "active" : ""}`}
                href="/about"
                onClick={hideNavbar}
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                className={`link ${pathname === "/write" ? "active" : ""}`}
                href="/write"
                onClick={hideNavbar}
              >
                Write
              </Link>
            </li>
            <li>
              <Link
                className={`link ${pathname === "/sign-in" ? "active" : ""}`}
                href="/sign-in"
                onClick={hideNavbar}
              >
                Sign in
              </Link>
            </li>
            <li>
              <Link
                className={`link ${pathname === "/get-started" ? "active" : ""}`}
                href="/get-started"
                onClick={hideNavbar}
              >
                Get started
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
