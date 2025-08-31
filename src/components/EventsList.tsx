import { EventCard } from "./EventCard";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const upcomingEvents = [
  {
    name: "3-Day Spiritual Yoga Awakening Meditation Retreat",
    date: "Sept 20–22, 2025",
    city: "De Lutte, Overijssel",
    type: "Retreat",
    duration: "3 days",
    price: "€350",
    language: "English / Dutch",
    bookingUrl: "https://bookretreats.com/yoga-retreat-netherlands",
    description: "A transformative 3-day journey combining spiritual yoga and meditation practices."
  },
  {
    name: "3-Day Re-Connect to Your True Nature Retreat",
    date: "Sept (multiple starts)",
    city: "Huppel, Netherlands",
    type: "Retreat",
    duration: "3 days",
    price: "€400",
    language: "English",
    bookingUrl: "https://bookyogaretreats.com/reconnect-nature",
    description: "Reconnect with your authentic self through nature-based yoga and mindfulness."
  },
  {
    name: "4-Day Reconnect and Renew Retreat for Women",
    date: "Starts Sept 22, 2025",
    city: "Domburg, Zeeland",
    type: "Retreat (Women)",
    duration: "4 days",
    price: "€550",
    language: "Dutch / English",
    bookingUrl: "https://bookyogaretreats.com/women-retreat",
    description: "A nurturing retreat designed specifically for women to reconnect and renew."
  },
  {
    name: "3-Day Yoga, Meditation & Mindfulness Retreat",
    date: "Sept (multiple starts)",
    city: "Gerkesklooster, Friesland",
    type: "Retreat",
    duration: "3 days",
    price: "€395",
    language: "English",
    bookingUrl: "https://bookyogaretreats.com/mindfulness-retreat",
    description: "Immerse yourself in yoga, meditation and mindfulness in beautiful Friesland."
  },
  {
    name: "3-Day Ayurveda & Yoga Weekend Retreat",
    date: "Sept (multiple starts)",
    city: "Friesland, Netherlands",
    type: "Retreat",
    duration: "3 days",
    price: "€420",
    language: "English",
    bookingUrl: "https://bookyogaretreats.com/ayurveda-yoga",
    description: "Ancient Ayurvedic wisdom combined with rejuvenating yoga practices."
  },
  {
    name: "5-Day Silence Retreat (Vipassana-style)",
    date: "Sept 19–23, 2025",
    city: "Former Monastery, NL",
    type: "Silent Meditation",
    duration: "5 days",
    price: "€600",
    language: "English / Dutch",
    bookingUrl: "https://ahymsin.org/silence-retreat",
    description: "A profound 5-day silent retreat in a former monastery setting."
  },
  {
    name: "3-Day Bhakti 'Find Your Purpose' Retreat with Vedaji",
    date: "Sept 26–28, 2025",
    city: "Handel, Noord-Brabant",
    type: "Bhakti Yoga Retreat",
    duration: "3 days",
    price: "€375",
    language: "English",
    bookingUrl: "https://bookyogaretreats.com/bhakti-retreat",
    description: "Discover your life purpose through devotional yoga and bhakti practices."
  },
  {
    name: "4-Day Yoga Vipassana Retreat by DSY",
    date: "Sept (dates vary)",
    city: "Utrecht, Netherlands",
    type: "Yoga + Vipassana",
    duration: "4 days",
    price: "€500",
    language: "English",
    bookingUrl: "https://bookretreats.com/vipassana-utrecht",
    description: "Deep meditation practice combining yoga with Vipassana insight meditation."
  },
  {
    name: "1-Week Ashtanga Primary Series Intensive",
    date: "Sept 16–22, 2025",
    city: "Amsterdam, Netherlands",
    type: "Intensive Workshop",
    duration: "7 days",
    price: "€700",
    language: "English",
    bookingUrl: "https://davidandjelenayoga.com/ashtanga-intensive",
    description: "Intensive week-long immersion into Ashtanga Primary Series practice."
  },
  {
    name: "2-Day Compassionate Communication Workshop",
    date: "Sept 10–11, 2025",
    city: "Netherlands",
    type: "Workshop",
    duration: "2 days",
    price: "€250",
    language: "English / Dutch",
    bookingUrl: "https://hridaya-yoga.com/workshop",
    description: "Learn the art of compassionate communication through mindful dialogue."
  }
];

