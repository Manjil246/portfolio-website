import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { MapPin, Phone, Mail, Github, Linkedin, Terminal } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-dark-bg relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-6 grid-rows-6 h-full w-full">
          {Array.from({ length: 36 }).map((_, i) => (
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
            <Mail className="w-8 h-8 text-matrix-green" />
            <h2 className="text-4xl md:text-5xl font-bold text-white font-mono">
              Get In Touch
            </h2>
            <Mail className="w-8 h-8 text-matrix-green" />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-matrix-green to-blue-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Phone */}
          <Card className="bg-dark-card border-terminal-border shadow-neon hover:shadow-neon-lg transition-all duration-300 hover:-translate-y-1 hover:border-matrix-green/50">
            <CardContent className="flex flex-col items-center p-6">
              <div className="bg-blue-400/20 text-blue-400 rounded-full p-4 mb-4 transition-all duration-300 hover:scale-110">
                <Phone size={28} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 font-mono">
                Phone
              </h3>
              <a
                href="tel:+916362428010"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-mono"
              >
                +91 6362428010
              </a>
            </CardContent>
          </Card>

          {/* Email */}
          <Card className="bg-dark-card border-terminal-border shadow-neon hover:shadow-neon-lg transition-all duration-300 hover:-translate-y-1 hover:border-matrix-green/50">
            <CardContent className="flex flex-col items-center p-6">
              <div className="bg-matrix-green/20 text-matrix-green rounded-full p-4 mb-4 transition-all duration-300 hover:scale-110">
                <Mail size={28} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 font-mono">
                Email
              </h3>
              <a
                href="mailto:manjildhungana8@gmail.com"
                className="text-gray-300 hover:text-matrix-green transition-colors duration-200 break-all font-mono"
              >
                manjildhungana8@gmail.com
              </a>
            </CardContent>
          </Card>

          {/* GitHub */}
          <Card className="bg-dark-card border-terminal-border shadow-neon hover:shadow-neon-lg transition-all duration-300 hover:-translate-y-1 hover:border-matrix-green/50">
            <CardContent className="flex flex-col items-center p-6">
              <div className="bg-gray-400/20 text-gray-400 rounded-full p-4 mb-4 transition-all duration-300 hover:scale-110">
                <Github size={28} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 font-mono">
                GitHub
              </h3>
              <a
                href="https://github.com/Manjil246"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-100 transition-colors duration-200 font-mono"
              >
                github.com/Manjil246
              </a>
            </CardContent>
          </Card>

          {/* LinkedIn */}
          <Card className="bg-dark-card border-terminal-border shadow-neon hover:shadow-neon-lg transition-all duration-300 hover:-translate-y-1 hover:border-matrix-green/50">
            <CardContent className="flex flex-col items-center p-6">
              <div className="bg-blue-600/20 text-blue-600 rounded-full p-4 mb-4 transition-all duration-300 hover:scale-110">
                <Linkedin size={28} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 font-mono">
                LinkedIn
              </h3>
              <a
                href="https://www.linkedin.com/in/manjildhungana/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-600 transition-colors duration-200 font-mono"
              >
                linkedin.com/in/manjildhungana
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
          <Button
            asChild
            className="bg-matrix-green hover:bg-matrix-green/80 text-black font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-neon hover:shadow-neon-lg font-mono"
          >
            <a href="mailto:manjildhungana8@gmail.com">Send Email</a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-matrix-green text-matrix-green hover:bg-matrix-green hover:text-black font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-neon hover:shadow-neon-lg font-mono"
          >
            <a href="tel:+916362428010">Call Now</a>
          </Button>
        </div>

        {/* Location */}
        <div className="text-center text-gray-400 mt-12 flex items-center justify-center font-mono">
          <MapPin size={20} className="mr-2 text-matrix-green" />
          Pune, Maharashtra, India
        </div>

        {/* Terminal Footer */}
        <Card className="mt-16 shadow-neon-lg border-terminal-border bg-terminal">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Terminal className="w-6 h-6 text-matrix-green" />
              <span className="text-matrix-green font-mono text-sm">
                contact.status
              </span>
            </div>
            <div className="space-y-2 font-mono text-sm">
              <div className="text-matrix-green">
                <span className="text-blue-400">$</span> echo "Ready for new
                opportunities"
              </div>
              <div className="text-white">Ready for new opportunities</div>
              <div className="text-matrix-green">
                <span className="text-blue-400">$</span> status --available
              </div>
              <div className="text-white">
                Available for freelance projects and full-time positions
              </div>
              <div className="text-matrix-green">
                <span className="text-blue-400">$</span>{" "}
                <span className="animate-blink border-r-2 border-matrix-green ml-1"></span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
