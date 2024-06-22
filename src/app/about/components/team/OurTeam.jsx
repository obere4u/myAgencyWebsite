import React from 'react'
import { teamMembers } from './ourTeam'
import OurTeamCard from '../../../../components/ui/cards/OurTeamCard';

export default function OurTeam() {
  return (
    <section className="py-16 bg-primary-obereBlack text-center">
      <h2 className="text-4xl text-secondary-lightGrey font-bold mb-8">Meet Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <OurTeamCard
            key={index}
            name={member.name}
            role={member.role}
            bio={member.bio}
            image={member.image}
          />
        ))}
      </div>
    </section>
  );
}
