"use client";

import Link from "next/link";
import Image from "next/image";
import { links } from "@/constants";
import useScrollToTop from "../hook/useScrollToTop";
import { MoveUp } from "lucide-react";

const Header = () => {
  const { showTopButton, handleClickTop } = useScrollToTop();
  return (
    <>
      <div className="sticky top-0 z-10 bg-white border-b-2 py-5">
        <div className="max-w-5xl flex flex-row justify-between items-center m-auto px-4">
          {/* Icon */}
          <div className="flex items-center space-x-3">
            <Link href="/">
              <Image
                src="/favicon.ico"
                width={24}
                height={24}
                alt="notionverse"
              />
            </Link>
            <p className="hidden sm:block">Notionverse</p>
          </div>
          {/* Navlinks */}
          <div className="flex-shrink-0">
            <ul className="flex flex-row">
              {links.map((link) => (
                <li key={link.id} className="block ml-4 text-black nav">
                  <Link href={link.to}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Observer element for IntersectionObserver */}
      <div className="observer-element h-4 md:h-12"></div>

      {/* Back to Top Button */}
      {showTopButton && (
        <button
          className="fixed bottom-4 right-4 bg-gray-800 text-white px-2 py-2 rounded-full shadow-md"
          onClick={handleClickTop}
        >
          <MoveUp />
        </button>
      )}
    </>
  );
};

export default Header;
