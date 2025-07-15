import { 
  Coffee, Database, Code, Globe, 
  Wrench, Palette, Server, Shield 
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Backend Development',
      icon: Server,
      skills: ['Java', 'Spring Boot', 'Spring Framework', 'RESTful APIs', 'Microservices'],
      color: 'text-blue-400'
    },
    {
      title: 'Frontend Development',
      icon: Globe,
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Responsive Design'],
      color: 'text-green-400'
    },
    {
      title: 'Database',
      icon: Database,
      skills: ['PostgreSQL', 'MongoDB', 'SQL', 'Database Design', 'Query Optimization'],
      color: 'text-orange-400'
    },
    {
      title: 'Development Tools',
      icon: Wrench,
      skills: ['Eclipse', 'IntelliJ IDEA', 'VS Code', 'Git', 'Maven', 'Gradle'],
      color: 'text-purple-400'
    },
    {
      title: 'Security & Auth',
      icon: Shield,
      skills: ['JWT', 'Spring Security', 'Data Encryption', 'OAuth', 'Authentication'],
      color: 'text-red-400'
    },
    {
      title: 'Testing & API',
      icon: Code,
      skills: ['Postman', 'Swagger', 'Unit Testing', 'Integration Testing', 'API Documentation'],
      color: 'text-cyan-400'
    },
    {
      title: 'Design & Others',
      icon: Palette,
      skills: ['Figma', 'WordPress', 'Payment Integration', 'Razorpay', 'External APIs'],
      color: 'text-pink-400'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="border-border/50 hover:border-primary/50 transition-smooth hover:portfolio-shadow animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                    <category.icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="bg-muted/50 hover:bg-primary/10 hover:text-primary transition-smooth cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8">Currently Learning</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Spring Security', 'JWT Advanced', 'Docker', 'Kubernetes', 'AWS', 'React Native'].map((skill, index) => (
              <Badge 
                key={index}
                className="bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-smooth"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;