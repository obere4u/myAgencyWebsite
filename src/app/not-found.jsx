import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div>
      Page not found...
      <Link href={"/"}>Return Home</Link>
    </div>
  );
}
