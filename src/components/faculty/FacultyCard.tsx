
import React from 'react';
import { Card, CardContent } from "../ui-elements/Card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { GraduationCap, Book, Award } from "lucide-react";
import { FacultyMember } from './types';

interface FacultyCardProps {
  faculty: FacultyMember;
}

export const FacultyCard: React.FC<FacultyCardProps> = ({ faculty }) => {
  return (
    <Card className="overflow-hidden border shadow-md hover:shadow-xl transition-all duration-300">
      <div className="relative">
        <div className="h-64 bg-bsd-light-gray overflow-hidden">
          <Avatar className="h-full w-full">
            <AvatarImage 
              src={faculty.imageUrl} 
              alt={faculty.name}
              className="object-cover object-top w-full h-full"
            />
            <AvatarFallback className="text-2xl font-medium">
              {faculty.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-bsd-orange/80 text-white">
            {Array.isArray(faculty.department) ? faculty.department.join(', ') : faculty.department}
          </span>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-bsd-gray">{faculty.name}</h3>
        <p className="text-bsd-orange font-medium mb-3">{faculty.role}</p>
        
        <div className="space-y-4 mt-4">
          {faculty.qualifications && (
            <div className="flex items-start gap-2">
              <GraduationCap className="w-5 h-5 text-bsd-orange flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-bsd-gray">Qualifications</p>
                <p className="text-sm text-foreground/70">{faculty.qualifications}</p>
              </div>
            </div>
          )}
          
          {faculty.specialization && (
            <div className="flex items-start gap-2">
              <Book className="w-5 h-5 text-bsd-orange flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-bsd-gray">Specialization</p>
                <p className="text-sm text-foreground/70">{faculty.specialization}</p>
              </div>
            </div>
          )}
          
          {faculty.achievements && (
            <div className="flex items-start gap-2">
              <Award className="w-5 h-5 text-bsd-orange flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-bsd-gray">Achievements</p>
                <p className="text-sm text-foreground/70">{faculty.achievements}</p>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
