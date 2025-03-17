
import React from 'react';
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Department } from './types';

interface FacultyFilterProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  activeTab: Department;
  onTabChange: (value: Department) => void;
}

export const FacultyFilter: React.FC<FacultyFilterProps> = ({
  searchTerm,
  onSearchChange,
  activeTab,
  onTabChange
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
      <div className="relative w-full md:w-1/3">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/40 h-4 w-4" />
        <Input
          placeholder="Search faculty..."
          className="pl-10 bg-white"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      
      <Tabs 
        defaultValue={activeTab} 
        className="w-full md:w-auto" 
        onValueChange={(value) => onTabChange(value as Department)}
      >
        <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full md:w-auto">
          <TabsTrigger value="All">All</TabsTrigger>
          <TabsTrigger value="Design">Design</TabsTrigger>
          <TabsTrigger value="Architecture">Architecture</TabsTrigger>
          <TabsTrigger value="Technology">Technology</TabsTrigger>
          <TabsTrigger value="Management">Management</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};
