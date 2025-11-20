import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Monitor,
  Server,
  Database,
  Settings,
  Terminal,
} from "lucide-react";
import cloudinaryAssets from "../assets/cloudinary-assets.json";

interface SkillCategory {
  title: string;
  skills: Skill[];
  icon: any;
  color: string;
}

interface Skill {
  name: string;
  image?: string;
}

const SkillsSection: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", image: cloudinaryAssets["java-logo"] },
        { name: "JavaScript", image: cloudinaryAssets.javascript },
        { name: "TypeScript", image: cloudinaryAssets["typescript-logo"] },
      ],
      icon: Code2,
      color: "text-matrix-green",
    },
    {
      title: "Frontend Technologies",
      skills: [
        { name: "HTML5", image: cloudinaryAssets.html5 },
        { name: "CSS3", image: cloudinaryAssets.css3 },
        { name: "React", image: cloudinaryAssets["react-logo"] },
        { name: "Next.js", image: cloudinaryAssets["nextjs-logo"] },
        { name: "Bootstrap", image: cloudinaryAssets.bootstrap },
        { name: "Tailwind", image: cloudinaryAssets["tailwind-logo"] },
        { name: "Material UI", image: cloudinaryAssets["material-ui-logo"] },
        { name: "Shadcn UI", image: cloudinaryAssets["shadcn-ui-logo"] },
      ],
      icon: Monitor,
      color: "text-blue-400",
    },
    {
      title: "Backend Technologies",
      skills: [
        { name: "Node.js", image: cloudinaryAssets.nodejs },
        { name: "Express", image: cloudinaryAssets["express-logo"] },
        { name: "REST APIs", image: cloudinaryAssets["api-logo"] },
        { name: "JWT", image: cloudinaryAssets["jwt-logo"] },
      ],
      icon: Server,
      color: "text-purple-400",
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", image: cloudinaryAssets["mysql-logo-1"] },
        { name: "MongoDB", image: cloudinaryAssets["mongodb-logo"] },
        { name: "PostgreSQL", image: cloudinaryAssets["postgresql-logo"] },
      ],
      icon: Database,
      color: "text-orange-400",
    },
    {
      title: "Search & Data Processing",
      skills: [
        { name: "pgvector", image: cloudinaryAssets["pgvector-logo"] },
        {
          name: "PostgreSQL Full-Text Search",
          image: cloudinaryAssets["postgresql-fulltext-logo"],
        },
        { name: "D3.js", image: cloudinaryAssets["d3js-logo"] },
      ],
      icon: Database,
      color: "text-yellow-400",
    },
    {
      title: "State Management",
      skills: [
        { name: "Redux", image: cloudinaryAssets["redux-logo"] },
        { name: "Context API", image: cloudinaryAssets["context-api-logo"] },
        { name: "Zustand", image: cloudinaryAssets["zustand-logo"] },
      ],
      icon: Settings,
      color: "text-pink-400",
    },
    {
      title: "Architecture & Infra",
      skills: [
        { name: "AWS", image: cloudinaryAssets.aws },
        { name: "Docker", image: cloudinaryAssets["docker-logo"] },
        { name: "Kubernetes", image: cloudinaryAssets["kubernetes-logo"] },
        {
          name: "Microservices",
          image: cloudinaryAssets["microservices-logo"],
        },
      ],
      icon: Settings,
      color: "text-indigo-400",
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", image: cloudinaryAssets.git },
        { name: "GitHub", image: cloudinaryAssets["github-logo"] },
        { name: "Kafka", image: cloudinaryAssets["kafka-logo"] },
        { name: "Postman", image: cloudinaryAssets["postman-logo"] },
      ],
      icon: Terminal,
      color: "text-cyan-400",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-code-bg relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div
              key={i}
              className="border border-terminal-border/20 hover:border-matrix-green/30 transition-colors duration-300"
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Code2 className="w-8 h-8 text-matrix-green" />
            <h2 className="text-4xl md:text-5xl font-bold text-white font-mono">
              Technical Skills
            </h2>
            <Code2 className="w-8 h-8 text-matrix-green" />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-matrix-green to-blue-400 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-neon transition-all duration-300 border-terminal-border bg-dark-card hover:border-matrix-green/50 hover:scale-105"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 rounded-lg bg-matrix-green/10 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent
                          className={`w-6 h-6 ${category.color}`}
                        />
                      </div>
                      <CardTitle className="text-lg font-semibold text-white font-mono">
                        {category.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3">
                      {category.skills.map((skill, skillIndex) => {
                        const isPlaceholder =
                          skill.image?.startsWith("PLACEHOLDER_");
                        return (
                          <div
                            key={skillIndex}
                            className="flex items-center space-x-3 p-3 bg-terminal rounded-lg hover:bg-terminal-border transition-colors duration-200 group"
                          >
                            {skill.image && !isPlaceholder ? (
                              <img
                                src={skill.image}
                                alt={skill.name}
                                className="w-6 h-6 object-contain group-hover:scale-110 transition-transform duration-200"
                              />
                            ) : (
                              <div className="w-6 h-6 flex items-center justify-center">
                                <div className="w-2 h-2 bg-matrix-green rounded-full"></div>
                              </div>
                            )}
                            <span className="text-gray-300 text-sm font-mono">
                              {skill.name}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Summary Section */}
          <Card className="shadow-neon-lg border-terminal-border bg-gradient-to-r from-matrix-green/20 to-blue-400/20">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Terminal className="w-6 h-6 text-matrix-green" />
                <span className="text-matrix-green font-mono text-sm">
                  skills.summary
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white font-mono">
                Full Stack Expertise
              </h3>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6">
                Proficient in modern web technologies with a focus on creating
                scalable, maintainable, and performant applications. Experienced
                in both frontend and backend development with a strong
                understanding of database design and cloud technologies.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge
                  variant="secondary"
                  className="bg-matrix-green/20 text-matrix-green hover:bg-matrix-green/30 px-4 py-2 font-mono border border-matrix-green/30"
                >
                  React Ecosystem
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-blue-400/20 text-blue-400 hover:bg-blue-400/30 px-4 py-2 font-mono border border-blue-400/30"
                >
                  Node.js Backend
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-purple-400/20 text-purple-400 hover:bg-purple-400/30 px-4 py-2 font-mono border border-purple-400/30"
                >
                  Database Design
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-orange-400/20 text-orange-400 hover:bg-orange-400/30 px-4 py-2 font-mono border border-orange-400/30"
                >
                  Cloud Technologies
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-pink-400/20 text-pink-400 hover:bg-pink-400/30 px-4 py-2 font-mono border border-pink-400/30"
                >
                  DevOps & CI/CD
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
