"use client";

import * as React from "react";
import { useState } from "react";
import Link from "next/link";

import { navigation, siteConfig } from "@/lib/site";

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="flex w-full justify-center px-4 py-6">
      <div className="relative z-10 flex w-full max-w-[1500px] items-center justify-between gap-6 rounded-full bg-white px-6 py-3 shadow-lg lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-4">
          <div className="h-8 w-8">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle cx="16" cy="16" r="16" fill="url(#paint0_linear)" />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="0"
                  y1="0"
                  x2="32"
                  y2="32"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF9966" />
                  <stop offset="1" stopColor="#FF5E62" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="whitespace-nowrap text-base font-semibold tracking-[-0.02em] text-gray-900">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-6 lg:flex xl:gap-8">
          {navigation.map((item) => (
            <div
              key={item.href}
            >
              <Link
                href={item.href}
                className="whitespace-nowrap text-sm font-medium text-gray-900 transition-colors hover:text-gray-600"
              >
                {item.label}
              </Link>
            </div>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <Link
            href={siteConfig.secondaryCta.href}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-yellow-500 bg-yellow-400 px-5 py-2 text-sm font-semibold text-yellow-950 transition-colors hover:bg-yellow-500"
          >
            {siteConfig.secondaryCta.label}
          </Link>
          <Link
            href={siteConfig.primaryCta.href}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-gray-800"
          >
            {siteConfig.primaryCta.label}
          </Link>
        </div>

        <button
          type="button"
          className="flex items-center lg:hidden"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6 text-gray-900"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M4 7H20M4 12H20M4 17H20"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white px-6 pt-24 lg:hidden">
          <button type="button" className="absolute top-6 right-6 p-2" onClick={toggleMenu}>
            <svg
              className="h-6 w-6 text-gray-900"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
            <div className="flex flex-col space-y-6">
              {navigation.map((item) => (
                <div
                  key={item.href}
                >
                  <Link
                    href={item.href}
                    className="text-base text-gray-900 font-medium"
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}

              <div className="space-y-3 pt-6">
                <Link
                  href={siteConfig.secondaryCta.href}
                  className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-semibold text-yellow-950 bg-yellow-400 rounded-full hover:bg-yellow-500 transition-colors"
                  onClick={toggleMenu}
                >
                  {siteConfig.secondaryCta.label}
                </Link>
                <Link
                  href={siteConfig.primaryCta.href}
                  className="inline-flex items-center justify-center w-full px-5 py-3 text-base text-white bg-black rounded-full hover:bg-gray-800 transition-colors "
                  onClick={toggleMenu}
                >
                  {siteConfig.primaryCta.label}
                </Link>
              </div>
            </div>
          </div>
        )}
    </div>
  );
};

export { Navbar1 };
