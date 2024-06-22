import Link from "next/link";
import ClientLayout from "./clientLayout";
import WhatWeDo from "@/components/whatWeDo/WhatWeDo";


export default function HomePage() {
  return (
    <ClientLayout>
      <main className="flex flex-col justify-center items-center w-full">
        {/* Hero text */}
        <div className="min-h-[calc(100vh+38px)] flex items-center justify-center">
          <div className="flex flex-col justify-center space-y-12 items-center w-[90%] mt-20 ">
            <div className="flex flex-col items-center space-y-8">
              <h1 className="text-primary-obereWhite text-center text-4xl md:text-5xl lg:text-6xl leading-[130%] ">
                Empowering Your{" "}
                <span className="text-blue-600 tracking-wide uppercase">
                  Vision
                </span>
                <br />
                Elevating Your{" "}
                <span className="text-blue-600 tracking-wide uppercase">
                  Brand
                </span>
              </h1>
              <p className="text-primary-obereWhite md:w-[80%] lg:w-[50%] leading-[160%] md:text-[1.01rem] lg:text-[1.05rem] text-center">
                Welcome to{" "}
                <strong className="text-blue-600 text-2xl">Mesh Agency</strong>,
                where creativity meets strategy. We are passionate about
                transforming your ideas into impactful experiences that
                captivate and inspire. Let's collaborate to craft a compelling
                narrative for your brand that resonates with your audience and
                drives results.
              </p>
            </div>

            <div className="pt-8 md:pt-12 flex flex-col space-y-8 lg:w-[70%] justify-center items-center">
              <p className="text-lg md:text-xl lg:text-2xl text-secondary-white text-center">
                Discover Your Potential. Achieve Your Goals.
              </p>

              <Link
                href="/contact"
                className="animate-bounce w-fit text-1xl md:text-3xl shadow-md shadow-black text-primary-obereBlack bg-secondary-white border rounded-lg p-2 hover:shadow-lg hover:bg-transparent hover:text-secondary-white hover:animate-none"
              >
                Contact us <span className="uppercase">NOW!</span>
              </Link>
            </div>
          </div>
        </div>

        <WhatWeDo />
      </main>
    </ClientLayout>
  );
}
