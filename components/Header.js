"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import config from "@/config";
import { suprapower, suprapowerMedium } from "@/app/fonts";

const links = [
  {
    href: "/#lineup",
    label: "Lineup",
  },
  {
    href: "/#faq",
    label: "FAQ",
  },
];

const cta = (
  <Link href="https://www.tickster.com/se/sv/events/tmjyg8tn6x8jfmb/2024-05-30/sthlm-aid">
    <button
      className={`${suprapower.className} whitespace-nowrap btn btn-primary btn-circle  bg-white text-black  hover:bg-[rgb(180,180,180)] p-0 lg:px-14`}
    >
      Get tickets
    </button>
  </Link>
);

// A header with a logo on the left, links in the center (like Pricing, etc...), and a CTA (like Get Started or Login) on the right.
// The header is responsive, and on mobile, the links are hidden behind a burger button.
const Header = () => {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  // setIsOpen(false) when the route changes (i.e: when the user clicks on a link on mobile)
  useEffect(() => {
    setIsOpen(false);
  }, [searchParams]);

  return (
    <header className="bg-black">
      <nav
        className="flex items-center lg:gap-7 justify-between lg:justify-start w-full px-8 py-2"
        aria-label="Global"
      >
        {/* Your logo/name on large screens */}
        <div className="flex gap-2 justify-start">
          <Link
            className={`flex items-center gap-2 shrink-0 ${suprapower.className} text-white`}
            href="/"
            title={`${config.appName} homepage`}
          >
            {/** <Image
              src={logo}
              alt={`${config.appName} logo`}
              className="w-8"
              placeholder="blur"
              priority={true}
              width={32}
              height={32}
            />**/}
            <span className="font-extrabold text-xl">
              STHLM<span className="text-red-600">AID</span>
            </span>
          </Link>
        </div>
        {/* Burger button to open menu on mobile */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setIsOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#fff"
              className="w-6 h-6 text-base-content"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        {/* Your links on large screens */}
        <div
          className={`hidden lg:flex lg:justify-start lg:gap-7 text-white  text-base lg:items-center ${suprapower.className}`}
        >
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className="link text-md font-normal no-underline hover:opacity-70 duration-300 ease-in-out "
              title={link.label}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA on large screens */}
        <div className="hidden lg:flex gap-5 lg:justify-end lg:flex-1">
          <Link href="mailto:sthlmaid@gmail.se">
            <button
              className={`${suprapower.className} font-normal text-md btn px-14 btn-ghost btn-circle text-white`}
            >
              Contact
            </button>
          </Link>
          {cta}
        </div>
      </nav>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`relative z-50 ${isOpen ? "" : "hidden"}`}>
        <div
          className={`fixed inset-y-0 right-0 z-10 w-full px-8 py-4 overflow-y-auto bg-base-200 sm:max-w-sm sm:ring-1 sm:ring-neutral/10 transform origin-right transition ease-in-out duration-300`}
        >
          {/* Your logo/name on small screens */}
          <div className="flex items-center justify-between">
            <Link
              className="flex items-center gap-1 shrink-0 "
              title={`${config.appName} homepage`}
              href="/"
            >
              <span
                className={`${suprapowerMedium.className} font-bold text-xl`}
              >
                STHLM<span className="text-red-600">AID</span>
              </span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5"
              onClick={() => setIsOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Your links on small screens */}
          <div className="flow-root mt-6">
            <div className="py-4 ">
              <div className="flex flex-col gap-y-4 items-start">
                {links.map((link) => (
                  <Link
                    href={link.href}
                    key={link.href}
                    className="link link-hover"
                    title={link.label}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="divider"></div>
            {/* Your CTA on small screens */}
            <div className="flex-row gap-4 flex justify-start items-center">
              <Link href="https://www.tickster.com/se/sv/events/tmjyg8tn6x8jfmb/2024-05-30/sthlm-aid">
                <button className="btn btn-error lg:btn-wide rounded-3xl bg-red-600 border-red-600 hover:bg-red-900 text-white-smoke hover:text-[rgb(200,200,200)] md:text-xl hover:border-red-900">
                  Get Tickets
                </button>
              </Link>
              <Link href="mailto:sthlmaid@gmail.se">
                <button className="btn btn-error lg:btn-wide rounded-3xl bg-red-600 border-red-600 hover:bg-red-900 text-white-smoke hover:text-[rgb(200,200,200)] md:text-xl hover:border-red-900">
                  Contact
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
