import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "@/components/ui/badge";

interface SkillCategory {
  title: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  image: string;
}

const SkillsSection: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", image: "/src/assets/img/java-logo.png" },
        { name: "JavaScript", image: "/src/assets/img/javascript.png" },
        { name: "TypeScript", image: "/src/assets/img/typescript-logo.png" },
      ],
    },
    {
      title: "Frontend Technologies",
      skills: [
        { name: "HTML5", image: "/src/assets/img/html5.png" },
        { name: "CSS3", image: "/src/assets/img/css3.png" },
        { name: "React", image: "/src/assets/img/react-logo.png" },
        { name: "Next.js", image: "/src/assets/img/nextjs-logo.png" },
        { name: "Bootstrap", image: "/src/assets/img/bootstrap.png" },
        { name: "Tailwind", image: "/src/assets/img/tailwind-logo.png" },
      ],
    },
    {
      title: "Backend Technologies",
      skills: [
        { name: "Node.js", image: "/src/assets/img/nodejs.png" },
        { name: "Express", image: "/src/assets/img/express-logo.png" },
        { name: "REST APIs", image: "/src/assets/img/api-logo.png" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", image: "/src/assets/img/mysql-logo-1.png" },
        { name: "MongoDB", image: "/src/assets/img/mongodb-logo.png" },
        { name: "PostgreSQL", image: "/src/assets/img/postgresql-logo.png" },
      ],
    },
    {
      title: "State Management",
      skills: [
        { name: "Redux", image: "/src/assets/img/redux-logo.png" },
        { name: "Context API", image: "/src/assets/img/context-api-logo.png" },
        { name: "Zustand", image: "/src/assets/img/zustand-logo.png" },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", image: "/src/assets/img/git.png" },
        { name: "GitHub", image: "/src/assets/img/github-logo.png" },
        { name: "Docker", image: "/src/assets/img/docker-logo.png" },
        { name: "AWS", image: "/src/assets/img/aws.png" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I work with
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card
                key={categoryIndex}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:scale-105"
              >
                <CardHeader className="pb-6">
                  <CardTitle className="text-xl font-semibold text-gray-800 text-center">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="group/skill flex flex-col items-center p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 hover:scale-105"
                      >
                        <div className="w-16 h-16 mb-3 flex items-center justify-center bg-white rounded-lg shadow-md group-hover/skill:shadow-lg transition-shadow duration-300">
                          <img
                            alt={skill.name}
                            src={skill.image}
                            className="w-10 h-10 object-contain"
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-700 text-center">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Skills Summary */}
          <Card className="mt-12 shadow-xl border-0 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Full Stack Expertise
              </h3>
              <p className="text-lg md:text-xl text-indigo-100 leading-relaxed max-w-3xl mx-auto mb-6">
                With proficiency across the entire technology stack, I can build
                complete web applications from database design to user interface
                implementation.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge
                  variant="secondary"
                  className="bg-white/20 text-white hover:bg-white/30 px-4 py-2"
                >
                  Frontend Development
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-white/20 text-white hover:bg-white/30 px-4 py-2"
                >
                  Backend Development
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-white/20 text-white hover:bg-white/30 px-4 py-2"
                >
                  Database Design
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-white/20 text-white hover:bg-white/30 px-4 py-2"
                >
                  Cloud Deployment
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-white/20 text-white hover:bg-white/30 px-4 py-2"
                >
                  DevOps Practices
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
