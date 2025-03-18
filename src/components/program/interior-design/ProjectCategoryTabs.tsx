
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projectCategories } from '../gallery/projectCategories';
import { ProjectCarousel } from '../gallery/ProjectCarousel';

export const ProjectCategoryTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('residential');
  
  return (
    <Tabs defaultValue="residential" onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="residential">Residential</TabsTrigger>
        <TabsTrigger value="commercial">Commercial</TabsTrigger>
        <TabsTrigger value="conceptual">Conceptual</TabsTrigger>
      </TabsList>
      
      <TabsContent value="residential" className="mt-8">
        <ProjectCarousel projects={projectCategories.residential} />
      </TabsContent>
      
      <TabsContent value="commercial" className="mt-8">
        <ProjectCarousel projects={projectCategories.commercial} />
      </TabsContent>
      
      <TabsContent value="conceptual" className="mt-8">
        <ProjectCarousel projects={projectCategories.conceptual} />
      </TabsContent>
    </Tabs>
  );
};
