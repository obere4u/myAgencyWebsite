
import React from 'react'
import AboutHero from './components/AboutHero';
import AboutStory from './components/AboutStory';
import ClientLayout from '../clientLayout';
import AboutOurValues from './components/values/AboutOurValues';
import OurProcess from './components/process/OurProcess';

export default function AboutPage() {
  return (
    <ClientLayout>
        <AboutHero />
        <AboutStory />
        {/*<AboutOurTeam />*/}
        <AboutOurValues />
        <OurProcess />      
    </ClientLayout>
  );
}