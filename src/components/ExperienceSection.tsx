import React from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import {
  Calendar,
  MapPin,
  ExternalLink,
  Building2,
  Code2,
  Terminal,
} from "lucide-react";

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
    <section
      id="experience"
      className="py-20 bg-dark-bg relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-10 grid-rows-10 h-full w-full">
          {Array.from({ length: 100 }).map((_, i) => (
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
            <Building2 className="w-8 h-8 text-matrix-green" />
            <h2 className="text-4xl md:text-5xl font-bold text-white font-mono">
              Work Experience
            </h2>
            <Building2 className="w-8 h-8 text-matrix-green" />
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-mono">
            My professional journey and the projects I've worked on
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-matrix-green to-blue-400 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="group hover:shadow-neon-lg transition-all duration-300 border-terminal-border bg-dark-card hover:border-matrix-green/50 hover:scale-[1.02]"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Company Logo */}
                    <div className="flex-shrink-0 flex justify-center lg:justify-start">
                      {exp.logo ? (
                        <div className="w-24 h-24 rounded-xl overflow-hidden shadow-neon group-hover:shadow-neon-lg transition-shadow duration-300 border border-terminal-border">
                          <img
                            alt={`${exp.company} logo`}
                            src={exp.logo}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-24 h-24 bg-gradient-to-br from-matrix-green to-blue-400 rounded-xl flex items-center justify-center shadow-neon group-hover:shadow-neon-lg transition-shadow duration-300">
                          <Building2 className="w-12 h-12 text-black" />
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      {/* Header */}
                      <div className="mb-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                          <h3 className="text-2xl font-bold text-white font-mono">
                            {exp.position}
                          </h3>
                          {exp.website && (
                            <Button
                              asChild
                              variant="outline"
                              size="sm"
                              className="border-matrix-green text-matrix-green hover:bg-matrix-green hover:text-black font-mono"
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

                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-400">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span className="font-medium font-mono">
                              {exp.duration}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4" />
                            <span className="font-mono">{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2 font-mono">
                          <Code2 className="w-5 h-5 text-matrix-green" />
                          <span>Key Achievements</span>
                        </h4>
                        <ul className="space-y-3">
                          {exp.description.map((desc, descIndex) => (
                            <li
                              key={descIndex}
                              className="flex items-start space-x-3"
                            >
                              <div className="w-2 h-2 bg-matrix-green rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-gray-300 leading-relaxed">
                                {desc}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tools */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3 font-mono">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.tools.split(", ").map((tool, toolIndex) => (
                            <Badge
                              key={toolIndex}
                              variant="secondary"
                              className="bg-matrix-green/20 text-matrix-green hover:bg-matrix-green/30 transition-colors duration-200 font-mono border border-matrix-green/30"
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
          <Card className="mt-12 shadow-neon-lg border-terminal-border bg-gradient-to-r from-matrix-green/20 to-blue-400/20">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Terminal className="w-6 h-6 text-matrix-green" />
                <span className="text-matrix-green font-mono text-sm">
                  experience.summary
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white font-mono">
                Ready to Bring Value to Your Team
              </h3>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6">
                With proven experience in building scalable applications and
                solving complex technical challenges, I'm ready to contribute to
                your next project.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-matrix-green hover:bg-matrix-green/80 text-black px-8 py-3 rounded-lg font-semibold shadow-neon hover:shadow-neon-lg transition-all duration-300 font-mono"
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
