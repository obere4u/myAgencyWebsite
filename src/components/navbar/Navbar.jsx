import Link from "next/link";
import React from "react";
import Links from "./Links";
import { lusitana } from "@/lib/fonts";

export default function Navbar() {
  return (
    <nav className="bg-inherit fixed z-[999] w-full flex items-center p-4">
      {/*Logo*/}
      <Link
        href={"/"}
        className={`${lusitana.className} text-primary-obereGrey font-bold`}
      >
          Tochi
      </Link>

      {/*Links*/}
      <div className="ml-auto ">
        <Links />
      </div>
    </nav>
  );
}
