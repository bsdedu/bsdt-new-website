
import React, { useState } from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, IndianRupee, Info } from "lucide-react";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { feeStructureData } from './feeStructureData';

export const FeesTable = () => {
  const [activeTab, setActiveTab] = useState<string>("undergraduate");

  const getSubtitle = (tab: string) => {
    switch(tab) {
      case "undergraduate":
        return "3-4 Year Full-Time Programs";
      case "diploma":
        return "6 Month - 1 Year Professional Programs";
      default:
        return "";
    }
  };

  // Filter programs based on active tab
  const filteredPrograms = feeStructureData.programs.filter(program => {
    if (activeTab === "undergraduate") {
      return program.duration.includes("Years");
    } else if (activeTab === "diploma") {
      return program.duration.includes("Year") || program.duration.includes("Months");
    }
    return true;
  });

  return (
    <Card className="shadow-md">
      <CardHeader className="space-y-1">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <CardTitle className="text-2xl text-bsd-gray font-display">Fee Structure for Academic Year 2025-2026</CardTitle>
            <CardDescription className="mt-2">
              {getSubtitle(activeTab)}
            </CardDescription>
          </div>
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            <span>Download Fee Structure</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="undergraduate" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2 mb-6">
            <TabsTrigger value="undergraduate">Undergraduate Programs</TabsTrigger>
            <TabsTrigger value="diploma">Diploma Programs</TabsTrigger>
          </TabsList>
          
          <TabsContent value="undergraduate" className="mt-0">
            <div className="overflow-x-auto">
              <Table>
                <TableCaption>
                  <div className="text-sm text-left">
                    <p>* Registration fee of ₹30,000 is applicable for all programs and is non-refundable.</p>
                    <p>* Terms & conditions in Offer Letter issued upon admission confirmation is final.</p>
                  </div>
                </TableCaption>
                <TableHeader>
                  <TableRow className="bg-muted/30">
                    <TableHead className="w-[50px] font-medium">SL No.</TableHead>
                    <TableHead className="font-medium">Program</TableHead>
                    <TableHead className="font-medium">Duration</TableHead>
                    <TableHead className="font-medium">Semesters</TableHead>
                    <TableHead className="font-medium">
                      <div className="flex items-center gap-1">
                        <span>Total Fee</span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="w-[200px]">Total course fee excluding registration fee</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </TableHead>
                    <TableHead className="font-medium text-center">Registration</TableHead>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                      <TableHead key={sem} className="font-medium text-center">{sem} Sem</TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPrograms.map((program, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{index + 1}</TableCell>
                      <TableCell>
                        <div className="font-medium">{program.name}</div>
                        {program.specialization && (
                          <div className="text-sm text-muted-foreground">
                            {program.specialization}
                          </div>
                        )}
                      </TableCell>
                      <TableCell>{program.duration}</TableCell>
                      <TableCell>{program.semesters}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <IndianRupee className="h-3.5 w-3.5 mr-1" />
                          <span>{program.totalFee.toLocaleString('en-IN')}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-center">₹30,000</TableCell>
                      {program.semesterFees.map((fee, idx) => (
                        <TableCell key={idx} className="text-center">
                          {fee ? `₹${fee.toLocaleString('en-IN')}` : ''}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          
          <TabsContent value="diploma" className="mt-0">
            <div className="overflow-x-auto">
              <Table>
                <TableCaption>
                  <div className="text-sm text-left">
                    <p>* Registration fee of ₹30,000 is applicable for all programs and is non-refundable.</p>
                    <p>* Terms & conditions in Offer Letter issued upon admission confirmation is final.</p>
                  </div>
                </TableCaption>
                <TableHeader>
                  <TableRow className="bg-muted/30">
                    <TableHead className="w-[50px] font-medium">SL No.</TableHead>
                    <TableHead className="font-medium">Program</TableHead>
                    <TableHead className="font-medium">Duration</TableHead>
                    <TableHead className="font-medium">Semesters</TableHead>
                    <TableHead className="font-medium">
                      <div className="flex items-center gap-1">
                        <span>Total Fee</span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="w-[200px]">Total course fee excluding registration fee</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </TableHead>
                    <TableHead className="font-medium text-center">Registration</TableHead>
                    {[1, 2].map((sem) => (
                      <TableHead key={sem} className="font-medium text-center">{sem} Sem</TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPrograms.map((program, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{index + 1}</TableCell>
                      <TableCell>
                        <div className="font-medium">{program.name}</div>
                        {program.specialization && (
                          <div className="text-sm text-muted-foreground">
                            {program.specialization}
                          </div>
                        )}
                      </TableCell>
                      <TableCell>{program.duration}</TableCell>
                      <TableCell>{program.semesters}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <IndianRupee className="h-3.5 w-3.5 mr-1" />
                          <span>{program.totalFee.toLocaleString('en-IN')}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-center">₹30,000</TableCell>
                      {program.semesterFees.slice(0, 2).map((fee, idx) => (
                        <TableCell key={idx} className="text-center">
                          {fee ? `₹${fee.toLocaleString('en-IN')}` : ''}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
