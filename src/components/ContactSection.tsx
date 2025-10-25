import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Phone, Mail, Github, Linkedin, MapPin } from "lucide-react";

const ContactSection: React.FC = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6362428010",
      href: "tel:+916362428010",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Mail,
      label: "Email",
      value: "manjildhungana8@gmail.com",
      href: "mailto:manjildhungana8@gmail.com",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Manjil246",
      href: "https://github.com/Manjil246",
      color: "text-gray-800",
      bgColor: "bg-gray-50",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/manjildhungana",
      href: "https://www.linkedin.com/in/manjildhungana/",
      color: "text-blue-700",
      bgColor: "bg-blue-50",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting
            projects. Let's connect and build something amazing together!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-semibold text-gray-800">
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={index}
                      className="group p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg bg-white/50"
                    >
                      <div className="flex items-start space-x-4">
                        <div
                          className={`p-3 rounded-lg ${item.bgColor} group-hover:scale-110 transition-transform duration-300`}
                        >
                          <IconComponent className={`w-6 h-6 ${item.color}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">
                            {item.label}
                          </p>
                          <a
                            href={item.href}
                            target={
                              item.href.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              item.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-200 break-all"
                          >
                            {item.value}
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-12 text-center">
                <div className="inline-flex items-center space-x-2 text-gray-600 mb-6">
                  <MapPin className="w-5 h-5" />
                  <span className="font-medium">
                    Based in Pune, Maharashtra, India
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <a href="mailto:manjildhungana8@gmail.com">Send Email</a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
                  >
                    <a href="tel:+916362428010">Call Now</a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
