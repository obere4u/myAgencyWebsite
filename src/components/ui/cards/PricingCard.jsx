"use client";
import React, { useRef, useState } from "react";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Link from "next/link";

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cards = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

const checkmarkIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="w-4 h-4 inline-block mr-2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const titleIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="w-6 h-6 inline-block mr-2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 4v16m8-8H4"
    />
  </svg>
);

export const PricingCard = ({ items, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true });

  return (
    <AnimatePresence>
      <motion.div
        variants={variants}
        initial={"hidden"}
        animate={isInView ? "show" : "hidden"}
        ref={ref}
        className={cn(
          "p-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 py-10",
          className
        )}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="rounded-lg group block h-full w-full hover:scale-[1.03] "
          >
            <Card>
              <CardTitle>
                {titleIcon}
                {item.title}
              </CardTitle>
              <CardPrice>{item.price}</CardPrice>
              <CardDescription description={item.features}></CardDescription>
              <CardLink to={item.to}>Contact Us Now</CardLink>
            </Card>
          </div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

const getRelativeCoordinates = (event, referenceElement) => {
  const position = {
    x: event.pageX,
    y: event.pageY,
  };

  const offset = {
    left: referenceElement.offsetLeft,
    top: referenceElement.offsetTop,
    width: referenceElement.clientWidth,
    height: referenceElement.clientHeight,
  };

  let reference = referenceElement.offsetParent;

  while (reference) {
    offset.left += reference.offsetLeft;
    offset.top += reference.offsetTop;
    reference = reference.offsetParent;
  }

  return {
    x: position.x - offset.left,
    y: position.y - offset.top,
    width: offset.width,
    height: offset.height,
    centerX: (position.x - offset.left - offset.width / 2) / (offset.width / 2),
    centerY:
      (position.y - offset.top - offset.height / 2) / (offset.height / 2),
  };
};

const Card = ({ className, children }) => {
  const boxRef = useRef(null);
  const isInView = useInView(boxRef, { once: true });
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
    visible: false,
  });

  const handleMouseMove = (e) => {
    setMousePosition({
      ...getRelativeCoordinates(e, boxRef.current),
      visible: true,
    });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0, visible: false });
  };

  return (
    <AnimatePresence>
      <motion.div
        className="relative w-full h-full rounded-2xl bg-transparent group shadow-md shadow-secondary-blueDark border hover:shadow-spreadShadow"
        ref={boxRef}
        style={{ perspective: 600 }}
        onMouseMove={(e) => handleMouseMove(e)}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.05 }}
        animate={{
          rotateX: mousePosition.centerX * 20,
          rotateY: mousePosition.centerY * 20,
          opacity: isInView ? 1 : 0,
        }}
      >
        <motion.div
          className={cn(
            "bg-transparent rounded-2xl h-full w-full p-4 border border-secondary-blueLight overflow-hidden ",
            className
          )}
          animate={{ opacity: isInView ? 1 : 0 }}
          variants={cards}
        >
          {/* Circle */}
          {mousePosition.visible && (
            <>
              <motion.div
                className="absolute w-[30px] h-[30px] -m-[20px] bg-transparent shadow-inner shadow-secondary-lightGrey rounded-full pointer-events-none"
                style={{
                  left: mousePosition.x,
                  top: mousePosition.y,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ type: "spring" }}
              />

              <motion.div
                className="absolute w-[30px] h-[30px] -m-[20px] bg-transparent shadow-inner shadow-secondary-lightGrey rounded-full pointer-events-none"
                style={{
                  left: mousePosition.x,
                  top: mousePosition.y,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ type: "tween" }}
              />
            </>
          )}

          <div className=" py-2 px-1 h-full flex flex-col">
            {React.Children.map(children, (child) => (
              <motion.div
                transition={{ type: "spring", stiffness: 300 }}
                className="h-full flex flex-col"
              >
                {child}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const CardPrice = ({ className, children }) => {
  return (
    <h4
      className={cn(
        "text-5xl text-center font-bold mt-4 text-secondary-lightGrey",
        className
      )}
    >
      {children}
    </h4>
  );
};

const CardTitle = ({ className, children }) => {
  return (
    <span
      className={cn("text-zinc-600 font-bold tracking-wide mt-2 ", className)}
    >
      {children}
    </span>
  );
};

const CardDescription = ({ className, description }) => {
  return (
    <ul
      className={cn(
        "list-none w-[90%] bg-transparent mt-2 text-primary-obereGrey font-semibold tracking-wide leading-relaxed text-base mb-8",
        className
      )}
    >
      {description.map((feature, index) => (
        <li
          key={index}
          className="flex items-center mt-2"
        >
          {checkmarkIcon}
          {feature}
        </li>
      ))}
    </ul>
  );
};

const CardLink = ({ className, children, to }) => {
  return (
    <Link
      href={to}
      className={cn(
        "mt-auto relative inline-block bg-secondary-blueLight border border-secondary-blueLight text-center rounded-2xl shadow-secondary-blueLight text-secondary-lightGrey py-2 px-4 transform transition-transform",
        " active:scale-95",
        className
      )}
    >
      <span className={cn("relative z-10 text-xl")}>{children}</span>
      <span
        className="absolute inset-0 rounded-2xl bg-secondary-blueDark shadow-lg transform -translate-y-[2px] translate-x-[2px] group-hover:translate-y-[2px] group-hover:translate-x-[2px] transition-transform duration-200"
        aria-hidden="true"
      ></span>
    </Link>
  );
};

export { Card, CardPrice, CardTitle, CardDescription, CardLink };
