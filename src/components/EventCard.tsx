import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

interface EventCardProps {
  name: string;
  date: string;
  city: string;
  bookingUrl: string;
  type: string;
  duration: string;
  price: string;
  language: string;
  description?: string;
}

export const EventCard = ({ name, date, city, bookingUrl, type, duration, price, language, description }: EventCardProps) => {
  return (
    <Card className="zen-card hover:shadow-lg transition-all duration-300 group">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
          {name}
        </h3>
        
        <div className="flex items-center gap-2 text-muted-foreground mb-2">
          <Calendar className="h-4 w-4" />
          <span className="text-sm">{date}</span>
        </div>
        
        <div className="flex items-center gap-2 text-muted-foreground mb-2">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{city}</span>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Type:</span>
            <span className="font-medium text-foreground">{type}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Duration:</span>
            <span className="font-medium text-foreground">{duration}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Price:</span>
            <span className="font-medium text-foreground">{price}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Language:</span>
            <span className="font-medium text-foreground">{language}</span>
          </div>
        </div>
        
        {description && (
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {description}
          </p>
        )}
        
        <Button 
          className="w-full zen-button" 
          onClick={() => window.open(bookingUrl, '_blank')}
        >
          Book Event
          <ExternalLink className="h-4 w-4 ml-2" />
        </Button>
      </CardContent>
    </Card>
  );
};