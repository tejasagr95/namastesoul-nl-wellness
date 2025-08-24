import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      toast({
        title: "Welcome to NamasteSoul!",
        description: "You'll receive the best yoga events in your inbox.",
      });
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <section className="py-20 bg-[var(--zen-gradient)]">
      <div className="max-w-4xl mx-auto px-6">
        <Card className="zen-card">
          <CardContent className="p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Mail className="h-8 w-8 text-primary" />
              </div>
            </div>
            
            <h2 className="hero-text text-3xl md:text-4xl font-bold text-foreground mb-4">
              Stay Connected
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get the top yoga & wellness events in your inbox. Be the first to discover 
              new experiences and transformative practices.
            </p>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="zen-input flex-1"
                  required
                />
                <Button type="submit" className="zen-button whitespace-nowrap">
                  Join Newsletter
                </Button>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-2 text-primary">
                <Check className="h-5 w-5" />
                <span className="font-medium">Successfully subscribed!</span>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};