
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
  const dataAnalyticsTools = [
    {
      name: "Python & Libraries",
      category: "Data Analysis",
      purpose: "Programming language with pandas, NumPy, and scikit-learn for data analysis and machine learning",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
    },
    {
      name: "R Studio",
      category: "Statistical Analysis",
      purpose: "Environment for statistical computing and graphics for data analysis",
      logoUrl: "https://www.rstudio.com/wp-content/uploads/2018/10/RStudio-Logo-flat.svg"
    },
    {
      name: "Tableau",
      category: "Data Visualization",
      purpose: "Interactive data visualization software for creating dashboards and reports",
      logoUrl: "https://logos-world.net/wp-content/uploads/2021/10/Tableau-Symbol.png"
    },
    {
      name: "Power BI",
      category: "Business Intelligence",
      purpose: "Business analytics service for interactive visualizations and business intelligence",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg"
    },
    {
      name: "SQL",
      category: "Database Query",
      purpose: "Standard language for managing and querying relational databases",
      logoUrl: "https://www.svgrepo.com/show/331760/sql-database-generic.svg"
    },
    {
      name: "MongoDB",
      category: "NoSQL Database",
      purpose: "Document-oriented database for managing large volumes of unstructured data",
      logoUrl: "https://www.mongodb.com/assets/images/global/leaf.svg"
    }
  ];

  const cyberSecurityTools = [
    {
      name: "Wireshark",
      category: "Network Analysis",
      purpose: "Network protocol analyzer for monitoring and troubleshooting network issues",
      logoUrl: "https://www.wireshark.org/assets/theme-2015/images/wireshark_logo.png"
    },
    {
      name: "Metasploit",
      category: "Penetration Testing",
      purpose: "Framework for developing, testing, and executing exploits against remote targets",
      logoUrl: "https://www.metasploit.com/includes/images/favicon.ico"
    },
    {
      name: "Nmap",
      category: "Network Scanning",
      purpose: "Open-source utility for network discovery and security auditing",
      logoUrl: "https://nmap.org/images/nmap-logo-256x256.png"
    },
    {
      name: "Burp Suite",
      category: "Web Security",
      purpose: "Platform for performing security testing of web applications",
      logoUrl: "https://portswigger.net/burp/communitydownload/images/burp-logo.svg"
    },
    {
      name: "Kali Linux",
      category: "Security OS",
      purpose: "Advanced penetration testing and security auditing Linux distribution",
      logoUrl: "https://www.kali.org/images/kali-logo.svg"
    },
    {
      name: "Snort",
      category: "Intrusion Detection",
      purpose: "Open-source network intrusion prevention and detection system",
      logoUrl: "https://www.snort.org/assets/SnortTM.png"
    }
  ];

  return (
    <RevealSection>
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold text-bsd-gray mb-4">Data Analytics Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {dataAnalyticsTools.map((tool, index) => (
              <ToolCard key={index} {...tool} />
            ))}
          </div>
        </div>
        
        <div className="pt-4">
          <h3 className="text-xl font-semibold text-bsd-gray mb-4">Cyber Security Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cyberSecurityTools.map((tool, index) => (
              <ToolCard key={index} {...tool} />
            ))}
          </div>
        </div>
      </div>
    </RevealSection>
  );
};
