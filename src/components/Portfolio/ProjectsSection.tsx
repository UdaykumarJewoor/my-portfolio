import { ExternalLink, Github, Plane, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Fastays',
      description: 'A comprehensive travel application for booking buses, flights, and hotels with secure authentication, role-based access control, and integrated payment solutions.',
      icon: Plane,
      features: [
        'User authentication and role-based access',
        'Razorpay payment gateway integration',
        'Secure booking APIs with data validation',
        'Real-time availability checking',
        'Email notifications and booking confirmations'
      ],
      technologies: ['Java', 'Spring Boot', 'Microservices', 'PostgreSQL', 'Razorpay API', 'JWT'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      title: 'Resume Parser',
      description: 'An intelligent resume parsing system that automates data extraction from resumes, featuring admin and recruiter panels for streamlined hiring processes.',
      icon: FileText,
      features: [
        'Automated resume data extraction',
        'Admin dashboard for user management',
        'Recruiter panel with advanced filtering',
        'Structured data storage for quick searches',
        'AI-powered skill matching and recommendations'
      ],
      technologies: ['Python', 'Flask', 'PostgreSQL', 'OpenAI API', 'External APIs', 'React'],
      githubUrl: '#',
      liveUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Showcasing my technical expertise through real-world applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="border-border/50 hover:border-primary/50 transition-smooth hover:portfolio-shadow animate-fade-in-up group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                    <project.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
                <p className="text-muted-foreground">{project.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="bg-primary/10 text-primary hover:bg-primary/20 transition-smooth"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                  
                  <Button 
                    size="sm" 
                    className="portfolio-gradient hover:opacity-90 transition-smooth"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;