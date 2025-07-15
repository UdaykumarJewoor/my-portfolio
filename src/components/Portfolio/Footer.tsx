import { ArrowUp, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © 2024 Udaykumar Jewoor. Built with{' '}
              <Heart className="inline h-4 w-4 text-red-500" />{' '}
              using React & Tailwind CSS
            </p>
          </div>
          
          <Button
            variant="outline"
            size="icon"
            onClick={scrollToTop}
            className="hover:bg-primary hover:text-primary-foreground transition-smooth"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;