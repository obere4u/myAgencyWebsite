import Script from "next/script";
import React from "react";

export default function ContactForm() {
  return (
    <section className="w-[50%] mt-[90px] mx-auto">
      <div>
        <h1 className=" text-pretty text-center text-2xl font-black capitalize md:text-4xl lg:mb-4 lg:text-5xl text-primary-obereGrey">
          Got anything to ask?
        </h1>
        <p className="mb-5 text-center md:max-w-3xl w-[70%] mx-auto text-secondary-lightGrey">
          Fill out the form below and clearly describe your problem, include
          your contact details so we can get back to you right away.
        </p>
      </div>
      <Script src="https://tally.so/widgets/embed.js"></Script>
      <iframe
        data-tally-src="https://tally.so/embed/mZVMee?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="324"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      ></iframe>
    </section>
  );
}
