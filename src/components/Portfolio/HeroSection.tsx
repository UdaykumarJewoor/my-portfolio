import { useState, useEffect } from 'react';
import { Download, Github, Linkedin, Mail, ArrowDown, Code, Server, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePicture from '@/assets/uday-profile.jpg';

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const roles = [
    "I'm a Developer!",
    "I'm a Researcher!",
    "I'm a Tech lover!",
    "I'm a Software Engineer!"
  ];

  useEffect(() => {
    let index = 0;
    const currentRole = roles[currentRoleIndex];
    
    const timer = setInterval(() => {
      if (index <= currentRole.length) {
        setDisplayedText(currentRole.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        // Change role after 3 seconds
        setTimeout(() => {
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [currentRoleIndex]);

  // Floating elements data
  const floatingElements = [
    { icon: Code, delay: '0s', duration: '6s', x: '10%', y: '20%' },
    { icon: Server, delay: '2s', duration: '8s', x: '80%', y: '30%' },
    { icon: Database, delay: '4s', duration: '7s', x: '15%', y: '70%' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Orbs */}
        <div className="absolute top-20 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Floating Tech Icons */}
      {floatingElements.map((element, index) => (
        <div
          key={index}
          className="absolute opacity-20 text-primary"
          style={{
            left: element.x,
            top: element.y,
            animation: `float ${element.duration} ease-in-out infinite`,
            animationDelay: element.delay,
          }}
        >
          <element.icon className="w-8 h-8" />
        </div>
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-primary font-medium">Available for opportunities</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="relative">
                <span className="text-gradient bg-clip-text">
                  Udaykumar
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 blur-lg -z-10"></div>
              </span>
            </h1>
            
            <div className="text-2xl lg:text-3xl text-muted-foreground mb-6 h-16 flex items-center justify-center lg:justify-start">
              <span className="relative">
                <span className="border-r-2 border-primary pr-1 animate-pulse">
                  {displayedText}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-pulse"></div>
              </span>
            </div>
            
           <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
  Building seamless web experiences with{' '}
  <span className="text-primary font-semibold">robust backend systems</span>, 
  ensuring scalability, performance, and reliability. Passionate about 
  <span className="text-primary font-semibold"> creating efficient solutions </span> 
  and continuously learning new technologies.
</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                size="lg" 
                className="group relative overflow-hidden portfolio-gradient hover:scale-105 portfolio-shadow transition-all duration-300"
                asChild
              >
                <a href="https://drive.google.com/file/d/1wvusyaYNRbfBAX9wZOp35e2EVr2EriS0/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Download Resume
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="group border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Get In Touch
              </Button>
            </div>
            
            <div className="flex gap-4 justify-center lg:justify-start">
              {[
                { icon: Github, href: 'https://github.com/UdaykumarJewoor', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/in/udaykumar-jewoor', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:udaykumargjewoor@gmail.com', label: 'Email' }
              ].map((social, index) => (
                <Button 
                  key={index}
                  variant="ghost" 
                  size="icon" 
                  className="group relative w-12 h-12 rounded-full hover:bg-primary/10 hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-primary/20"
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    <social.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    <div className="absolute inset-0 rounded-full bg-primary/20 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
                  </a>
                </Button>
              ))}
            </div>
          </div>
          
          {/* Right Content - Enhanced Profile Picture */}
          <div className="flex-1 flex justify-center lg:justify-end animate-fade-in-right">
            <div className="relative group">
              {/* Outer glow ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-primary/50 to-primary rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
              
              {/* Main image container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Rotating border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-transparent to-primary p-1 animate-spin-slow">
                  <div className="w-full h-full rounded-full bg-background"></div>
                </div>
                
                {/* Image */}
                <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-primary/20">
                  <img 
                    src={profilePicture} 
                    alt="Udaykumar Jewoor" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-60"></div>
                </div>
                
                {/* Floating dots */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-primary rounded-full animate-ping"></div>
                <div className="absolute bottom-8 left-8 w-2 h-2 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/3 left-4 w-1.5 h-1.5 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-sm text-muted-foreground font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;