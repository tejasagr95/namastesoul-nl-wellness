import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="hero-text text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground">
            Have questions about our events or want to collaborate? We'd love to hear from you.
          </p>
        </div>
        
        <Card className="zen-card max-w-md mx-auto">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Email Us
            </h3>
            <a 
              href="mailto:namaste.soul.contact@gmail.com"
              className="text-primary hover:text-primary-hover transition-colors text-lg font-medium"
            >
              namaste.soul.contact@gmail.com
            </a>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};