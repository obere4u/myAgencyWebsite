"use client";

import { motion, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

export default function AboutStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  const variants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.3,
      },
    },
  };

  const title = {
    hidden: { opacity: 0, y: -100 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const para = {
    hidden: { opacity: 0, x: -100 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);

  return (
    <section className=" p-8  bg-secondary-lightGrey text-center">
      <motion.div
        variants={variants}
        animate={isInView ? "show" : "hidden"}
        ref={ref}
        className="my-8"
      >
        <motion.h2
          variants={title}
          className="text-4xl font-bold mb-8"
        >
          Our Story
        </motion.h2>
        <motion.div className="max-w-[52em] md:p-4 mx-auto text-left">
          <motion.p
            variants={para}
            className="text-xl text-gray-800 mb-6"
          >
            Mesh Agency was founded with a{" "}
            <strong>vision to innovate and elevate digital experiences</strong>.
            Our mission is to blend creativity with strategy to deliver
            exceptional results for our clients. Over the years, we've grown
            into a diverse team of passionate professionals dedicated to pushing
            the boundaries of what's possible.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
