import React from 'react';
import TutelrProgramPage, { TutelrProgramContent } from '@/components/tutelr/TutelrProgramPage';

const programs: Record<string, TutelrProgramContent> = {
  ethicalHacking: {
    title: 'Ethical Hacking and Red Teaming',
    slug: 'ethical-hacking-red-teaming',
    description: 'Develop an attacker-aware approach to identifying vulnerabilities, testing defences, and strengthening digital systems responsibly.',
    overview: 'This program introduces the methods used to assess security from an adversarial perspective. Learners explore ethical testing, attack simulation, vulnerability analysis, and the clear reporting needed to help organisations improve their security posture.',
    areas: ['Ethical hacking foundations', 'Vulnerability assessment', 'Red team methods and simulations', 'Security testing and reporting'],
    cta: { label: 'Apply Now', href: 'https://apply.bsd.edu.in/', newTab: false },
  },
  cloudSecurity: {
    title: 'Cloud Security and DevSecOps',
    slug: 'cloud-security-devsecops',
    description: 'Explore secure cloud environments and learn how security can be integrated throughout modern software development workflows.',
    overview: 'This program focuses on protecting cloud-based systems while building security into development and operations practices. Learners examine cloud risks, identity and access, secure delivery pipelines, monitoring, and collaborative DevSecOps processes.',
    areas: ['Cloud security fundamentals', 'Identity and access management', 'Secure development pipelines', 'Monitoring and DevSecOps practices'],
  },
  digitalForensics: {
    title: 'Digital Forensics and Incident Response',
    slug: 'digital-forensics-incident-response',
    description: 'Learn structured approaches to investigating digital evidence, understanding security incidents, and supporting effective response and recovery.',
    overview: 'This program develops practical awareness of how digital incidents are identified, investigated, documented, and contained. Learners explore evidence handling, forensic analysis, incident workflows, and communication during security events.',
    areas: ['Digital evidence and investigation', 'Incident identification and triage', 'Forensic analysis workflows', 'Response, recovery, and reporting'],
  },
  socBlueTeam: {
    title: 'SOC and Blue Teaming',
    slug: 'soc-blue-teaming',
    description: 'Build defensive security skills for monitoring systems, analysing alerts, detecting threats, and supporting security operations.',
    overview: 'This program introduces the people, processes, and technologies behind a Security Operations Centre. Learners explore defensive monitoring, alert investigation, threat detection, escalation, and the teamwork required to protect organisations.',
    areas: ['Security operations centre workflows', 'Threat monitoring and detection', 'Alert analysis and escalation', 'Defensive blue team practices'],
  },
  grcControls: {
    title: 'GRC and Controls',
    slug: 'grc-controls',
    description: 'Understand how governance, risk, compliance, and security controls help organisations manage cyber risk responsibly.',
    overview: 'This program examines cybersecurity through an organisational and risk-based lens. Learners explore governance frameworks, risk assessment, compliance responsibilities, control design, and the documentation that supports accountable security management.',
    areas: ['Security governance foundations', 'Cyber risk assessment', 'Compliance and policy awareness', 'Security controls and documentation'],
  },
};

export const EthicalHackingRedTeaming: React.FC = () => <TutelrProgramPage program={programs.ethicalHacking} />;
export const CloudSecurityDevSecOps: React.FC = () => <TutelrProgramPage program={programs.cloudSecurity} />;
export const DigitalForensicsIncidentResponse: React.FC = () => <TutelrProgramPage program={programs.digitalForensics} />;
export const SocBlueTeaming: React.FC = () => <TutelrProgramPage program={programs.socBlueTeam} />;
export const GrcControls: React.FC = () => <TutelrProgramPage program={programs.grcControls} />;