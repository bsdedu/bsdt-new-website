
import React, { useState, useEffect } from 'react';
import { RevealSection } from "../ui-elements/RevealSection";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen, Download, Lock } from "lucide-react";
import { AnimatedButton } from "../ui-elements/AnimatedButton";
import { Input } from "@/components/ui/input";
import { Card } from "../ui-elements/Card";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name is required"
  }),
  email: z.string().email({
    message: "Please enter a valid email"
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number"
  }),
  course: z.string().min(1, {
    message: "Please select a course of interest"
  })
});

export const EnquiryFormSection: React.FC<{ programSpecific?: boolean }> = ({ programSpecific = false }) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Check if form was previously submitted
  useEffect(() => {
    const hasSubmitted = localStorage.getItem('enquiryFormSubmitted') === 'true';
    if (hasSubmitted) {
      setFormSubmitted(true);
    }
  }, []);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      course: programSpecific ? "UG Interior Design" : "",
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Set the form submitted flag in localStorage
    localStorage.setItem('enquiryFormSubmitted', 'true');
    setFormSubmitted(true);
    toast({
      title: "Enquiry Submitted",
      description: "Thank you for your interest! Our team will contact you shortly."
    });
  }

  const handleDownloadBrochure = () => {
    // In a real application, this would download an actual PDF
    // For now, we'll just show a toast message
    toast({
      title: "Brochure Downloaded",
      description: "The program brochure with fee details has been downloaded."
    });
  };

  const handleViewPlacementReport = () => {
    navigate('/placement-report');
  };

  return <section className="py-16 bg-bsd-light-gray relative overflow-hidden md:py-[50px]" id="enquiry-form">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-white to-transparent opacity-70"></div>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-bsd-orange/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-bsd-gray/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          {/* CTA Content */}
          <RevealSection direction="right" className="lg:col-span-2">
            <div className="space-y-6">
              <Badge variant="bsdOrange" className="mb-2">Start Your Journey Today</Badge>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
                Take the First Step Towards Your Creative Career
              </h2>
              <p className="text-foreground/70">
                Our admissions team is ready to guide you through the application process. Fill out the form and begin your journey with BSDT.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ArrowRight className="w-4 h-4 text-bsd-orange" />
                  </div>
                  <div>
                    <h4 className="font-medium text-bsd-gray">Limited Seats Available</h4>
                    <p className="text-sm text-foreground/70">Apply now to secure your place in our upcoming batch</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ArrowRight className="w-4 h-4 text-bsd-orange" />
                  </div>
                  <div>
                    <h4 className="font-medium text-bsd-gray">Scholarship Opportunities</h4>
                    <p className="text-sm text-foreground/70">Merit-based scholarships for deserving candidates</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ArrowRight className="w-4 h-4 text-bsd-orange" />
                  </div>
                  <div>
                    <h4 className="font-medium text-bsd-gray">Personal Counseling</h4>
                    <p className="text-sm text-foreground/70">Get personalized guidance from our academic counselors</p>
                  </div>
                </div>
              </div>
              
              {/* Brochure & Placement Report Section */}
              <div className="mt-6 p-5 border border-dashed border-bsd-orange/30 rounded-xl bg-white/50">
                <div className="flex items-center mb-4">
                  {formSubmitted ? (
                    <>
                      <Download className="w-8 h-8 text-bsd-orange flex-shrink-0" />
                      <div className="ml-4">
                        <h4 className="font-medium text-bsd-gray">Program Brochure with Fee Details</h4>
                        <p className="text-sm text-foreground/70 mb-2">Complete information about the program, curriculum, and fee structure</p>
                        <AnimatedButton size="sm" onClick={handleDownloadBrochure}>
                          <Download className="w-4 h-4 mr-2" /> Download Now
                        </AnimatedButton>
                      </div>
                    </>
                  ) : (
                    <>
                      <Lock className="w-8 h-8 text-bsd-gray/40 flex-shrink-0" />
                      <div className="ml-4">
                        <h4 className="font-medium text-bsd-gray">Program Brochure with Fee Details</h4>
                        <p className="text-sm text-foreground/70">Submit the enquiry form to unlock the detailed program brochure with fee structure</p>
                      </div>
                    </>
                  )}
                </div>
                
                {/* Placement Report Section */}
                <div className="flex items-center pt-4 border-t border-dashed border-bsd-orange/20">
                  {formSubmitted ? (
                    <>
                      <Download className="w-8 h-8 text-bsd-orange flex-shrink-0" />
                      <div className="ml-4">
                        <h4 className="font-medium text-bsd-gray">Placement Report</h4>
                        <p className="text-sm text-foreground/70 mb-2">Detailed information about placements, top recruiters, and salary packages</p>
                        <AnimatedButton size="sm" onClick={handleViewPlacementReport}>
                          <Download className="w-4 h-4 mr-2" /> View Report
                        </AnimatedButton>
                      </div>
                    </>
                  ) : (
                    <>
                      <Lock className="w-8 h-8 text-bsd-gray/40 flex-shrink-0" />
                      <div className="ml-4">
                        <h4 className="font-medium text-bsd-gray">Placement Report</h4>
                        <p className="text-sm text-foreground/70">Submit the enquiry form to access our detailed placement report</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </RevealSection>
          
          {/* Enquiry Form */}
          <RevealSection direction="left" className="lg:col-span-3">
            <Card className="bg-white shadow-md border-0">
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-semibold mb-6 text-bsd-gray flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-bsd-orange" />
                  Enquire Now & Get Brochure
                </h3>
                
                {formSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="text-lg font-medium text-bsd-gray mb-2">Thank You for Your Enquiry!</h4>
                    <p className="text-foreground/70 mb-6">
                      Our admissions team will contact you shortly. You now have access to our brochures and placement reports.
                    </p>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <FormField control={form.control} name="name" render={({
                        field
                      }) => <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>} />
                        
                        <FormField control={form.control} name="email" render={({
                        field
                      }) => <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input placeholder="Your email" type="email" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>} />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <FormField control={form.control} name="phone" render={({
                        field
                      }) => <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="Your phone number" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>} />
                        
                        <FormField control={form.control} name="course" render={({
                        field
                      }) => <FormItem>
                              <FormLabel>Course of Interest</FormLabel>
                              <FormControl>
                                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" {...field}>
                                  <option value="">Select a course</option>
                                  <option value="UG Interior Design">UG Interior Design</option>
                                  <option value="UG Fashion Design">UG Fashion Design</option>
                                  <option value="P.Diploma Interior Design">P.Diploma Interior Design</option>
                                  <option value="P.Diploma Graphic Design">P.Diploma Graphic Design + UI & UX</option>
                                  <option value="P.Diploma UI UX">P.Diploma UI & UX</option>
                                  <option value="PG.Diploma Landscape Design">PG.Diploma Landscape Design</option>
                                </select>
                              </FormControl>
                              <FormMessage />
                            </FormItem>} />
                      </div>
                      
                      <AnimatedButton type="submit" className="w-full">
                        Submit Enquiry
                      </AnimatedButton>
                    </form>
                  </Form>
                )}
              </div>
            </Card>
          </RevealSection>
        </div>
      </div>
    </section>;
};
