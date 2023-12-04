"use client";

import Link from "next/link";
import Image from "next/image";
import { links } from "@/constants";

const Header = () => {
  return (
    <>
      <div className="sticky top-0 z-10 bg-white border-b-2  py-5">
        <div className="max-w-5xl flex flex-row justify-between items-center m-auto px-4">
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
    </>
  );
};

export default Header;
