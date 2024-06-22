"use client";

import { lusitana } from "@/lib/fonts";
import Link from "next/link";
import React, { useState } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

//Links array
const links = [
  {
    title: "about",
    path: "/about",
  },
  {
    title: "contact",
    path: "/contact",
  },
  {
    title: "blog",
    path: "/blog",
  },
];

export default function Links() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const pathname = usePathname();

  return (
    <div>
      {/*Desktop menu*/}
      <div className="hidden md:block">
        {links.map((link, index) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            className={clsx(
              lusitana.className,
              "w-fit inline-flex mx-8 capitalize text-primary-obereGrey hover:text-secondary-white text-xl ",
              {
                "text-primary-obereWhite border-b border-b-primary-obereGrey scale-[1.02]":
                  pathname === link.path,
              }
            )}
          >
            <Link
              href={link.path}
              key={link.title + index}
            >
              {link.title}
            </Link>
          </motion.div>
        ))}
      </div>

      {/*Mobile Links*/}
      <div
        className={`md:hidden ${
          openMobileMenu &&
          "absolute pt-10 top-0 right-0 w-1/2 bg-primary-obereWhite h-screen flex items-start justify-center flex-row-reverse"
        }`}
      >
        <button onClick={() => setOpenMobileMenu((prev) => !prev)}>Menu</button>

        {openMobileMenu && (
          <div className="mt-8">
            {links.map((link, index) => (
              <Link
                index={link.title + index}
                href={link.path}
                className={clsx(
                  lusitana.className,
                  "w-fit flex flex-col my-8 capitalize text-primary-obereGrey hover:text-secondary-darkGrey text-xl hover:scale-[1.02] ",
                  {
                    "text-secondary-darkGrey border-b border-b-primary-obereGrey scale-[1.02]":
                      pathname === link.path,
                  }
                )}
              >
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
