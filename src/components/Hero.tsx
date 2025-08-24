import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  const scrollToEvents = () => {
    document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Peaceful yoga and wellness space" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="hero-text text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
          NamasteSoul
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
          Ancient Wisdom, Modern Wellbeing
        </p>
        <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto">
          Discover the best yoga events in NL
        </p>
        <Button 
          onClick={scrollToEvents}
          className="zen-button text-lg"
          size="lg"
        >
          Explore Events
        </Button>
      </div>
    </section>
  );
};