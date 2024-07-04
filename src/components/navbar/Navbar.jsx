import Link from "next/link";
import React from "react";
import Links from "./Links";
import { lusitana } from "@/lib/fonts";
import clsx from "clsx";

export default function Navbar() {
  return (
    <nav className="bg-primary-obereBlack fixed z-[999] p-8 w-full flex items-center ">
      {/*Logo*/}
      {/*
       * &#123; is the left hand curly bracket
       * &#125; is the right hand curly bracket
       */}
      <Link
        href={"/"}
        className={clsx(lusitana.className, "text-primary-obereGrey")}
      >
        <span
          className="text-blue-700"
          sr-hidden="true"
        >
          &#123;
        </span>
        <span>Mesh</span>
        <span
          className="text-blue-700"
          sr-hidden="true"
        >
          &#125;
        </span>
      </Link>

      {/*Links*/}
      <div className="flex flex-1">
        <Links />
      </div>
    </nav>
  );
}
