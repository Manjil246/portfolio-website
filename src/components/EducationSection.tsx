import React from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import {
  GraduationCap,
  MapPin,
  ExternalLink,
  BookOpen,
  Award,
  Terminal,
} from "lucide-react";

interface Education {
  institution: string;
  location: string;
  degree: string;
  cgpa: string;
  website?: string;
  courseworks: string[];
}

const EducationSection: React.FC = () => {
  const educations: Education[] = [
    {
      institution: "Visvesvaraya Technological University",
      location: "India",
      degree: "B.E Computer Science",
      cgpa: "9.3 CGPA",
      website: "https://vtu.ac.in/",
      courseworks: [
        "Data Structures and Algorithms",
        "Database Management Systems",
        "Operating Systems",
        "Computer Networks",
        "Software Engineering",
        "Web Technologies",
      ],
    },
  ];

  return (
    <section
      id="education"
      className="py-20 bg-code-bg relative overflow-hidden"
    >
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
            <GraduationCap className="w-8 h-8 text-matrix-green" />
            <h2 className="text-4xl md:text-5xl font-bold text-white font-mono">
              Education
            </h2>
            <GraduationCap className="w-8 h-8 text-matrix-green" />
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-mono">
            My academic background and relevant coursework
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-matrix-green to-blue-400 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {educations.map((edu, index) => (
            <Card
              key={index}
              className="group hover:shadow-neon-lg transition-all duration-300 border-terminal-border bg-dark-card hover:border-matrix-green/50 hover:scale-[1.02]"
            >
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Institution Logo/Icon */}
                  <div className="flex-shrink-0 flex justify-center lg:justify-start">
                    <div className="w-24 h-24 bg-gradient-to-br from-matrix-green to-blue-400 rounded-xl flex items-center justify-center shadow-neon group-hover:shadow-neon-lg transition-shadow duration-300">
                      <GraduationCap className="w-12 h-12 text-black" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                        <h3 className="text-2xl font-bold text-white font-mono">
                          {edu.institution}
                        </h3>
                        {edu.website && (
                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="border-matrix-green text-matrix-green hover:bg-matrix-green hover:text-black font-mono"
                          >
                            <a
                              href={edu.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-2"
                            >
                              <span>Visit Website</span>
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </Button>
                        )}
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-400 mb-4">
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span className="font-mono">{edu.location}</span>
                        </div>
                      </div>

                      {/* Degree and CGPA */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                        <div className="flex items-center space-x-2">
                          <BookOpen className="w-5 h-5 text-matrix-green" />
                          <span className="text-lg font-semibold text-white font-mono">
                            {edu.degree}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Award className="w-5 h-5 text-orange-400" />
                          <Badge
                            variant="secondary"
                            className="bg-orange-400/20 text-orange-400 hover:bg-orange-400/30 px-3 py-1 font-mono border border-orange-400/30"
                          >
                            {edu.cgpa}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    {/* Coursework */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2 font-mono">
                        <BookOpen className="w-5 h-5 text-matrix-green" />
                        <span>Relevant Coursework</span>
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {edu.courseworks.map((coursework, courseIndex) => (
                          <div
                            key={courseIndex}
                            className="flex items-center space-x-3 p-3 bg-terminal rounded-lg hover:bg-terminal-border transition-colors duration-200 group"
                          >
                            <div className="w-2 h-2 bg-matrix-green rounded-full flex-shrink-0"></div>
                            <span className="text-gray-300 font-mono">
                              {coursework}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Academic Achievement Summary */}
          <Card className="mt-12 shadow-neon-lg border-terminal-border bg-gradient-to-r from-matrix-green/20 to-blue-400/20">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Terminal className="w-6 h-6 text-matrix-green" />
                <span className="text-matrix-green font-mono text-sm">
                  education.summary
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white font-mono">
                Strong Academic Foundation
              </h3>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6">
                With a strong academic background in Computer Science and
                excellent performance, I bring both theoretical knowledge and
                practical skills to every project.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge
                  variant="secondary"
                  className="bg-matrix-green/20 text-matrix-green hover:bg-matrix-green/30 px-4 py-2 font-mono border border-matrix-green/30"
                >
                  Computer Science Fundamentals
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-blue-400/20 text-blue-400 hover:bg-blue-400/30 px-4 py-2 font-mono border border-blue-400/30"
                >
                  Data Structures & Algorithms
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-purple-400/20 text-purple-400 hover:bg-purple-400/30 px-4 py-2 font-mono border border-purple-400/30"
                >
                  Database Systems
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-orange-400/20 text-orange-400 hover:bg-orange-400/30 px-4 py-2 font-mono border border-orange-400/30"
                >
                  Software Engineering
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-pink-400/20 text-pink-400 hover:bg-pink-400/30 px-4 py-2 font-mono border border-pink-400/30"
                >
                  Web Technologies
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
