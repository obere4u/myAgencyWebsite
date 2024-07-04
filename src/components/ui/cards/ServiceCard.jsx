"use client";

import { cn } from "@/utils/cn";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef } from "react";

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

export const ServiceCard = ({ items, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <AnimatePresence>
      <motion.div
        variants={variants}
        initial={"hidden"}
        animate={isInView ? "show" : "hidden"}
        ref={ref}
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 py-10",
          className
        )}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className=" rounded-lg group block  h-full w-full"
          >
            <Card>
              <CardImage>{item.icon}</CardImage>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          </div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

const Card = ({ className, children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <AnimatePresence>
      <motion.div
        variants={cards}
        initial={"hidden"}
        animate={isInView ? "show" : "hidden"}
        ref={ref}
        whileHover={{ scale: 1.02 }}
        className={cn(
          "rounded-2xl h-full w-full p-4 border border-black overflow-hidden bg-primary-obereBlack",
          className
        )}
      >
        <div className="p-4">{children}</div>
      </motion.div>
    </AnimatePresence>
  );
};

const CardImage = ({ className, children }) => {
  return <span className={cn("w-full mt-4", className)}>{children}</span>;
};

const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-base",
        className
      )}
    >
      {children}
    </p>
  );
};

export { Card, CardTitle, CardImage, CardDescription };
