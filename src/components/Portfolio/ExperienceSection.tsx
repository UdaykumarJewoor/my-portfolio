import { Briefcase, MapPin, Calendar, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ExperienceSection = () => {
  const responsibilities = [
    'Developed robust REST APIs and microservices using Java & Spring Boot',
    'Implemented secure authentication systems with JWT tokens',
    'Integrated Razorpay payment gateway for seamless transactions',
    'Applied data encryption techniques to enhance security',
    'Collaborated with cross-functional teams to deliver scalable solutions',
    'Optimized application performance and database queries'
  ];

  return (
    <section id="experience" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Professional journey in software development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-border/50 hover:border-primary/50 transition-smooth animate-fade-in-up">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Briefcase className="h-8 w-8 text-primary" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">
                    Software Engineer
                  </h3>
                  <p className="text-lg text-primary font-semibold mb-4">
                    HG Infotech
                  </p>
                  
                  <div className="space-y-3 text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>December 2022 - Present</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>Bangalore, Karnataka</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-4">Key Responsibilities & Achievements:</h4>
                    <div className="grid gap-3">
                      {responsibilities.map((responsibility, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{responsibility}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Impact:</strong> Successfully delivered multiple 
                      full-stack applications with robust backend systems, contributing to improved 
                      user experience and enhanced security measures across projects.
                    </p>
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

export default ExperienceSection;