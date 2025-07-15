import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const EducationSection = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-gradient">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Academic foundation that shaped my engineering mindset
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-border/50 hover:border-primary/50 transition-smooth animate-fade-in-up">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">
                    Bachelor of Engineering
                  </h3>
                  <p className="text-lg text-primary font-semibold mb-4">
                    Mechanical Engineering
                  </p>
                  
                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>Basaveshwar Engineering College (Autonomous), Bagalkot, Karnataka</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>2018 - 2022</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;