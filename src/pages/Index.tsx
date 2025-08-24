import { Hero } from "@/components/Hero";
import { EventsList } from "@/components/EventsList";
import { Newsletter } from "@/components/Newsletter";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <EventsList />
      <Newsletter />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
