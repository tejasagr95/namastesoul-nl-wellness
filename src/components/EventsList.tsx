import { EventCard } from "./EventCard";

const upcomingEvents = [
  {
    name: "Sunrise Vinyasa Flow",
    date: "March 15, 2024",
    city: "Amsterdam",
    bookingUrl: "https://example.com/sunrise-vinyasa",
    description: "Start your day with energizing vinyasa flow as the sun rises over the city."
  },
  {
    name: "Mindful Meditation Retreat",
    date: "March 22, 2024", 
    city: "Utrecht",
    bookingUrl: "https://example.com/meditation-retreat",
    description: "A full-day retreat focusing on mindfulness and inner peace."
  },
  {
    name: "Yin Yoga & Sound Bath",
    date: "March 28, 2024",
    city: "Rotterdam",
    bookingUrl: "https://example.com/yin-sound-bath",
    description: "Relax deeply with gentle yin poses accompanied by healing sound vibrations."
  },
  {
    name: "Breathwork & Cacao Ceremony",
    date: "April 5, 2024",
    city: "The Hague",
    bookingUrl: "https://example.com/breathwork-cacao",
    description: "Sacred breathwork session combined with ceremonial cacao for heart opening."
  },
  {
    name: "Forest Yoga Experience",
    date: "April 12, 2024",
    city: "Arnhem",
    bookingUrl: "https://example.com/forest-yoga",
    description: "Connect with nature through yoga practice in the beautiful Dutch forests."
  },
  {
    name: "Kundalini Awakening Workshop",
    date: "April 18, 2024",
    city: "Eindhoven",
    bookingUrl: "https://example.com/kundalini-workshop",
    description: "Awaken your inner energy through traditional Kundalini yoga practices."
  }
];

export const EventsList = () => {
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
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