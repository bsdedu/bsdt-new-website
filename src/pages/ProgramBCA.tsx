
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ProgramHero } from '../components/program/ProgramHero';
import { CurriculumSection } from '../components/program/CurriculumSection';
import { FacultySection } from '../components/program/FacultySection';
import { CareerOutcomes } from '../components/program/CareerOutcomes';
import { EligibilitySection } from '../components/program/EligibilitySection';
import { ApplicationDeadline } from '../components/program/ApplicationDeadline';
import { ApplicationForm } from '../components/program/ApplicationForm';
import { StudentWorksGallery } from '../components/program/StudentWorksGallery';
import { BCAFacilitiesSection } from '../components/program/BCAFacilitiesSection';

const ProgramBCA = () => {
  const programName = "BCA with UI/UX & AI/ML";
  
  return (
    <>
      <Helmet>
        <title>{programName} | Bangalore School of Design & Technology</title>
        <meta name="description" content="Study Bachelor of Computer Applications (BCA) with specializations in UI/UX or AI/ML at Bangalore School of Design & Technology. Develop skills in application development, user experience design, and artificial intelligence." />
      </Helmet>

      <Navbar />
      
      <main className="pt-16">
        <ProgramHero 
          title={programName}
          subtitle="A 3-year undergraduate program developing skills in application development, UI/UX design, and artificial intelligence & machine learning"
          backgroundImage="/lovable-uploads/95442d0d-92a2-407b-8bf3-691152ab5174.png"
        />
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-bsd-gray mb-6">Program Overview</h2>
              <div className="prose prose-lg max-w-none text-foreground/80">
                <p>
                  The Bachelor of Computer Applications (BCA) program at BSDT is designed to develop comprehensive computing skills with specializations in UI/UX Design or AI & Machine Learning. This 3-year program bridges the gap between technical development and creative design solutions, preparing students for the rapidly evolving digital landscape.
                </p>
                <p>
                  Students can choose between two specializations:
                </p>
                <ul>
                  <li>
                    <strong>UI/UX Design Specialization:</strong> Focus on creating intuitive, accessible, and visually appealing digital interfaces. Learn user research, wireframing, prototyping, and interaction design principles.
                  </li>
                  <li>
                    <strong>AI & Machine Learning Specialization:</strong> Develop skills in artificial intelligence, machine learning algorithms, data analysis, and predictive modeling to create intelligent applications.
                  </li>
                </ul>
                <p>
                  Throughout the program, students work on real-world projects, collaborate with industry partners, and develop a professional portfolio. Our curriculum integrates the latest tools and methodologies including Figma, Adobe XD, TensorFlow, PyTorch, and various development frameworks.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <CurriculumSection 
          title="BCA with UI/UX & AI/ML Curriculum"
          subtitle="Our curriculum integrates technical foundations with specialized knowledge in either UI/UX design or artificial intelligence & machine learning."
          semesters={[
            {
              number: 1,
              courses: [
                "Introduction to Computer Systems",
                "Programming Fundamentals",
                "Mathematics for Computing",
                "Digital Design Basics",
                "Communication Skills"
              ]
            },
            {
              number: 2,
              courses: [
                "Object-Oriented Programming",
                "Web Technologies I",
                "Database Management Systems",
                "Introduction to UI/UX Design",
                "Statistics and Probability"
              ]
            },
            {
              number: 3,
              courses: [
                "Data Structures and Algorithms",
                "Software Engineering Principles",
                "Web Technologies II",
                "Introduction to AI & Machine Learning",
                "Human-Computer Interaction"
              ]
            },
            {
              number: 4,
              courses: [
                "Computer Networks",
                "Operating Systems",
                "Introduction to Data Science",
                "Specialization Track Course I",
                "Design Thinking and Problem Solving"
              ]
            },
            {
              number: 5,
              courses: [
                "Mobile Application Development",
                "Cloud Computing",
                "Full Stack Development",
                "Specialization Track Course II",
                "Internship I"
              ]
            },
            {
              number: 6,
              courses: [
                "Cybersecurity Fundamentals",
                "Project Management",
                "Specialization Track Course III",
                "Capstone Project",
                "Internship II"
              ]
            }
          ]}
          specializationTracks={[
            {
              name: "UI/UX Design Track",
              courses: [
                "User Research & Testing",
                "Interaction Design & Prototyping",
                "UI Systems & Design Systems",
                "Accessibility & Inclusive Design",
                "Usability Evaluation Methods"
              ]
            },
            {
              name: "AI & Machine Learning Track",
              courses: [
                "Machine Learning Algorithms",
                "Deep Learning & Neural Networks",
                "Natural Language Processing",
                "Computer Vision",
                "Ethical AI & Bias Mitigation"
              ]
            }
          ]}
        />
        
        <BCAFacilitiesSection />
        
        <StudentWorksGallery 
          title="BCA Student Projects"
          subtitle="Our students create innovative applications, interfaces, and AI solutions that showcase their technical and creative skills."
          projects={[
            {
              title: "Smart Home Interface",
              description: "A user-friendly UI/UX design for smart home control with accessibility features",
              imageUrl: "https://images.unsplash.com/photo-1585076641399-5c06d1b3365f?fit=crop&w=600&h=400",
              category: "UI/UX Design"
            },
            {
              title: "AI-Powered Financial Assistant",
              description: "Machine learning application that provides personalized financial advice and investment recommendations",
              imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?fit=crop&w=600&h=400",
              category: "AI/ML"
            },
            {
              title: "Healthcare Monitoring Dashboard",
              description: "Real-time health metrics visualization with intuitive navigation and data insights",
              imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?fit=crop&w=600&h=400",
              category: "UI/UX Design"
            },
            {
              title: "Image Recognition System",
              description: "Computer vision application that identifies objects and provides contextual information",
              imageUrl: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?fit=crop&w=600&h=400",
              category: "AI/ML"
            },
            {
              title: "E-Learning Platform",
              description: "Comprehensive interface design with adaptive learning features and gamification elements",
              imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?fit=crop&w=600&h=400",
              category: "UI/UX Design"
            },
            {
              title: "Predictive Text Analysis Tool",
              description: "NLP-based application that analyzes sentiment and predicts text completion",
              imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?fit=crop&w=600&h=400",
              category: "AI/ML"
            }
          ]}
        />
        
        <FacultySection />
        
        <CareerOutcomes 
          title="Career Opportunities"
          careers={[
            {
              title: "UI/UX Designer",
              description: "Create intuitive and engaging user interfaces for websites, applications, and digital products. Conduct user research, develop wireframes, and design prototypes to enhance user experience."
            },
            {
              title: "Front-End Developer",
              description: "Implement UI designs through coding, ensuring responsive and accessible interfaces. Use frameworks like React, Vue, or Angular to build interactive web applications."
            },
            {
              title: "UX Researcher",
              description: "Gather and analyze user data to inform design decisions. Conduct usability testing, interviews, and surveys to understand user needs and behavior."
            },
            {
              title: "Machine Learning Engineer",
              description: "Develop systems and applications that utilize machine learning algorithms. Build models for data prediction, pattern recognition, and automated decision-making."
            },
            {
              title: "AI Application Developer",
              description: "Create applications that leverage artificial intelligence capabilities. Develop solutions in various domains like healthcare, finance, education, and retail."
            },
            {
              title: "Data Scientist",
              description: "Analyze and interpret complex data sets to drive strategic decision-making. Use statistical methods and visualization techniques to extract insights from data."
            }
          ]}
        />
        
        <EligibilitySection 
          requirements={[
            "10+2 or equivalent with minimum 50% aggregate marks",
            "Mathematics as a subject in 10+2 is preferred but not mandatory",
            "Candidates from any stream (Science, Commerce, Arts) can apply",
            "Selection through BSDT Entrance Test and Personal Interview"
          ]}
        />
        
        <ApplicationDeadline 
          dates={[
            { session: "Summer 2023", deadline: "April 30, 2023" },
            { session: "Fall 2023", deadline: "August 15, 2023" }
          ]}
        />
        
        <section className="py-16 bg-bsd-light-gray">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-4xl mx-auto text-center mb-10">
              <h2 className="text-3xl font-display font-bold text-bsd-gray mb-4">Start Your Application</h2>
              <p className="text-foreground/70">
                Ready to begin your journey in the world of application development, UI/UX design, and artificial intelligence?
              </p>
            </div>
            <ApplicationForm programName={programName} />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ProgramBCA;
