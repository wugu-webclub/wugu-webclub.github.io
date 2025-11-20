import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Mail, Sparkles } from "lucide-react";
import avatarImg from "@assets/generated_images/Anime_otaku_avatar_f43d1f1c.png";
import starImg from "@assets/generated_images/Kawaii_star_decoration_50642aad.png";
import sparkleImg from "@assets/generated_images/Anime_sparkle_decoration_ff819976.png";

interface HeroProps {
  name: string;
  introduction: string;
  email: string;
}

export default function Hero({ name, introduction, email }: HeroProps) {
  return (
    <section className="relative py-16 md:py-24">
      <div className="absolute top-8 left-8 w-12 h-12 opacity-60 animate-pulse">
        <img src={starImg} alt="" className="w-full h-full" />
      </div>
      <div className="absolute top-20 right-12 w-10 h-10 opacity-60 animate-pulse" style={{ animationDelay: '0.5s' }}>
        <img src={sparkleImg} alt="" className="w-full h-full" />
      </div>
      <div className="absolute bottom-12 left-16 w-8 h-8 opacity-60 animate-pulse" style={{ animationDelay: '1s' }}>
        <img src={sparkleImg} alt="" className="w-full h-full" />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 text-center">
        <Avatar className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-6 border-4 border-primary shadow-xl">
          <AvatarImage src={avatarImg} alt={name} />
          <AvatarFallback className="text-4xl font-display">{name.charAt(0)}</AvatarFallback>
        </Avatar>
        
        <h1 className="text-5xl md:text-7xl font-display text-primary mb-6" data-testid="text-name">
          {name}
        </h1>
        
        <div className="relative inline-block mb-8">
          <div className="bg-accent border-2 border-accent-border rounded-2xl px-8 py-6 shadow-lg max-w-2xl">
            <div className="flex items-start gap-3">
              <Sparkles className="w-6 h-6 text-accent-foreground flex-shrink-0 mt-1" />
              <p className="text-lg md:text-xl font-medium text-accent-foreground" data-testid="text-introduction">
                {introduction}
              </p>
            </div>
          </div>
          <div className="absolute -bottom-2 left-12 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[16px] border-t-accent-border"></div>
        </div>
        
        <Button 
          variant="outline" 
          size="lg" 
          className="rounded-full px-6 py-6 text-base font-semibold shadow-md hover-elevate active-elevate-2"
          data-testid="button-contact"
          onClick={() => window.location.href = `mailto:${email}`}
        >
          <Mail className="w-5 h-5 mr-2" />
          {email}
        </Button>
      </div>
    </section>
  );
}