export const EventsList = () => {
  const [selectedCity, setSelectedCity] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedDuration, setSelectedDuration] = useState<string>("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("all");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("all");
  
  // Extract unique values for filters
  const cities = ["all", ...Array.from(new Set(upcomingEvents.map(event => event.city)))];
  const types = ["all", ...Array.from(new Set(upcomingEvents.map(event => event.type)))];
  const durations = ["all", ...Array.from(new Set(upcomingEvents.map(event => event.duration)))];
  const languages = ["all", ...Array.from(new Set(upcomingEvents.map(event => event.language)))];
  const priceRanges = ["all", "Under €300", "€300-€500", "€500-€700", "Over €700"];
  
  // Filter events based on all selected filters
  const filteredEvents = upcomingEvents.filter(event => {
    const cityMatch = selectedCity === "all" || event.city === selectedCity;
    const typeMatch = selectedType === "all" || event.type === selectedType;
    const durationMatch = selectedDuration === "all" || event.duration === selectedDuration;
    const languageMatch = selectedLanguage === "all" || event.language === selectedLanguage;
    
    // Price range filtering
    let priceMatch = true;
    if (selectedPriceRange !== "all") {
      const priceValue = parseInt(event.price.replace('€', ''));
      switch (selectedPriceRange) {
        case "Under €300":
          priceMatch = priceValue < 300;
          break;
        case "€300-€500":
          priceMatch = priceValue >= 300 && priceValue <= 500;
          break;
        case "€500-€700":
          priceMatch = priceValue >= 500 && priceValue <= 700;
          break;
        case "Over €700":
          priceMatch = priceValue > 700;
          break;
      }
    }
    
    return cityMatch && typeMatch && durationMatch && languageMatch && priceMatch;
  });

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
        
        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12 max-w-5xl mx-auto">
          {/* City Filter */}
          <Select value={selectedCity} onValueChange={setSelectedCity}>
            <SelectTrigger className="w-full bg-background border-border">
              <SelectValue placeholder="All Cities" />
            </SelectTrigger>
            <SelectContent className="bg-background border-border shadow-lg z-50">
              <SelectItem value="all" className="text-foreground hover:bg-muted">All Cities</SelectItem>
              {cities.slice(1).map((city) => (
                <SelectItem key={city} value={city} className="text-foreground hover:bg-muted">
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Type Filter */}
          <Select value={selectedType} onValueChange={setSelectedType}>
            <SelectTrigger className="w-full bg-background border-border">
              <SelectValue placeholder="All Types" />
            </SelectTrigger>
            <SelectContent className="bg-background border-border shadow-lg z-50">
              <SelectItem value="all" className="text-foreground hover:bg-muted">All Types</SelectItem>
              {types.slice(1).map((type) => (
                <SelectItem key={type} value={type} className="text-foreground hover:bg-muted">
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Duration Filter */}
          <Select value={selectedDuration} onValueChange={setSelectedDuration}>
            <SelectTrigger className="w-full bg-background border-border">
              <SelectValue placeholder="All Durations" />
            </SelectTrigger>
            <SelectContent className="bg-background border-border shadow-lg z-50">
              <SelectItem value="all" className="text-foreground hover:bg-muted">All Durations</SelectItem>
              {durations.slice(1).map((duration) => (
                <SelectItem key={duration} value={duration} className="text-foreground hover:bg-muted">
                  {duration}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Price Filter */}
          <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
            <SelectTrigger className="w-full bg-background border-border">
              <SelectValue placeholder="All Prices" />
            </SelectTrigger>
            <SelectContent className="bg-background border-border shadow-lg z-50">
              <SelectItem value="all" className="text-foreground hover:bg-muted">All Prices</SelectItem>
              {priceRanges.slice(1).map((range) => (
                <SelectItem key={range} value={range} className="text-foreground hover:bg-muted">
                  {range}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Language Filter */}
          <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
            <SelectTrigger className="w-full bg-background border-border">
              <SelectValue placeholder="All Languages" />
            </SelectTrigger>
            <SelectContent className="bg-background border-border shadow-lg z-50">
              <SelectItem value="all" className="text-foreground hover:bg-muted">All Languages</SelectItem>
              {languages.slice(1).map((language) => (
                <SelectItem key={language} value={language} className="text-foreground hover:bg-muted">
                  {language}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <EventCard
              key={index}
              name={event.name}
              date={event.date}
              city={event.city}
              type={event.type}
              duration={event.duration}
              price={event.price}
              language={event.language}
              bookingUrl={event.bookingUrl}
              description={event.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};