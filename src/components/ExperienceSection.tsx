import React from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import { Calendar, MapPin, ExternalLink, Building2, Code2 } from "lucide-react";

interface Experience {
  company: string;
  position: string;
  duration: string;
  location: string;
  logo: string;
  website?: string;
  description: string[];
  tools: string;
}

const ExperienceSection: React.FC = () => {
  const experiences: Experience[] = [
    {
      company: "Kreedalabs",
      position: "Full Stack Developer",
      duration: "Sep 2024 – Present",
      location: "Pune, Maharashtra",
      logo: "src/assets/img/kreedalabs_logo.jpg",
      website: "https://kreedalabs.com/",
      description: [
        "Built Fashion Trend Forecasting Platform using full-stack TypeScript with MVC architecture, processing 1M+ fashion posts to identify top trends with 85% accuracy.",
        "Designed advanced color analysis system with 2-stage clustering algorithms and complex PostgreSQL queries, generating top 50 color clusters based on vector distance calculations.",
        "Developed sophisticated backend APIs with multi-level filtering, aggregation pipelines, and real-time trend analysis, handling 10,000+ concurrent users with sub-second response times.",
        "Implemented scalable architecture with AWS Lambda, SQS, and event-driven processing, reducing data processing time by 75%.",
        "Built dynamic trend visualization using D3.js color graphs and complex data transformations, improving decision-making efficiency by 60%.",
        "Enhanced system performance by 50% through intelligent caching, query optimization, and resolved critical performance bottlenecks.",
      ],
      tools: "TypeScript, React, Node.js, PostgreSQL, AWS Lambda, SQS, D3.js",
    },
    {
      company: "Skylink IT Services",
      position: "Full Stack Developer (Freelancing)",
      duration: "2025",
      location: "Remote",
      logo: "src/assets/img/DPN_LOGO_mrvh8l.png",
      website: "https://skylinkitservices.com/",
      description: [
        "Developed production business website with admin dashboard using React (TypeScript), Node.js, Express, and MongoDB with complete MVC architecture.",
        "Implemented secure authentication system with JWT, comprehensive schema validation using JOI, and configured high-availability deployment via Cloudflare and Vercel.",
        "Managed complete project lifecycle from requirement analysis to deployment, handling client communications and delivering within project timeline.",
      ],
      tools:
        "React, TypeScript, Node.js, Express, MongoDB, JWT, JOI, Cloudflare, Vercel",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My professional journey and the projects I've worked on
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:scale-[1.02]"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Company Logo */}
                    <div className="flex-shrink-0 flex justify-center lg:justify-start">
                      {exp.logo ? (
                        <div className="w-24 h-24 rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                          <img
                            alt={`${exp.company} logo`}
                            src={exp.logo}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                          <Building2 className="w-12 h-12 text-white" />
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      {/* Header */}
                      <div className="mb-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                          <h3 className="text-2xl font-bold text-gray-900">
                            {exp.position}
                          </h3>
                          {exp.website && (
                            <Button
                              asChild
                              variant="outline"
                              size="sm"
                              className="border-blue-300 text-blue-600 hover:bg-blue-50"
                            >
                              <a
                                href={exp.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2"
                              >
                                <span>{exp.company}</span>
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            </Button>
                          )}
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span className="font-medium">{exp.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                          <Code2 className="w-5 h-5" />
                          <span>Key Achievements</span>
                        </h4>
                        <ul className="space-y-3">
                          {exp.description.map((desc, descIndex) => (
                            <li
                              key={descIndex}
                              className="flex items-start space-x-3"
                            >
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-gray-700 leading-relaxed">
                                {desc}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tools */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.tools.split(", ").map((tool, toolIndex) => (
                            <Badge
                              key={toolIndex}
                              variant="secondary"
                              className="bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors duration-200"
                            >
                              {tool}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <Card className="mt-12 shadow-xl border-0 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Bring Value to Your Team
              </h3>
              <p className="text-lg md:text-xl text-green-100 leading-relaxed max-w-3xl mx-auto mb-6">
                With proven experience in building scalable applications and
                solving complex technical challenges, I'm ready to contribute to
                your next project.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-green-600 hover:bg-green-50 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a href="#contact">Let's Work Together</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
