import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  GraduationCap,
  MapPin,
  ExternalLink,
  BookOpen,
  Award,
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
      className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My academic background and relevant coursework
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {educations.map((edu, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:scale-[1.02]"
            >
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Institution Logo/Icon */}
                  <div className="flex-shrink-0 flex justify-center lg:justify-start">
                    <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <GraduationCap className="w-12 h-12 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                        <h3 className="text-2xl font-bold text-gray-900">
                          {edu.institution}
                        </h3>
                        {edu.website && (
                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="border-indigo-300 text-indigo-600 hover:bg-indigo-50"
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

                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600 mb-4">
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>

                      {/* Degree and CGPA */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                        <div className="flex items-center space-x-2">
                          <BookOpen className="w-5 h-5 text-indigo-600" />
                          <span className="text-lg font-semibold text-gray-800">
                            {edu.degree}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Award className="w-5 h-5 text-yellow-600" />
                          <Badge
                            variant="secondary"
                            className="bg-yellow-50 text-yellow-700 hover:bg-yellow-100 px-3 py-1"
                          >
                            {edu.cgpa}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    {/* Coursework */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                        <BookOpen className="w-5 h-5" />
                        <span>Relevant Coursework</span>
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {edu.courseworks.map((coursework, courseIndex) => (
                          <div
                            key={courseIndex}
                            className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                          >
                            <div className="w-2 h-2 bg-indigo-500 rounded-full flex-shrink-0"></div>
                            <span className="text-gray-700">{coursework}</span>
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
          <Card className="mt-12 shadow-xl border-0 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Strong Academic Foundation
              </h3>
              <p className="text-lg md:text-xl text-indigo-100 leading-relaxed max-w-3xl mx-auto mb-6">
                With a strong academic background in Computer Science and
                excellent performance, I bring both theoretical knowledge and
                practical skills to every project.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge
                  variant="secondary"
                  className="bg-white/20 text-white hover:bg-white/30 px-4 py-2"
                >
                  Computer Science Fundamentals
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-white/20 text-white hover:bg-white/30 px-4 py-2"
                >
                  Data Structures & Algorithms
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-white/20 text-white hover:bg-white/30 px-4 py-2"
                >
                  Database Systems
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-white/20 text-white hover:bg-white/30 px-4 py-2"
                >
                  Software Engineering
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-white/20 text-white hover:bg-white/30 px-4 py-2"
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
