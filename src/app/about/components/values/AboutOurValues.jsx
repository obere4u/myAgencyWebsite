import React from "react";
import { valuesData } from "./valuesData";
import { ServiceCard } from "@/components/ui/cards/ServiceCard";

export default function AboutOurValues() {
  return (
    <section className="p-8  bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-8">Our Values</h2>
      <ServiceCard items={valuesData} />
    </section>
  );
}
