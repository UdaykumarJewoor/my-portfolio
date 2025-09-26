import { Code, Server, Database, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Backend developer with 3+ years of experience building scalable web applications'
    },
    {
      icon: Server,
      title: 'Backend Expertise',
      description: 'Proficient in Java, Spring Boot, and microservices architecture'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Experience with PostgreSQL, MongoDB, and data modeling'
    },
    {
      icon: Shield,
      title: 'Security Focus',
      description: 'Implementing JWT authentication and data encryption'
    }
  ];

  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate Software Engineer with 3+ years of experience creating 
            robust web applications and scalable backend systems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left">
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a dedicated Software Engineer with 2+ years of hands-on experience 
                in building comprehensive web solutions. My expertise lies in creating seamless 
                connections between robust backend systems and intuitive frontend interfaces.
              </p>
              <p>
                With a strong foundation in Java and Spring Boot, I specialize in developing 
                RESTful APIs, implementing microservices architecture, and ensuring secure 
                data handling through modern authentication mechanisms.
              </p>
              <p>
                I'm passionate about clean code, scalable architecture, and continuously 
                learning new technologies to stay at the forefront of web development. 
                Currently expanding my expertise in Spring Security and JWT implementation.
              </p>
              <p>
                When I'm not coding, I enjoy exploring new frameworks, contributing to 
                open-source projects, and sharing knowledge with the developer community.
              </p>
            </div>
          </div>

          <div className="animate-fade-in-right">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <Card key={index} className="border-border/50 hover:border-primary/50 transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;