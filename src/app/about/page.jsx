
import React from 'react'
import AboutHero from './components/AboutHero';
import AboutStory from './components/AboutStory';
import ClientLayout from '../clientLayout';
import AboutOurValues from './components/values/AboutOurValues';

export default function AboutPage() {
  return (
    <ClientLayout>
        <AboutHero />
        <AboutStory />
        {/*<AboutOurTeam />*/}
        <AboutOurValues />
        <OurProcessSection />
        <ContactSection />
      
    </ClientLayout>
  );
}



const ValueCard = ({ icon, title, description }) => (
  <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className="mb-4">{icon}</div>
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);


const OurProcessSection = () => (
  <section className="py-16 bg-gray-800 text-center text-white">
    <h2 className="text-4xl font-bold mb-8">Our Process</h2>
    <div className="max-w-3xl mx-auto text-left">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {processSteps.map((step, index) => (
          <ProcessCard
            key={index}
            icon={step.icon}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </div>
  </section>
);

const ProcessCard = ({ icon, title, description }) => (
  <div className="p-6 bg-gray-700 rounded-lg shadow-md">
    <div className="mb-4">{icon}</div>
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const processSteps = [
  {
    icon: <svg>...</svg>,
    title: "Discovery",
    description: "Understanding your needs and goals...",
  },
  {
    icon: <svg>...</svg>,
    title: "Design",
    description: "Creating a visually appealing design...",
  },
  // Add more process steps as needed
];

const ContactSection = () => (
  <section className="py-16 bg-gray-100 text-center">
    <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <form aria-label="Contact Form">
        <div className="mb-4">
          <label
            className="block text-left text-gray-700 mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="w-full px-4 py-2 border rounded-lg"
            type="text"
            id="name"
            name="name"
            required
            aria-required="true"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-left text-gray-700 mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full px-4 py-2 border rounded-lg"
            type="email"
            id="email"
            name="email"
            required
            aria-required="true"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-left text-gray-700 mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="w-full px-4 py-2 border rounded-lg"
            id="message"
            name="message"
            required
            aria-required="true"
          ></textarea>
        </div>
        <button
          className="w-full px-4 py-2 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300"
          type="submit"
        >
          Send Message
        </button>
      </form>
      <div className="mt-8">
        <p className="text-gray-600">
          Address: 123 Mesh Street, Creativity City
        </p>
        <p className="text-gray-600">Phone: (123) 456-7890</p>
        <p className="text-gray-600">Email: info@meshagency.com</p>
        <div className="mt-4 flex justify-center space-x-4">
          {/* Add social media icons here */}
        </div>
      </div>
    </div>
  </section>
);