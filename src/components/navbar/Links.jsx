"use client";

import { lusitana } from "@/lib/fonts";
import Link from "next/link";
import React from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export default function Links() {
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

  const pathname = usePathname();

  return (
    <div>
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={link.title + index}
          className={clsx(
            lusitana.className,
            "inline-flex mx-8 capitalize text-primary-obereGrey hover:text-secondary-white text-xl hover:scale-[1.02] ",
            {
              "text-primary-obereWhite border-b border-b-primary-obereGrey": pathname === link.path,
            }
          )}
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
}
