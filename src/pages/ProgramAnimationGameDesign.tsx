
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { RevealSection } from "../components/ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { FacultySection } from "../components/program/FacultySection";
import { StudentWorksGallery } from "../components/program/StudentWorksGallery";
import { ApplicationDeadline } from "../components/program/ApplicationDeadline";
import { Gamepad, Code, MonitorPlay, Film, Layout, Trophy, Layers, Wallet, GraduationCap } from "lucide-react";

const ProgramAnimationGameDesign: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>BVA Animation & Game Design | BSDT</title>
        <meta name="description" content="Bachelor of Visual Arts in Animation & Game Design - A comprehensive 4-year program combining creative animation principles with cutting-edge game development techniques." />
      </Helmet>
      
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-24 md:pb-20 bg-bsd-light-gray">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
            <div className="md:w-1/2">
              <RevealSection>
                <Badge variant="bsdOrange" className="mb-4">4-YEAR BACHELOR PROGRAM</Badge>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-bsd-gray mb-4">
                  BVA Animation & Game Design
                </h1>
                <p className="text-foreground/70 text-lg mb-6">
                  A comprehensive program that merges artistic animation skills with technical game development expertise, preparing students for careers in the booming entertainment and gaming industries.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-bsd-orange" />
                    <span className="text-sm font-medium">Degree: BVA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Layers className="w-5 h-5 text-bsd-orange" />
                    <span className="text-sm font-medium">Duration: 4 Years</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wallet className="w-5 h-5 text-bsd-orange" />
                    <span className="text-sm font-medium">Fees: ₹1,50,000/year</span>
                  </div>
                </div>
                <ApplicationDeadline 
                  lastDate="August 15, 2024" 
                  startDate="September 20, 2024" 
                  seatsAvailable={30}
                />
              </RevealSection>
            </div>
            <div className="md:w-1/2">
              <RevealSection delay={100}>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1559346546-de408bdea212?q=80&w=2000&auto=format&fit=crop" 
                    alt="Animation and Game Design students working in the lab" 
                    className="w-full object-cover aspect-[4/3]"
                  />
                </div>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <RevealSection>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge variant="bsdOrange" className="mb-4">PROGRAM OVERVIEW</Badge>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
                Create Immersive Digital Experiences
              </h2>
            </div>
          </RevealSection>

          <div className="flex flex-col md:flex-row gap-12">
            <RevealSection delay={100} className="md:w-2/3">
              <div className="prose max-w-none">
                <p className="text-lg leading-relaxed">
                  The Bachelor of Visual Arts in Animation & Game Design program at BSDT is designed to develop skilled professionals who can create compelling animated content and engaging game experiences. Our curriculum combines traditional artistic foundations with cutting-edge digital tools and techniques.
                </p>
                <p className="mt-4">
                  Students will explore the entire production pipeline – from concept art and storyboarding to 3D modeling, animation, programming, and game development. Through a blend of theory, practical exercises, and collaborative projects, our students gain comprehensive skills needed for success in the animation and gaming industries.
                </p>
                <p className="mt-4">
                  What sets our program apart is our <strong>industry-integrated approach</strong>. Students work with industry-standard software, engage with real-world projects, and learn from faculty with extensive professional experience. Our state-of-the-art animation studio and game development lab provide the perfect environment for creating portfolio-ready work.
                </p>
                <h3 className="text-xl font-bold text-bsd-gray mt-8">Key Program Features</h3>
                <ul className="mt-4 space-y-2">
                  <li>Comprehensive curriculum covering both animation and game design disciplines</li>
                  <li>Industry-standard software training including Maya, ZBrush, Unreal Engine, Unity, and more</li>
                  <li>Motion capture studio with cutting-edge equipment for advanced animation techniques</li>
                  <li>Dedicated game testing lab for prototyping and playtesting student projects</li>
                  <li>VR/AR development components with access to latest headsets and development kits</li>
                  <li>Industry partnerships providing internship and collaborative project opportunities</li>
                  <li>Annual Animation and Game Festival showcasing student work to industry professionals</li>
                </ul>
              </div>
            </RevealSection>

            <RevealSection delay={150} className="md:w-1/3">
              <div className="bg-bsd-light-gray rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-bsd-gray mb-4">Industry Connections</h3>
                <p className="text-foreground/70 mb-4">
                  Our program maintains strong connections with leading animation studios and game development companies, providing students with internship opportunities and industry exposure.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center">
                    <img 
                      src="https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?w=800&auto=format&fit=crop" 
                      alt="Industry connection" 
                      className="w-full h-24 object-cover rounded-lg mb-2"
                    />
                    <p className="text-sm font-medium">Gaming Summit</p>
                  </div>
                  <div className="text-center">
                    <img 
                      src="https://images.unsplash.com/photo-1569224514992-44f21292176b?w=800&auto=format&fit=crop" 
                      alt="Industry connection" 
                      className="w-full h-24 object-cover rounded-lg mb-2"
                    />
                    <p className="text-sm font-medium">Studio Visits</p>
                  </div>
                  <div className="text-center">
                    <img 
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop" 
                      alt="Industry connection" 
                      className="w-full h-24 object-cover rounded-lg mb-2"
                    />
                    <p className="text-sm font-medium">Guest Lectures</p>
                  </div>
                  <div className="text-center">
                    <img 
                      src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&auto=format&fit=crop" 
                      alt="Industry connection" 
                      className="w-full h-24 object-cover rounded-lg mb-2"
                    />
                    <p className="text-sm font-medium">Internships</p>
                  </div>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="py-16 bg-bsd-light-gray">
        <div className="container mx-auto px-6 md:px-8">
          <RevealSection>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge variant="bsdOrange" className="mb-4">PROGRAM HIGHLIGHTS</Badge>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
                Cutting-Edge Facilities & Curriculum
              </h2>
              <p className="mt-4 text-foreground/70">
                Our program offers exceptional resources and learning opportunities that prepare students for successful careers in animation and game development.
              </p>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <RevealSection delay={50}>
              <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
                <div className="mb-4 rounded-full bg-orange-50 w-12 h-12 flex items-center justify-center">
                  <MonitorPlay className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-xl font-bold text-bsd-gray mb-2">Animation Studio</h3>
                <p className="text-foreground/70 flex-grow">
                  Access to a professional-grade animation studio with workstations equipped with industry-standard software including Autodesk Maya, Adobe Creative Suite, and ZBrush.
                </p>
              </div>
            </RevealSection>

            <RevealSection delay={100}>
              <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
                <div className="mb-4 rounded-full bg-orange-50 w-12 h-12 flex items-center justify-center">
                  <Gamepad className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-xl font-bold text-bsd-gray mb-2">Game Development Lab</h3>
                <p className="text-foreground/70 flex-grow">
                  Dedicated game development lab with high-performance computers, VR/AR equipment, and game engines (Unity and Unreal Engine) with professional licenses for all students.
                </p>
              </div>
            </RevealSection>

            <RevealSection delay={150}>
              <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
                <div className="mb-4 rounded-full bg-orange-50 w-12 h-12 flex items-center justify-center">
                  <Film className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-xl font-bold text-bsd-gray mb-2">Motion Capture Studio</h3>
                <p className="text-foreground/70 flex-grow">
                  State-of-the-art motion capture facility with professional equipment for recording human movement and facial expressions for realistic character animation.
                </p>
              </div>
            </RevealSection>

            <RevealSection delay={200}>
              <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
                <div className="mb-4 rounded-full bg-orange-50 w-12 h-12 flex items-center justify-center">
                  <Layout className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-xl font-bold text-bsd-gray mb-2">Rendering Farm</h3>
                <p className="text-foreground/70 flex-grow">
                  Access to a high-performance rendering farm that allows students to render complex animations and visual effects efficiently, saving valuable production time.
                </p>
              </div>
            </RevealSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <RevealSection delay={250}>
              <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
                <div className="mb-4 rounded-full bg-orange-50 w-12 h-12 flex items-center justify-center">
                  <Code className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-xl font-bold text-bsd-gray mb-2">Technical Excellence</h3>
                <p className="text-foreground/70 flex-grow">
                  Our curriculum includes programming fundamentals, game mechanics, and interactive design principles, ensuring students can implement their creative visions with technical proficiency. Students learn C#, Python, and blueprint visual scripting to create interactive experiences.
                </p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-bsd-orange mr-2">•</span>
                    <span>Game engine programming (Unity and Unreal)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsd-orange mr-2">•</span>
                    <span>Interactive storytelling techniques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsd-orange mr-2">•</span>
                    <span>AI and procedural generation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsd-orange mr-2">•</span>
                    <span>User experience design for games</span>
                  </li>
                </ul>
              </div>
            </RevealSection>

            <RevealSection delay={300}>
              <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
                <div className="mb-4 rounded-full bg-orange-50 w-12 h-12 flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-bsd-orange" />
                </div>
                <h3 className="text-xl font-bold text-bsd-gray mb-2">Industry Recognition</h3>
                <p className="text-foreground/70 flex-grow">
                  Our program has been recognized for excellence by industry leaders. Our students have won numerous awards in national and international competitions, and our graduates work at prestigious studios worldwide.
                </p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-bsd-orange mr-2">•</span>
                    <span>Partnerships with industry leaders like Unity Technologies and Autodesk</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsd-orange mr-2">•</span>
                    <span>Regular masterclasses from industry professionals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsd-orange mr-2">•</span>
                    <span>Student projects featured in international game showcases</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsd-orange mr-2">•</span>
                    <span>Networking opportunities with game studios and animation houses</span>
                  </li>
                </ul>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <RevealSection>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge variant="bsdOrange" className="mb-4">CURRICULUM</Badge>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
                Comprehensive Learning Path
              </h2>
              <p className="mt-4 text-foreground/70">
                Our curriculum is designed to provide a strong foundation in both animation and game design, with opportunities for specialization in later years.
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-bsd-light-gray rounded-xl p-6 md:p-8">
                <h3 className="text-xl font-bold text-bsd-gray mb-4">Foundation (Year 1)</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-bsd-orange mr-2">•</span>
                    <span>Drawing Fundamentals & Color Theory</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsd-orange mr-2">•</span>
                    <span>Digital Imaging & 2D Animation Basics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsd-orange mr-2">•</span>
                    <span>Storytelling & Narrative Design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsd-orange mr-2">•</span>
                    <span>Introduction to Game Design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsd-orange mr-2">•</span>
                    <span>Design Thinking & Creative Process</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsd-orange mr-2">•</span>
                    <span>History of Animation & Games</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-bsd-light-gray rounded-xl p-6 md:p-8">
                <h3 className="text-xl font-bold text-bsd-gray mb-4">Core Skills (Year 2)</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-bsd-orange mr-2">•</span>
                    <span>3D Modeling & Texturing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsd-orange mr-2">•</span>
                    <span>Character Animation & Rigging</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsd-orange mr-2">•</span>
                    <span>Game Mechanics & Level Design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsd-orange mr-2">•</span>
                    <span>Programming for Games (C# & Unity)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsd-orange mr-2">•</span>
                    <span>Sound Design for Animation & Games</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsd-orange mr-2">•</span>
                    <span>User Experience Design</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-bsd-light-gray rounded-xl p-6 md:p-8">
                <h3 className="text-xl font-bold text-bsd-gray mb-4">Advanced Techniques (Year 3)</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-bsd-orange mr-2">•</span>
                    <span>Advanced Animation & Motion Capture</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsd-orange mr-2">•</span>
                    <span>Visual Effects & Compositing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsd-orange mr-2">•</span>
                    <span>Game AI & Procedural Generation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsd-orange mr-2">•</span>
                    <span>Advanced Game Engine Development (Unreal)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsd-orange mr-2">•</span>
                    <span>VR/AR Design & Development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsd-orange mr-2">•</span>
                    <span>Professional Practice & Project Management</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-bsd-light-gray rounded-xl p-6 md:p-8">
                <h3 className="text-xl font-bold text-bsd-gray mb-4">Specialization & Capstone (Year 4)</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-bsd-orange mr-2">•</span>
                    <span>Specialization Track (Animation or Game Development)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsd-orange mr-2">•</span>
                    <span>Industry Internship (3 months)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsd-orange mr-2">•</span>
                    <span>Capstone Project Development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsd-orange mr-2">•</span>
                    <span>Portfolio Development & Career Preparation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsd-orange mr-2">•</span>
                    <span>Entrepreneurship & Business for Creatives</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsd-orange mr-2">•</span>
                    <span>Final Showcase & Industry Presentation</span>
                  </li>
                </ul>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Faculty Section */}
      <FacultySection />

      {/* Student Works Gallery */}
      <StudentWorksGallery />

      {/* Career Opportunities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <RevealSection>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge variant="bsdOrange" className="mb-4">CAREER PROSPECTS</Badge>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
                Exciting Career Opportunities
              </h2>
              <p className="mt-4 text-foreground/70">
                Graduates of our Animation & Game Design program go on to work in diverse roles across the entertainment and interactive media industries.
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-bsd-light-gray rounded-xl p-6">
                <h3 className="text-xl font-bold text-bsd-gray mb-3">Animation Industry</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-bsd-orange mr-2">•</span>
                    <span>3D Animator</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsd-orange mr-2">•</span>
                    <span>Character Designer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsd-orange mr-2">•</span>
                    <span>Storyboard Artist</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsd-orange mr-2">•</span>
                    <span>Visual Effects Artist</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsd-orange mr-2">•</span>
                    <span>Rigging Artist</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsd-orange mr-2">•</span>
                    <span>Lighting & Rendering Specialist</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsd-orange mr-2">•</span>
                    <span>Animation Director</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-bsd-light-gray rounded-xl p-6">
                <h3 className="text-xl font-bold text-bsd-gray mb-3">Game Development</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-bsd-orange mr-2">•</span>
                    <span>Game Designer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsd-orange mr-2">•</span>
                    <span>Level Designer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsd-orange mr-2">•</span>
                    <span>Game Artist</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsd-orange mr-2">•</span>
                    <span>UI/UX Designer for Games</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsd-orange mr-2">•</span>
                    <span>Technical Artist</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsd-orange mr-2">•</span>
                    <span>Game Producer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsd-orange mr-2">•</span>
                    <span>Quality Assurance Specialist</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-bsd-light-gray rounded-xl p-6">
                <h3 className="text-xl font-bold text-bsd-gray mb-3">Emerging Opportunities</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-bsd-orange mr-2">•</span>
                    <span>VR/AR Developer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsd-orange mr-2">•</span>
                    <span>Interactive Media Designer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsd-orange mr-2">•</span>
                    <span>Motion Graphics Specialist</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsd-orange mr-2">•</span>
                    <span>Simulation Designer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsd-orange mr-2">•</span>
                    <span>Metaverse Content Creator</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsd-orange mr-2">•</span>
                    <span>Independent Game Developer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsd-orange mr-2">•</span>
                    <span>3D Printing Specialist</span>
                  </li>
                </ul>
              </div>
            </div>
          </RevealSection>

          <RevealSection delay={200}>
            <div className="mt-12 bg-bsd-light-gray rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-bsd-gray mb-4">Industry Placement Success</h3>
              <p className="text-foreground/70 mb-6">
                Our graduates have been placed in leading studios and companies including:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <p className="font-bold text-bsd-gray">Ubisoft</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <p className="font-bold text-bsd-gray">Technicolor</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <p className="font-bold text-bsd-gray">Prime Focus</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <p className="font-bold text-bsd-gray">Dhruva Interactive</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <p className="font-bold text-bsd-gray">Electronic Arts</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <p className="font-bold text-bsd-gray">Zynga</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <p className="font-bold text-bsd-gray">DreamWorks</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <p className="font-bold text-bsd-gray">Rockstar Games</p>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-bsd-light-gray">
        <div className="container mx-auto px-6 md:px-8">
          <RevealSection>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge variant="bsdOrange" className="mb-4">ADMISSIONS</Badge>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
                Join Our Creative Community
              </h2>
              <p className="mt-4 text-foreground/70">
                Ready to start your journey in animation and game design? Our admission process is designed to identify creative, passionate individuals with potential to excel in the program.
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={100}>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-bold text-bsd-gray mb-4">Application Requirements</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-bsd-orange mr-2">1.</span>
                      <span>Completed application form</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bsd-orange mr-2">2.</span>
                      <span>10+2 or equivalent with minimum 50% marks</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bsd-orange mr-2">3.</span>
                      <span>Portfolio of creative work (drawings, digital art, animations, etc.)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bsd-orange mr-2">4.</span>
                      <span>Personal statement of interest</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bsd-orange mr-2">5.</span>
                      <span>Interview with faculty panel</span>
                    </li>
                  </ul>
                  
                  <h3 className="text-xl font-bold text-bsd-gray mt-6 mb-4">Important Dates</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-bsd-orange mr-2">•</span>
                      <span><strong>Application Deadline:</strong> August 15, 2024</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bsd-orange mr-2">•</span>
                      <span><strong>Portfolio Submission:</strong> August 20, 2024</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bsd-orange mr-2">•</span>
                      <span><strong>Interviews:</strong> August 25-30, 2024</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bsd-orange mr-2">•</span>
                      <span><strong>Final Results:</strong> September 5, 2024</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bsd-orange mr-2">•</span>
                      <span><strong>Program Start:</strong> September 20, 2024</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-bsd-light-gray p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-bsd-gray mb-4">Contact Admissions</h3>
                    <p className="text-foreground/70 mb-6">
                      Have questions about the program or admission process? Our admissions team is here to help you.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-bsd-orange mr-2">•</span>
                        <span><strong>Email:</strong> admissions@bsd.edu.in</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-bsd-orange mr-2">•</span>
                        <span><strong>Phone:</strong> +91 80 4611 3399</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-8">
                    <button className="bg-bsd-orange hover:bg-bsd-orange/90 text-white px-6 py-3 rounded-md font-medium transition-colors w-full">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ProgramAnimationGameDesign;
