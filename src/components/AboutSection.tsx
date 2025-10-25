import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Target, Lightbulb, Award } from "lucide-react";

const AboutSection: React.FC = () => {
  const aboutPoints = [
    {
      icon: User,
      title: "Who I Am",
      description:
        "I am a passionate Full Stack Developer with expertise in React, Node.js, TypeScript, and AWS. I have a strong foundation in building scalable, high-performance web applications and enjoy tackling complex real-world problems.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Target,
      title: "My Mission",
      description:
        "I'm dedicated to creating innovative solutions that make a real impact. With experience in both frontend and backend development, I bring a comprehensive understanding of modern web technologies and best practices.",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Lightbulb,
      title: "What Drives Me",
      description:
        "I'm passionate about solving complex problems and building applications that users love. I believe in clean code, user-centered design, and continuous learning to stay ahead of technology trends.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Award,
      title: "My Goal",
      description:
        "Looking for opportunities to work on challenging projects that combine my skills in Full Stack Development, providing professional growth, interesting experiences, and the chance to make a meaningful impact through technology.",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Description */}
          <Card className="mb-16 shadow-xl border-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Passionate Developer, Problem Solver, Innovator
              </h3>
              <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
                I am a{" "}
                <span className="font-semibold text-yellow-300">
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
                  className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:scale-105"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`p-3 rounded-lg ${point.bgColor} group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className={`w-6 h-6 ${point.color}`} />
                      </div>
                      <CardTitle className="text-lg font-semibold text-gray-800">
                        {point.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">
                      {point.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Call to Action */}
          <Card className="mt-16 shadow-xl border-0 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Build Something Amazing Together?
              </h3>
              <p className="text-lg md:text-xl text-green-100 leading-relaxed max-w-3xl mx-auto mb-6">
                With experience in both frontend and backend development, I
                bring a comprehensive understanding of modern web technologies
                and best practices.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge
                  variant="secondary"
                  className="bg-white/20 text-white hover:bg-white/30 px-4 py-2"
                >
                  Full Stack Development
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-white/20 text-white hover:bg-white/30 px-4 py-2"
                >
                  Problem Solving
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-white/20 text-white hover:bg-white/30 px-4 py-2"
                >
                  Innovation
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-white/20 text-white hover:bg-white/30 px-4 py-2"
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
