import { ServiceCard } from "../ui/cards/ServiceCard";

const services = [
  {
    title: "Web Development",
    description:
      "Transforming ideas into visually stunning, high-performance websites that captivate and engage audiences across all devices.",
  },
  {
    title: "SEO",
    description:
      "Enhancing your online presence with cutting-edge SEO strategies that drive organic traffic and elevate your search engine rankings.",
  },
  {
    title: "Content Creation",
    description:
      "Crafting powerful, persuasive content that resonates with your audience and strengthens your brand's voice.",
  },
  {
    title: "Branding",
    description:
      "Developing a unique and cohesive brand identity that distinguishes your business and fosters customer loyalty.",
  },
  {
    title: "Social Media Management",
    description:
      "Creating and managing dynamic social media campaigns that increase engagement, grow your following, and boost brand awareness.",
  },
  {
    title: "Digital Marketing",
    description:
      "Implementing comprehensive digital marketing strategies that drive conversions and maximize your ROI through data-driven insights.",
  },
];
  
export default function Services() {
   return (
    <section className="text-center" >
      <h2 className="text-4xl font-bold mb-8">Our Services</h2>
      <ServiceCard items={services} />
    </section>
  );
}
