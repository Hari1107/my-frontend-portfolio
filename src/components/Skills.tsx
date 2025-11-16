import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Wrench, Database, Layers } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      skills: ["Java", "Python", "JavaScript"],
      color: "text-primary"
    },
    {
      icon: Layers,
      title: "Web Technologies & Frameworks",
      skills: ["Django Rest Framework", "Angular v16", "HTML", "CSS"],
      color: "text-secondary"
    },
    {
      icon: Wrench,
      title: "IDEs & Tools",
      skills: ["VS Code", "BitBucket", "Git", "GitHub", "Postman", "Android Studio"],
      color: "text-accent"
    },
    {
      icon: Database,
      title: "Database",
      skills: ["SQL", "Firebase", "MySQL Workbench"],
      color: "text-primary"
    },
    {
      icon: Code2,
      title: "Additional Skills",
      skills: ["API Design", "UI Design", "WebSocket", "FastAPI", "Technical Documentation"],
      color: "text-secondary"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="p-6 shadow-elegant hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 bg-primary/10 rounded-lg ${category.color}`}>
                    <category.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge 
                      key={idx} 
                      variant="secondary"
                      className="text-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
