import Link from "next/link";
import React from "react";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";

const icons = [
  {
    name: "Instagram",
    image: <SlSocialInstagram />,
    url: "https://www.instagram.com/codewithmesh/",
  },
  {
    name: "Facebook",
    image: <SlSocialFacebook />,
    url: "https://web.facebook.com/gabriel.obum.77/",
  },
];

export default function Icons() {
  return (
    <div className="p-2 flex space-x-4">
      {icons.map((icon, index) => (
        <Link
          key={icon.name + index}
          href={icon.url}
          className="text-[1.3rem] text-secondary-white hover:text-opacity-85"
        >
          {icon.image}
        </Link>
      ))}
    </div>
  );
}
