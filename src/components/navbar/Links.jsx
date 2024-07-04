"use client";

import { lusitana } from "@/lib/fonts";
import Link from "next/link";
import React, { useState } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

//Links array
const links = [
  {
    title: "about us",
    path: "/about",
  },
  {
    title: "contact us",
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
    <div className="w-1/2 flex ml-auto">
      {/*Desktop menu*/}
      <div className="hidden sm:w-full md:w-[70%] lg:w-[50%] md:ml-auto sm:flex sm:justify-between ">
        {links.map((link, index) => (
          <motion.div
            key={link.title + index}
            whileHover={{ scale: 1.1 }}
            className={cn(
              lusitana.className,
              "w-fit capitalize text-primary-obereGrey hover:text-primary-obereYellow text-xl ",
              {
                "text-primary-obereYellow border-b border-b-primary-obereGrey scale-[1.02]":
                  pathname === link.path,
              }
            )}
          >
            <Link href={link.path}>{link.title}</Link>
          </motion.div>
        ))}
      </div>

      {/*Mobile Links*/}
      <div
        className={`sm:hidden ml-auto text-white ${
          openMobileMenu &&
          "absolute pt-10 top-0 right-0 w-1/2 bg-primary-obereWhite h-screen flex items-start justify-center flex-row-reverse text-black"
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
                  "w-fit flex flex-col my-8 capitalize text-primary-obereGrey hover:text-primary-obereYellow text-xl hover:scale-[1.02] ",
                  {
                    "text-primary-obereYellow border-b border-b-primary-obereGrey scale-[1.02]":
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
