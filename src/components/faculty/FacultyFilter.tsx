
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Department } from './types';

interface FacultyFilterProps {
  activeTab: Department;
  onTabChange: (value: Department) => void;
}

export const FacultyFilter: React.FC<FacultyFilterProps> = ({
  activeTab,
  onTabChange
}) => {
  return (
    <div className="flex flex-col gap-4 mb-8">
      <Tabs 
        defaultValue={activeTab} 
        className="w-full" 
        onValueChange={(value) => onTabChange(value as Department)}
      >
        <TabsList className="flex flex-wrap justify-center w-full">
          <TabsTrigger value="All">All</TabsTrigger>
          <TabsTrigger value="Design">Design</TabsTrigger>
          <TabsTrigger value="Technology">Technology</TabsTrigger>
          <TabsTrigger value="International Faculty">International</TabsTrigger>
          <TabsTrigger value="Guest Faculty">Guest</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};
