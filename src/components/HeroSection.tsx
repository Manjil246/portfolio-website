import React from "react";
import { Button } from "./ui/button";
import {
  Github,
  Linkedin,
  ChevronDown,
  Download,
  ArrowRight,
} from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section
      id="intro"
      className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Manjil Dhungana
              </span>
            </h1>
            <div className="text-xl sm:text-2xl lg:text-3xl text-blue-200 mb-6">
              A{" "}
              <span className="text-white font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Full Stack Developer
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="mb-12 animate-slide-up">
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Skilled in React, Node.js, TypeScript, and AWS, building scalable,
              high-performance web applications with a passion for solving
              complex real-world problems.
            </p>
          </div>

          {/* Social Links */}
          <div className="mb-12 animate-slide-up">
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com/in/manjildhungana/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={32} />
              </a>
              <a
                href="https://github.com/Manjil246"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-300"
                aria-label="GitHub Profile"
              >
                <Github size={32} />
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button
              asChild
              className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <a href="#about" className="flex items-center space-x-2">
                <span>Read More</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button
              asChild
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <a href="#contact" className="flex items-center space-x-2">
                <span>Contact Me</span>
              </a>
            </Button>
          </div>

          {/* Resume Download */}
          <div className="mt-8 animate-slide-up">
            <Button
              asChild
              className="bg-transparent border-2 border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-900 px-6 py-3 rounded-full transition-all duration-300"
            >
              <a
                href="/src/assets/resume/Manjil Dhungana.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
        <ChevronDown className="w-8 h-8 text-blue-300" />
      </div>
    </section>
  );
};

export default HeroSection;
