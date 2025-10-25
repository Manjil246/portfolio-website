import React from "react";
import { Button } from "./ui/button";
import { FileText } from "lucide-react";
import profileImg from "../assets/img/profile.jpg";

const Navigation: React.FC = () => {
  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-dark-bg/95 backdrop-blur-md border-b border-terminal-border z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Name */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-matrix-green/50 hover:border-matrix-green transition-all duration-300 hover:shadow-neon">
                <img
                  src={profileImg}
                  alt="Manjil Dhungana"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div>
                <h1 className="text-lg font-bold text-white font-mono">
                  Manjil Dhungana
                </h1>
                <p className="text-sm text-gray-400 font-mono">
                  Full Stack Developer
                </p>
              </div>
            </div>

            {/* Resume Download */}
            <Button
              asChild
              variant="outline"
              size="sm"
              className="flex border-matrix-green text-matrix-green hover:bg-matrix-green hover:text-black font-mono"
            >
              <a
                href="/src/assets/resume/Manjil Dhungana.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 sm:space-x-2"
              >
                <FileText className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">Resume</span>
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Spacer for navigation */}
      <div className="h-16"></div>
    </>
  );
};

export default Navigation;
