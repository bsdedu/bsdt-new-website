
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, Check, CreditCard, CalendarClock, BookOpen, Laptop } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export const AdditionalFeesInfo = () => {
  return (
    <div className="space-y-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-bsd-gray mb-4">Payment Information</h2>
        <p className="text-foreground/70">
          Additional details about payment methods, schedules, and other fee-related information.
        </p>
      </div>
      
      <Tabs defaultValue="payment-methods" className="w-full">
        <TabsList className="grid max-w-2xl mx-auto w-full grid-cols-3">
          <TabsTrigger value="payment-methods">Payment Methods</TabsTrigger>
          <TabsTrigger value="schedules">Payment Schedules</TabsTrigger>
          <TabsTrigger value="additional-fees">Additional Costs</TabsTrigger>
        </TabsList>
        
        <TabsContent value="payment-methods" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Accepted Payment Methods</CardTitle>
              <CardDescription>
                We offer multiple convenient payment options for fees
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CreditCard className="h-5 w-5 text-bsd-orange mt-0.5" />
                    <div>
                      <h3 className="font-medium">Online Payment</h3>
                      <p className="text-sm text-foreground/70">
                        Pay securely online using credit/debit cards, net banking, or UPI.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-bsd-orange mt-0.5" />
                    <div>
                      <h3 className="font-medium">Direct Bank Transfer</h3>
                      <p className="text-sm text-foreground/70">
                        Transfer funds directly to our bank account via NEFT/RTGS.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CreditCard className="h-5 w-5 text-bsd-orange mt-0.5" />
                    <div>
                      <h3 className="font-medium">EMI Options</h3>
                      <p className="text-sm text-foreground/70">
                        No-cost EMI options available with select banks and credit cards.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-bsd-orange mt-0.5" />
                    <div>
                      <h3 className="font-medium">Demand Draft</h3>
                      <p className="text-sm text-foreground/70">
                        Submit a DD in favor of "Bangalore School of Design & Technology".
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Alert variant="default" className="bg-muted/50 border-muted">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Important Note</AlertTitle>
                <AlertDescription>
                  All payments must be made as per the schedule mentioned in your offer letter.
                  Late payments may incur additional charges.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="schedules" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Semester Fee Payment Schedule</CardTitle>
              <CardDescription>
                Important deadlines for fee payments
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CalendarClock className="h-5 w-5 text-bsd-orange mt-0.5" />
                  <div>
                    <h3 className="font-medium">Registration Fee</h3>
                    <p className="text-sm text-foreground/70">
                      ₹30,000 to be paid at the time of confirming admission.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CalendarClock className="h-5 w-5 text-bsd-orange mt-0.5" />
                  <div>
                    <h3 className="font-medium">1st Semester Fee</h3>
                    <p className="text-sm text-foreground/70">
                      Due within 15 days of receiving the offer letter.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CalendarClock className="h-5 w-5 text-bsd-orange mt-0.5" />
                  <div>
                    <h3 className="font-medium">Subsequent Semester Fees</h3>
                    <p className="text-sm text-foreground/70">
                      Due 30 days before the start of each semester.
                    </p>
                  </div>
                </div>
              </div>
              
              <Alert variant="default" className="bg-muted/50 border-muted">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Important Note</AlertTitle>
                <AlertDescription>
                  Students with outstanding fees will not be allowed to attend classes or appear for examinations. 
                  Please ensure timely payment to avoid any inconvenience.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="additional-fees" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Additional Costs to Consider</CardTitle>
              <CardDescription>
                Beyond tuition fees, there are some additional costs students should plan for
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-bsd-orange mt-0.5" />
                    <div>
                      <h3 className="font-medium">Study Materials</h3>
                      <p className="text-sm text-foreground/70">
                        ₹8,000 - ₹15,000 per year for books, supplies, and materials 
                        (varies by program).
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Laptop className="h-5 w-5 text-bsd-orange mt-0.5" />
                    <div>
                      <h3 className="font-medium">Technology</h3>
                      <p className="text-sm text-foreground/70">
                        Personal computer/laptop with required specifications 
                        (program-specific requirements will be shared in the offer letter).
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-bsd-orange mt-0.5" />
                    <div>
                      <h3 className="font-medium">Field Trips & Workshops</h3>
                      <p className="text-sm text-foreground/70">
                        Optional field trips and workshops may have additional costs.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Laptop className="h-5 w-5 text-bsd-orange mt-0.5" />
                    <div>
                      <h3 className="font-medium">Software Licenses</h3>
                      <p className="text-sm text-foreground/70">
                        Some specialized software licenses might need to be purchased 
                        by students (discounted educational rates available).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
