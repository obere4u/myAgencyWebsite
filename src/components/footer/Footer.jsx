import React from "react";
import Icons from "./icons";

export default function Footer() {
  const cureentYear = new Date().getFullYear();
  return (
    <div className="flex justify-center items-center p-4">
      {/*Social Icons*/}
      <div>
        <Icons />
      </div>
      <span className="text-primary-obereGrey">All rights reserved &copy; Mesh {cureentYear}</span>
    </div>
  );
}
