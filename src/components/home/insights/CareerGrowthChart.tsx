
import React from 'react';
import { Progress } from "@/components/ui/progress";
import { PenTool, Home, Gamepad, Building, Paintbrush, Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Cell } from 'recharts';
import { ChartTooltip } from "@/components/ui/chart";

interface CareerData {
  field: string;
  growth: number;
  color: string;
  icon: React.ReactNode;
}

// Export the careerData so it can be imported in other components
export const careerData: CareerData[] = [
  { field: 'UX/UI Design', growth: 85, color: '#F97316', icon: <PenTool className="w-5 h-5" /> },
  { field: 'Interior Design', growth: 72, color: '#8B5CF6', icon: <Home className="w-5 h-5" /> },
  { field: 'Game Design', growth: 78, color: '#0EA5E9', icon: <Gamepad className="w-5 h-5" /> },
  { field: 'Architectural Design', growth: 65, color: '#10B981', icon: <Building className="w-5 h-5" /> },
  { field: 'Graphic Design', growth: 70, color: '#EC4899', icon: <Paintbrush className="w-5 h-5" /> },
];

interface Props {
  animate: boolean;
  chartData: CareerData[];
}

export const CareerGrowthChart: React.FC<Props> = ({ animate, chartData }) => {
  return (
    <div id="career-growth-section">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl md:text-3xl font-display font-bold text-bsd-gray">
          Career Growth in Design Fields
        </h3>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center text-xs text-muted-foreground hover:text-bsd-orange/80 transition-colors cursor-pointer">
                <Info className="w-4 h-4 mr-1" />
                <span>Source</span>
              </div>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p className="text-xs">Source: Bureau of Labor Statistics, 2023 <br />Design Industry Growth Report</p>
              <a href="https://www.bls.gov/ooh/arts-and-design/" 
                 className="text-xs flex items-center text-bsd-orange mt-1 hover:underline" 
                 target="_blank" 
                 rel="noopener noreferrer">
                Visit source <Info className="w-3 h-3 ml-1" />
              </a>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <p className="text-foreground/70 mb-8">
        The design industry is experiencing rapid growth, offering lucrative opportunities for our graduates across various specializations.
      </p>

      <div className="space-y-6 md:pr-6">
        {careerData.map((career, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full flex items-center justify-center mr-2" style={{ backgroundColor: `${career.color}20` }}>
                  <div style={{ color: career.color }}>{career.icon}</div>
                </div>
                <span className="text-bsd-gray font-medium">{career.field}</span>
              </div>
              <span className="text-bsd-gray font-bold">{career.growth}%</span>
            </div>
            <Progress 
              value={animate ? career.growth : 0} 
              className="h-2 transition-all duration-1500 ease-out"
              style={{ backgroundColor: `${career.color}20` }}
              indicatorClassName="bg-gradient-to-r" 
              indicatorStyle={{ backgroundColor: career.color }}
            />
          </div>
        ))}
      </div>

      {/* Mobile-only chart view */}
      <div className="md:hidden mt-8 h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="field" tick={{ fontSize: 10 }} />
            <YAxis domain={[0, 100]} />
            <ChartTooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="bg-white p-2 rounded-md shadow-md border">
                      <p className="font-bold">{data.field}</p>
                      <p className="text-sm">Growth: {data.growth}%</p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar dataKey="growth" radius={[4, 4, 0, 0]}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
