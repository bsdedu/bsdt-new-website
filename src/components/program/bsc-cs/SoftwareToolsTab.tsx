
import React from 'react';
import { RevealSection } from "@/components/ui-elements/RevealSection";

interface ToolCardProps {
  name: string;
  category: string;
  purpose: string;
  logoUrl: string;
}

const ToolCard: React.FC<ToolCardProps> = ({ name, category, purpose, logoUrl }) => {
  return (
    <div className="flex items-center space-x-4 p-4 bg-bsd-light-gray rounded-xl">
      <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center">
        <img src={logoUrl} alt={name} className="w-8 h-8 object-contain" />
      </div>
      <div>
        <h3 className="font-semibold text-bsd-gray">{name}</h3>
        <p className="text-xs text-bsd-orange">{category}</p>
        <p className="text-sm text-foreground/70 mt-1">{purpose}</p>
      </div>
    </div>
  );
};

export const SoftwareToolsTab: React.FC = () => {
  const programmingTools = [
    {
      name: "Java",
      category: "Programming Language",
      purpose: "Object-oriented programming language used for developing enterprise-level applications",
      logoUrl: "https://www.svgrepo.com/show/184143/java.svg"
    },
    {
      name: "Python",
      category: "Programming Language",
      purpose: "Versatile programming language used for data analysis, AI, web development, and automation",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
    },
    {
      name: "C++",
      category: "Programming Language",
      purpose: "Powerful language for system/software development, game development, and resource-intensive applications",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg"
    },
    {
      name: "JavaScript",
      category: "Programming Language",
      purpose: "Client-side scripting language for creating interactive web applications",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
    },
    {
      name: "R",
      category: "Statistical Programming",
      purpose: "Language for statistical computing and graphics, commonly used in data analysis",
      logoUrl: "https://www.r-project.org/logo/Rlogo.svg"
    },
    {
      name: "HTML/CSS/Bootstrap",
      category: "Web Development",
      purpose: "Core technologies for building and styling web pages and applications",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
    }
  ];

  const developmentTools = [
    {
      name: "Eclipse",
      category: "IDE",
      purpose: "Integrated development environment primarily used for Java development",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Eclipse-Luna-Logo.svg"
    },
    {
      name: "NetBeans",
      category: "IDE",
      purpose: "Development environment for Java, PHP, C++, and other languages",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/98/Apache_NetBeans_Logo.svg"
    },
    {
      name: "PyCharm",
      category: "IDE",
      purpose: "Integrated development environment specifically for Python programming",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1d/PyCharm_Icon.svg"
    },
    {
      name: "Visual Studio Code",
      category: "Code Editor",
      purpose: "Lightweight, cross-platform source code editor with built-in debugging support",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg"
    },
    {
      name: "Jupyter Notebooks",
      category: "Development Environment",
      purpose: "Web application for creating and sharing documents with live code, equations, and visualizations",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg"
    },
    {
      name: "TensorFlow",
      category: "Machine Learning Framework",
      purpose: "Open-source library for machine learning and artificial intelligence",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg"
    }
  ];

  const databaseSystems = [
    {
      name: "MySQL",
      category: "Relational Database",
      purpose: "Open-source relational database management system",
      logoUrl: "https://www.mysql.com/common/logos/logo-mysql-170x115.png"
    },
    {
      name: "Oracle",
      category: "Enterprise Database",
      purpose: "Commercial relational database management system for enterprise applications",
      logoUrl: "https://www.oracle.com/a/ocom/img/cb71-java-logo.png"
    },
    {
      name: "Microsoft SQL Server",
      category: "Relational Database",
      purpose: "Enterprise database management system developed by Microsoft",
      logoUrl: "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg"
    }
  ];

  const operatingSystems = [
    {
      name: "Windows",
      category: "Operating System",
      purpose: "Primary operating system for personal computers and laptops",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Windows_logo_-_2012.svg"
    },
    {
      name: "Linux",
      category: "Operating System",
      purpose: "Open-source operating system commonly used in servers and cybersecurity",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg"
    },
    {
      name: "macOS",
      category: "Operating System",
      purpose: "Operating system for Apple's Mac computers",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/22/MacOS_logo_%282017%29.svg"
    }
  ];

  const cloudVirtualization = [
    {
      name: "VMware",
      category: "Virtualization",
      purpose: "Software for creating and managing virtual machines",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Vmware.svg"
    },
    {
      name: "VirtualBox",
      category: "Virtualization",
      purpose: "Free and open-source virtualization software for x86 computers",
      logoUrl: "https://www.virtualbox.org/graphics/vbox_logo2_gradient.png"
    },
    {
      name: "AWS",
      category: "Cloud Services",
      purpose: "Comprehensive cloud computing platform from Amazon",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
    },
    {
      name: "Azure",
      category: "Cloud Services",
      purpose: "Microsoft's cloud computing service for building and managing applications",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg"
    }
  ];

  const productivityTools = [
    {
      name: "Microsoft Office",
      category: "Productivity Suite",
      purpose: "Suite of applications for document processing, spreadsheets, and presentations",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg"
    },
    {
      name: "Google Workspace",
      category: "Productivity Suite",
      purpose: "Collection of cloud computing, productivity and collaboration tools by Google",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Google_Workspace_2020_Logo.svg"
    }
  ];

  return (
    <RevealSection>
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold text-bsd-gray mb-4">Programming Languages & Web Technologies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {programmingTools.map((tool, index) => (
              <ToolCard key={index} {...tool} />
            ))}
          </div>
        </div>
        
        <div className="pt-4">
          <h3 className="text-xl font-semibold text-bsd-gray mb-4">Development Environments & Frameworks</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {developmentTools.map((tool, index) => (
              <ToolCard key={index} {...tool} />
            ))}
          </div>
        </div>

        <div className="pt-4">
          <h3 className="text-xl font-semibold text-bsd-gray mb-4">Database Systems</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {databaseSystems.map((tool, index) => (
              <ToolCard key={index} {...tool} />
            ))}
          </div>
        </div>

        <div className="pt-4">
          <h3 className="text-xl font-semibold text-bsd-gray mb-4">Operating Systems</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {operatingSystems.map((tool, index) => (
              <ToolCard key={index} {...tool} />
            ))}
          </div>
        </div>

        <div className="pt-4">
          <h3 className="text-xl font-semibold text-bsd-gray mb-4">Virtualization & Cloud Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cloudVirtualization.map((tool, index) => (
              <ToolCard key={index} {...tool} />
            ))}
          </div>
        </div>

        <div className="pt-4">
          <h3 className="text-xl font-semibold text-bsd-gray mb-4">Productivity Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {productivityTools.map((tool, index) => (
              <ToolCard key={index} {...tool} />
            ))}
          </div>
        </div>
      </div>
    </RevealSection>
  );
};
