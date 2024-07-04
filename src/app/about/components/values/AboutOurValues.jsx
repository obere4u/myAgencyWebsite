import React from "react";
import { valuesData } from "./valuesData";
import { ServiceCard } from "@/components/ui/cards/ServiceCard";

export default function AboutOurValues() {
  return (
    <section className=" bg-gray-100 px-8 py-16 text-center">
      <h2 className="text-4xl font-bold mb-8">Our Values</h2>
      <div>
        <ServiceCard items={valuesData} />
      </div>
    </section>
  );
}
