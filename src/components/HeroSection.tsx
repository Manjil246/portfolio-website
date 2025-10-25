import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import {
  Github,
  Linkedin,
  ChevronDown,
  ArrowRight,
  Terminal,
  Code2,
  Zap,
} from "lucide-react";

const HeroSection: React.FC = () => {
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "const developer = new ManjilDhungana();";

  useEffect(() => {
    let timeout: number;
    
    if (isTyping && currentText.length < fullText.length) {
      timeout = setTimeout(() => {
        setCurrentText(fullText.slice(0, currentText.length + 1));
      }, 100);
    } else if (currentText.length === fullText.length) {
      timeout = setTimeout(() => {
        setIsTyping(false);
      }, 2000);
    } else if (!isTyping && currentText.length > 0) {
      timeout = setTimeout(() => {
        setCurrentText(currentText.slice(0, -1));
      }, 50);
    } else {
      setIsTyping(true);
    }
    return () => clearTimeout(timeout);
  }, [currentText, isTyping, fullText]);

  return (
    <section className="min-h-screen bg-dark-bg relative overflow-hidden">
      {/* Matrix Rain Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="matrix-rain">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="matrix-character"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            >
              {String.fromCharCode(0x30a0 + Math.random() * 96)}
            </div>
          ))}
        </div>
      </div>

      {/* Terminal Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div
              key={i}
              className="border border-terminal-border/20 hover:border-matrix-green/30 transition-colors duration-300"
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center py-8 sm:py-12 lg:py-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Code Terminal */}
            <div className="space-y-6 lg:space-y-8">
              {/* Terminal Window */}
              <div className="bg-terminal border border-terminal-border rounded-lg p-4 sm:p-6 shadow-neon-lg">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-400 text-sm ml-4 font-mono">
                    terminal
                  </span>
                </div>
                <div className="space-y-2 font-mono text-sm">
                  <div className="text-matrix-green">
                    <span className="text-blue-400">$</span> whoami
                  </div>
                  <div className="text-white">manjil-dhungana</div>
                  <div className="text-matrix-green">
                    <span className="text-blue-400">$</span> cat about.txt
                  </div>
                  <div className="text-white">
                    Full Stack Developer
                    <br />
                    React • Node.js • TypeScript • AWS
                    <br />
                    Building scalable web applications
                  </div>
                  <div className="text-matrix-green">
                    <span className="text-blue-400">$</span> {currentText}
                    <span className="animate-blink border-r-2 border-matrix-green ml-1"></span>
                  </div>
                </div>
              </div>

              {/* Code Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-dark-card border border-terminal-border rounded-lg p-3 sm:p-4 text-center hover:border-matrix-green/50 transition-colors duration-300">
                  <Code2 className="w-6 h-6 text-matrix-green mx-auto mb-2" />
                  <div className="text-white font-mono text-lg font-bold">
                    50+
                  </div>
                  <div className="text-gray-400 text-sm">Projects</div>
                </div>
                <div className="bg-dark-card border border-terminal-border rounded-lg p-3 sm:p-4 text-center hover:border-matrix-green/50 transition-colors duration-300">
                  <Terminal className="w-6 h-6 text-matrix-green mx-auto mb-2" />
                  <div className="text-white font-mono text-lg font-bold">
                    2+
                  </div>
                  <div className="text-gray-400 text-sm">Years</div>
                </div>
                <div className="bg-dark-card border border-terminal-border rounded-lg p-3 sm:p-4 text-center hover:border-matrix-green/50 transition-colors duration-300">
                  <Zap className="w-6 h-6 text-matrix-green mx-auto mb-2" />
                  <div className="text-white font-mono text-lg font-bold">
                    24/7
                  </div>
                  <div className="text-gray-400 text-sm">Available</div>
                </div>
              </div>
            </div>

            {/* Right Side - Main Content */}
            <div className="space-y-6 lg:space-y-8">
              {/* Greeting */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-matrix-green rounded-full animate-pulse-glow"></div>
                  <span className="text-matrix-green font-mono text-sm">
                    ONLINE
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                  Hi, I'm{" "}
                  <span className="text-matrix-green neon-text">
                    Manjil Dhungana
                  </span>
                </h1>
                <div className="text-xl sm:text-2xl text-gray-300 font-mono">
                  &lt;
                  <span className="text-matrix-green">
                    Full Stack Developer
                  </span>{" "}
                  /&gt;
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Crafting digital experiences with{" "}
                  <span className="text-matrix-green font-mono">React</span>,{" "}
                  <span className="text-matrix-green font-mono">Node.js</span>,{" "}
                  <span className="text-matrix-green font-mono">
                    TypeScript
                  </span>
                  , and <span className="text-matrix-green font-mono">AWS</span>
                  .
                </p>
                <p className="text-gray-400">
                  Building scalable, high-performance applications that solve
                  real-world problems.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/manjildhungana/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-dark-card border border-terminal-border rounded-lg hover:border-matrix-green/50 hover:shadow-neon transition-all duration-300 group"
                >
                  <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-matrix-green transition-colors duration-300" />
                </a>
                <a
                  href="https://github.com/Manjil246"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-dark-card border border-terminal-border rounded-lg hover:border-matrix-green/50 hover:shadow-neon transition-all duration-300 group"
                >
                  <Github className="w-6 h-6 text-gray-400 group-hover:text-matrix-green transition-colors duration-300" />
                </a>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-matrix-green hover:bg-matrix-green/80 text-black font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-neon hover:shadow-neon-lg font-mono"
                >
                  <a href="#skills" className="flex items-center space-x-2">
                    <span>Explore Skills</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  className="bg-transparent border-2 border-matrix-green text-matrix-green hover:bg-matrix-green hover:text-black font-bold py-3 px-6 rounded-lg transition-all duration-300 font-mono"
                >
                  <a href="#contact" className="flex items-center space-x-2">
                    <span>Connect</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-gray-400 font-mono text-sm">scroll down</span>
          <ChevronDown className="w-6 h-6 text-matrix-green" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
