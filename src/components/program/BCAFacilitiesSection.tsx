
import React from 'react';
import { RevealSection } from "../ui-elements/RevealSection";
import { Card, CardContent } from "../ui-elements/Card";
import { Badge } from "@/components/ui/badge";
import { Monitor, Code, Database, Server, Cpu, Users } from "lucide-react";

export const BCAFacilitiesSection: React.FC = () => {
  const facilities = [
    {
      icon: <Monitor className="w-6 h-6 text-bsd-orange" />,
      title: "UI/UX Design Lab",
      description: "Equipped with the latest design software including Adobe XD, Figma, Sketch, and usability testing tools. Features eye-tracking equipment and recording facilities for user testing sessions."
    },
    {
      icon: <Code className="w-6 h-6 text-bsd-orange" />,
      title: "Development Studio",
      description: "Modern workstations with multiple development environments for web, mobile, and cross-platform application development. Supports various frameworks and libraries for front-end and back-end development."
    },
    {
      icon: <Cpu className="w-6 h-6 text-bsd-orange" />,
      title: "AI & ML Laboratory",
      description: "High-performance computing infrastructure with GPU acceleration for training machine learning models. Installed with TensorFlow, PyTorch, scikit-learn, and other AI/ML frameworks and libraries."
    },
    {
      icon: <Database className="w-6 h-6 text-bsd-orange" />,
      title: "Data Science Center",
      description: "Dedicated space for data analysis and visualization with specialized software like Tableau, Power BI, and statistical analysis tools. Access to various structured and unstructured datasets for practice."
    },
    {
      icon: <Server className="w-6 h-6 text-bsd-orange" />,
      title: "Cloud Computing Resources",
      description: "Access to major cloud platforms including AWS, Google Cloud, and Microsoft Azure for deploying applications and services. Training on serverless architectures, containers, and cloud-native development."
    },
    {
      icon: <Users className="w-6 h-6 text-bsd-orange" />,
      title: "Collaboration Spaces",
      description: "Flexible working environments designed for team projects and agile development practices. Equipped with digital whiteboards, presentation tools, and video conferencing facilities."
    }
  ];

  return (
    <section className="py-16 bg-bsd-light-gray">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">STATE-OF-THE-ART FACILITIES</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Advanced Learning Infrastructure
            </h2>
            <p className="mt-4 text-foreground/70">
              Our BCA program is supported by cutting-edge facilities that provide the perfect environment for learning and innovation in application development, UI/UX design, and artificial intelligence.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <Card key={index} className="transition-all duration-300 hover:shadow-md">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-bsd-orange/10 rounded-lg flex items-center justify-center mb-4">
                    {facility.icon}
                  </div>
                  <h3 className="text-xl font-bold text-bsd-gray mb-2">{facility.title}</h3>
                  <p className="text-foreground/70">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </RevealSection>

        <RevealSection delay={200}>
          <div className="mt-12 bg-white rounded-xl p-8 shadow-sm">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-xl font-bold text-bsd-gray mb-4 text-center">Industry Partnerships</h3>
              <p className="text-foreground/70 text-center mb-6">
                We collaborate with leading technology companies to provide our students with access to the latest tools, internship opportunities, and industry insights.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
                <img src="https://placehold.co/200x80/fff/8d8d8d?text=Tech+Partner" alt="Tech Partner" className="max-h-12 opacity-70 hover:opacity-100 transition-opacity" />
                <img src="https://placehold.co/200x80/fff/8d8d8d?text=Design+Studio" alt="Design Studio" className="max-h-12 opacity-70 hover:opacity-100 transition-opacity" />
                <img src="https://placehold.co/200x80/fff/8d8d8d?text=AI+Company" alt="AI Company" className="max-h-12 opacity-70 hover:opacity-100 transition-opacity" />
                <img src="https://placehold.co/200x80/fff/8d8d8d?text=Software+Firm" alt="Software Firm" className="max-h-12 opacity-70 hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
