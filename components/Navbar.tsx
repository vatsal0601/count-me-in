import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.svg";
import { TwitterSVG } from "@components";
import type { FC } from "react";

const Navbar: FC = () => {
  return (
    <header className="py-4 lg:py-8">
      <nav className="container flex items-center justify-between">
        <div className="flex items-center space-x-16">
          <Link href="/">
            <span className="relative block h-20 w-24 lg:h-28 lg:w-24">
              <Image
                src={logo}
                alt="logo"
                fill={true}
              />
            </span>
          </Link>
          <ul className="flex items-center space-x-8">
            <li className="text-xl font-semibold text-neutral-900 transition-colors active:text-pink-brand lg:text-3xl">
              <Link href="/matches">Matches</Link>
            </li>
            <li className="text-xl font-semibold text-neutral-900 transition-colors active:text-pink-brand lg:text-3xl">
              <Link href="/profile">Profile</Link>
            </li>
          </ul>
        </div>
        <button className="group relative">
          <span className="absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform rounded-full bg-neutral-900"></span>
          <span className="relative inline-flex items-center space-x-2 rounded-full border-2 border-neutral-900 bg-blue-twitter px-4 py-2 text-xl font-bold text-white transition-transform group-active:translate-x-1 group-active:translate-y-1">
            <TwitterSVG className="h-5 w-5 lg:h-7 lg:w-7" />
            <span>Log In!</span>
          </span>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
