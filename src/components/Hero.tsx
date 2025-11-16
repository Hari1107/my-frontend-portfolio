import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Code } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            HARIHARAN K
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4">
            Junior Software Engineer @ CronLabs Solutions
          </p>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Building scalable web applications with Django, Angular, and modern web technologies.
            Passionate about creating efficient, user-centric solutions.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
              asChild
            >
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10"
              asChild
            >
              <a href="#projects">
                View Projects
              </a>
            </Button>
          </div>
          
          <div className="flex gap-6 justify-center">
            <a 
              href="https://github.com/hariharan1107" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com/in/hariharan-k1107" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="https://leetcode.com/hariharan1107" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
            >
              <Code className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
