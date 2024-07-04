'use client'

import React from "react";
import Icons from "./icons";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";

export default function Footer() {
  const pathname = usePathname()
  const cureentYear = new Date().getFullYear();
  return (
    <div
      className={
        cn("flex justify-center items-center p-4",
        {"bg-secondary-darkGrey": pathname == "/about" })
      }
    >
      {/*Social Icons*/}
      <div>
        <Icons />
      </div>
      <span className="text-primary-obereGrey">
        All rights reserved &copy; Mesh {cureentYear}
      </span>
    </div>
  );
}
