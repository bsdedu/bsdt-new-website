
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Trophy, Bookmark, Medal, ArrowRight, Download } from "lucide-react";

export const ScholarshipInfo = () => {
  return (
    <div className="space-y-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-bsd-gray mb-4">Scholarship Opportunities</h2>
        <p className="text-foreground/70">
          BSDT offers several merit and need-based scholarships to support deserving students.
        </p>
      </div>
      
      <Tabs defaultValue="merit" className="w-full">
        <TabsList className="grid max-w-md mx-auto w-full grid-cols-2">
          <TabsTrigger value="merit">Merit Scholarships</TabsTrigger>
          <TabsTrigger value="need">Need-Based Support</TabsTrigger>
        </TabsList>
        
        <TabsContent value="merit" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-l-4 border-l-bsd-orange">
              <CardHeader className="pb-3">
                <Badge className="w-fit mb-2" variant="outline">Academic Excellence</Badge>
                <CardTitle className="text-xl">Merit Scholarship</CardTitle>
                <CardDescription>Based on academic performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Trophy className="h-4 w-4 text-bsd-orange" />
                    <span className="text-sm">Up to 25% tuition waiver</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-bsd-orange" />
                    <span className="text-sm">For 90%+ in qualifying exams</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bookmark className="h-4 w-4 text-bsd-orange" />
                    <span className="text-sm">Renewable each semester</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="border-l-4 border-l-bsd-orange">
              <CardHeader className="pb-3">
                <Badge className="w-fit mb-2" variant="outline">Creative Portfolio</Badge>
                <CardTitle className="text-xl">Portfolio Scholarship</CardTitle>
                <CardDescription>For exceptional creative work</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Trophy className="h-4 w-4 text-bsd-orange" />
                    <span className="text-sm">Up to 20% tuition waiver</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Medal className="h-4 w-4 text-bsd-orange" />
                    <span className="text-sm">Based on portfolio assessment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bookmark className="h-4 w-4 text-bsd-orange" />
                    <span className="text-sm">First year only</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="border-l-4 border-l-bsd-orange">
              <CardHeader className="pb-3">
                <Badge className="w-fit mb-2" variant="outline">Early Applicants</Badge>
                <CardTitle className="text-xl">Early Bird Scholarship</CardTitle>
                <CardDescription>For early confirmation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Trophy className="h-4 w-4 text-bsd-orange" />
                    <span className="text-sm">₹25,000 one-time waiver</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Medal className="h-4 w-4 text-bsd-orange" />
                    <span className="text-sm">Apply before March 31, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bookmark className="h-4 w-4 text-bsd-orange" />
                    <span className="text-sm">First semester fee reduction</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="need" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-l-4 border-l-bsd-gray">
              <CardHeader className="pb-3">
                <Badge className="w-fit mb-2" variant="outline">Financial Assistance</Badge>
                <CardTitle className="text-xl">Need-Based Financial Aid</CardTitle>
                <CardDescription>Supporting deserving students with financial constraints</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Trophy className="h-4 w-4 text-bsd-orange" />
                    <span className="text-sm">Up to 30% tuition waiver</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Medal className="h-4 w-4 text-bsd-orange" />
                    <span className="text-sm">Based on financial need assessment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bookmark className="h-4 w-4 text-bsd-orange" />
                    <span className="text-sm">Requires documentation of financial status</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-bsd-orange" />
                    <span className="text-sm">Renewable based on academic performance</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="border-l-4 border-l-bsd-gray">
              <CardHeader className="pb-3">
                <Badge className="w-fit mb-2" variant="outline">Education Loans</Badge>
                <CardTitle className="text-xl">Bank Loan Assistance</CardTitle>
                <CardDescription>Support for securing educational loans</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Medal className="h-4 w-4 text-bsd-orange" />
                    <span className="text-sm">Partnerships with leading banks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bookmark className="h-4 w-4 text-bsd-orange" />
                    <span className="text-sm">Assistance with loan documentation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-bsd-orange" />
                    <span className="text-sm">Preferential interest rates for BSDT students</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy className="h-4 w-4 text-bsd-orange" />
                    <span className="text-sm">Flexible repayment options</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Download Loan Guide
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto mb-4">
              For detailed information about our need-based financial support programs and eligibility criteria, 
              please contact our admissions office or schedule a consultation with our financial aid counselor.
            </p>
            <Button>Schedule a Financial Aid Consultation</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
