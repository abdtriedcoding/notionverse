import { footerNavigation } from "@/constants";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t-2">
      <div className="max-w-5xl m-auto py-6 px-4 sm:px-6 md:flex md:items-center md:justify-between">
        <div className="flex justify-center space-x-6 md:order-2">
          {footerNavigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-4 w-4" aria-hidden="true" />
            </Link>
          ))}
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-sm text-gray-500">
            &copy; Created by Abdullah in 2023
          </p>
        </div>
      </div>
    </footer>
  );
}
