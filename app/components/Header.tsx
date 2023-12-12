import Link from "next/link";
import Image from "next/image";
import { links } from "@/constants";

const Header = () => {
  return (
    <>
      <div className="sticky top-0 z-10 bg-white border-b-2 py-5">
        <div className="max-w-5xl flex flex-row justify-between items-center m-auto px-4">
          {/* Logo */}
          <div>
            <Link className="hidden sm:block" href="/">
              <Image
                src="/logo.svg"
                width={150}
                height={150}
                alt="notionverse"
              />
            </Link>

            <Link className="sm:hidden" href="/">
              <Image
                src="/smallLogo.svg"
                width={28}
                height={28}
                alt="notionverse"
              />
            </Link>
          </div>

          {/* Navlinks */}
          <div className="flex-shrink-0">
            <ul className="flex flex-row space-x-4">
              {links.map((link) => (
                <li
                  key={link.id}
                  className="block hover:text-sky-600 font-medium"
                >
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
