import React from "react";
import { processData } from "./processData";
import {
  Card,
  CardDescription,
  CardImage,
  CardTitle,
} from "@/components/ui/cards/ServiceCard";

export default function OurProcess() {
  return (
    <section className="p-8 bg-primary-obereBlack text-center text-white">
      <div className="py-8">
        <h2 className="text-4xl font-bold mb-8">Our Process</h2>
        <div className="text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {processData.map((process, index) => (
              <Card key={process.title + index} className={"bg-secondary-lightGrey"}>
                <CardImage>{process.icon}</CardImage>
                <CardTitle className={"text-secondary-darkGrey text-xl text-center"}>{process.title}</CardTitle>
                <CardDescription className={"text-primary-obereBlack"}>{process.description}</CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
