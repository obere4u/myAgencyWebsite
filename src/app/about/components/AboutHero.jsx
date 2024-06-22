import React from 'react'

export default function AboutHero() {
  return (
    <section
      className="relative min-h-[calc(100vh+38px)] bg-cover bg-center"
      style={{ backgroundImage: "url(/developer.jpg)" }}
    >
      <div className="absolute inset-0 bg-primary-obereBlack/90"></div>
      <div className="absolute w-full z-10 flex flex-col items-center justify-center h-full text-primary-obereWhite">
        <h1 className="text-5xl font-bold">Mesh Agency</h1>
        <p className="mt-4 text-lg md:text-xl">
          Innovating the Future of Digital Experiences
        </p>
      </div>
    </section>
  );
}
