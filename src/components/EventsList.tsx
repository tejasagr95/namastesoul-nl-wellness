import { EventCard } from "./EventCard";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const upcomingEvents = [
  {
    name: "3-Day Spiritual Yoga Awakening Meditation Retreat",
    date: "Sept 20–22, 2025",
    city: "De Lutte, Overijssel",
    bookingUrl: "https://bookretreats.com/yoga-retreat-netherlands",
    description: "A transformative 3-day journey combining spiritual yoga and meditation practices."
  },
  {
    name: "3-Day Re-Connect to Your True Nature Retreat",
    date: "September 2025",
    city: "Huppel, Netherlands",
    bookingUrl: "https://bookyogaretreats.com/reconnect-nature",
    description: "Reconnect with your authentic self through nature-based yoga and mindfulness."
  },
  {
    name: "4-Day Reconnect and Renew Retreat for Women",
    date: "Starts Sept 22, 2025",
    city: "Domburg, Netherlands",
    bookingUrl: "https://bookyogaretreats.com/women-retreat",
    description: "A nurturing retreat designed specifically for women to reconnect and renew."
  },
  {
    name: "3-Day Yoga, Meditation & Mindfulness Retreat",
    date: "September 2025",
    city: "Gerkesklooster, Friesland",
    bookingUrl: "https://bookyogaretreats.com/mindfulness-retreat",
    description: "Immerse yourself in yoga, meditation and mindfulness in beautiful Friesland."
  },
  {
    name: "3-Day Ayurveda & Yoga Weekend Retreat",
    date: "September 2025",
    city: "Friesland, Netherlands",
    bookingUrl: "https://bookyogaretreats.com/ayurveda-yoga",
    description: "Ancient Ayurvedic wisdom combined with rejuvenating yoga practices."
  },
  {
    name: "Silence Retreat (5-Day)",
    date: "Sept 19–23, 2025",
    city: "Netherlands",
    bookingUrl: "https://ahymsin.org/silence-retreat",
    description: "A profound 5-day silent retreat in a former monastery setting."
  },
  {
    name: "Find Your Purpose – Bhakti Retreat (3 Days)",
    date: "Sept 26–28, 2025",
    city: "Handel",
    bookingUrl: "https://bookyogaretreats.com/bhakti-retreat",
    description: "Discover your life purpose through devotional yoga and bhakti practices."
  },
  {
    name: "2-Day Compassionate Communication Workshop",
    date: "Sept 10–11, 2025",
    city: "Netherlands",
    bookingUrl: "https://hridaya-yoga.com/workshop",
    description: "Learn the art of compassionate communication through mindful dialogue."
  },
  {
    name: "4-Day Yoga Vipassana Retreat by DSY",
    date: "September 2025",
    city: "Utrecht, Netherlands",
    bookingUrl: "https://bookretreats.com/vipassana-utrecht",
    description: "Deep meditation practice combining yoga with Vipassana insight meditation."
  },
  {
    name: "1-Week Ashtanga Primary Series Intensive",
    date: "Sept 16–22, 2025",
    city: "Amsterdam",
    bookingUrl: "https://davidandjelenayoga.com/ashtanga-intensive",
    description: "Intensive week-long immersion into Ashtanga Primary Series practice."
  }
];

export const EventsList = () => {
  const [selectedCity, setSelectedCity] = useState<string>("all");
  
  // Extract unique cities for filter
  const cities = ["all", ...Array.from(new Set(upcomingEvents.map(event => event.city)))];
  
  // Filter events based on selected city
  const filteredEvents = selectedCity === "all" 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.city === selectedCity);

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="hero-text text-4xl md:text-5xl font-bold text-foreground mb-4">
            Upcoming Events
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover transformative yoga and wellness experiences across the Netherlands
          </p>
        </div>
        
        {/* City Filter */}
        <div className="flex justify-center mb-12">
          <div className="w-64">
            <Select value={selectedCity} onValueChange={setSelectedCity}>
              <SelectTrigger className="w-full bg-background border-border">
                <SelectValue placeholder="Filter by city" />
              </SelectTrigger>
              <SelectContent className="bg-background border-border shadow-lg z-50">
                <SelectItem value="all" className="text-foreground hover:bg-muted">All Cities</SelectItem>
                {cities.slice(1).map((city) => (
                  <SelectItem 
                    key={city} 
                    value={city}
                    className="text-foreground hover:bg-muted"
                  >
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <EventCard
              key={index}
              name={event.name}
              date={event.date}
              city={event.city}
              bookingUrl={event.bookingUrl}
              description={event.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};