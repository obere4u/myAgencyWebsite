import React from 'react'
import { PricingCard } from '../ui/cards/PricingCard'
import { pricingData } from './pricingData'
import ClientLayout from '@/app/clientLayout'

export default function Pricing() {
  return (
    <ClientLayout>
      <section className="p-8 bg-black">
        <PricingCard items={pricingData} />
      </section>
    </ClientLayout>
  );
}
