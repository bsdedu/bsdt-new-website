
import React from 'react';
import { Award, Users, Briefcase, Building } from "lucide-react";
import { Card, CardContent } from "../../ui-elements/Card";
import CountUp from '../../ui-elements/CountUp';

interface StatItemProps {
  label: string;
  value: number;
  icon: React.ReactNode;
  suffix: string;
}

const StatItem: React.FC<StatItemProps> = ({ label, value, icon, suffix }) => (
  <Card className="text-center py-6 border-bsd-orange/10 hover:border-bsd-orange/30 transition-all duration-500" isHoverable>
    <CardContent className="flex flex-col items-center justify-center p-4">
      <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <div className="text-3xl md:text-4xl font-bold text-bsd-gray mb-2 flex items-center justify-center">
        <CountUp end={value} duration={2.5} />
        <span>{suffix}</span>
      </div>
      <p className="text-sm md:text-base text-foreground/70">{label}</p>
    </CardContent>
  </Card>
);

export const KeyStats: React.FC = () => {
  const stats = [
    { label: 'Years of Design Excellence', value: 30, icon: <Award className="w-6 h-6 text-bsd-orange" />, suffix: '+' },
    { label: 'Students Enrolled', value: 500, icon: <Users className="w-6 h-6 text-bsd-orange" />, suffix: '+' },
    { label: 'Placement Rate', value: 92, icon: <Briefcase className="w-6 h-6 text-bsd-orange" />, suffix: '%' },
    { label: 'Industry Partners', value: 50, icon: <Building className="w-6 h-6 text-bsd-orange" />, suffix: '+' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-14">
      {stats.map((stat, index) => (
        <StatItem key={index} {...stat} />
      ))}
    </div>
  );
};
