import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Target, Lightbulb, Award, Code2, Terminal } from "lucide-react";

const AboutSection: React.FC = () => {
  const aboutPoints = [
    {
      icon: User,
      title: "Who I Am",
      description:
        "I am a passionate Full Stack Developer with expertise in React, Node.js, TypeScript, and AWS. I have a strong foundation in building scalable, high-performance web applications and enjoy tackling complex real-world problems.",
      color: "text-matrix-green",
      bgColor: "bg-matrix-green/10",
    },
    {
      icon: Target,
      title: "My Mission",
      description:
        "I'm dedicated to creating innovative solutions that make a real impact. With experience in both frontend and backend development, I bring a comprehensive understanding of modern web technologies and best practices.",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
    },
    {
      icon: Lightbulb,
      title: "What Drives Me",
      description:
        "I'm passionate about solving complex problems and building applications that users love. I believe in clean code, user-centered design, and continuous learning to stay ahead of technology trends.",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
    },
    {
      icon: Award,
      title: "My Goal",
      description:
        "Looking for opportunities to work on challenging projects that combine my skills in Full Stack Development, providing professional growth, interesting experiences, and the chance to make a meaningful impact through technology.",
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
    },
  ];

  return (
    <section id="about" className="py-20 bg-dark-bg relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
          {Array.from({ length: 64 }).map((_, i) => (
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
            <Terminal className="w-8 h-8 text-matrix-green" />
            <h2 className="text-4xl md:text-5xl font-bold text-white font-mono">
              About Me
            </h2>
            <Terminal className="w-8 h-8 text-matrix-green" />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-matrix-green to-blue-400 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Description */}
          <Card className="mb-16 shadow-neon-lg border-terminal-border bg-terminal">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Code2 className="w-6 h-6 text-matrix-green" />
                <span className="text-matrix-green font-mono text-sm">
                  about.txt
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white font-mono">
                Passionate Developer, Problem Solver, Innovator
              </h3>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-mono">
                I am a{" "}
                <span className="font-semibold text-matrix-green">
                  Full Stack Developer
                </span>{" "}
                with expertise in React, Node.js, TypeScript, and AWS. I have a
                strong foundation in building scalable, high-performance web
                applications and enjoy tackling complex real-world problems.
              </p>
            </CardContent>
          </Card>

          {/* About Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aboutPoints.map((point, index) => {
              const IconComponent = point.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-neon transition-all duration-300 border-terminal-border bg-dark-card hover:border-matrix-green/50 hover:scale-105"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`p-3 rounded-lg ${point.bgColor} group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className={`w-6 h-6 ${point.color}`} />
                      </div>
                      <CardTitle className="text-lg font-semibold text-white font-mono">
                        {point.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 leading-relaxed">
                      {point.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Call to Action */}
          <Card className="mt-16 shadow-neon-lg border-terminal-border bg-gradient-to-r from-matrix-green/20 to-blue-400/20">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white font-mono">
                Ready to Build Something Amazing Together?
              </h3>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6">
                With experience in both frontend and backend development, I
                bring a comprehensive understanding of modern web technologies
                and best practices.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge
                  variant="secondary"
                  className="bg-matrix-green/20 text-matrix-green hover:bg-matrix-green/30 px-4 py-2 font-mono border border-matrix-green/30"
                >
                  Full Stack Development
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-blue-400/20 text-blue-400 hover:bg-blue-400/30 px-4 py-2 font-mono border border-blue-400/30"
                >
                  Problem Solving
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-purple-400/20 text-purple-400 hover:bg-purple-400/30 px-4 py-2 font-mono border border-purple-400/30"
                >
                  Innovation
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-orange-400/20 text-orange-400 hover:bg-orange-400/30 px-4 py-2 font-mono border border-orange-400/30"
                >
                  Continuous Learning
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
