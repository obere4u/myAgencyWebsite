import React from 'react'

export default function OurTeamCard({name, role, bio}) {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{role}</p>
      <p className="text-gray-700">{bio}</p>
    </div>
  );
}
