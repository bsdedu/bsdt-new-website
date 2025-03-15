
import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui-elements/Card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

interface ApplicationFormProps {
  programName: string;
}

export const ApplicationForm: React.FC<ApplicationFormProps> = ({ programName }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    education: '',
    program: programName,
    message: '',
    acceptTerms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, acceptTerms: checked }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, education: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    if (!formData.acceptTerms) {
      toast({
        title: "Terms & Conditions",
        description: "Please accept the terms and conditions to proceed.",
        variant: "destructive"
      });
      return;
    }
    
    // Form submission would go here
    console.log("Form submitted:", formData);
    
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. We'll contact you shortly.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      education: '',
      program: programName,
      message: '',
      acceptTerms: false
    });
  };

  return (
    <Card className="w-full max-w-xl mx-auto shadow-md">
      <CardHeader>
        <h3 className="text-xl font-bold text-bsd-gray">Apply for {programName}</h3>
        <p className="text-sm text-foreground/70">
          Fill out the form below to start your application process
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input 
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input 
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input 
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your contact number"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="education">Highest Education</Label>
            <Select 
              onValueChange={handleSelectChange}
              value={formData.education}
            >
              <SelectTrigger id="education">
                <SelectValue placeholder="Select your education level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10th">10th Grade</SelectItem>
                <SelectItem value="12th">12th Grade</SelectItem>
                <SelectItem value="diploma">Diploma</SelectItem>
                <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                <SelectItem value="master">Master's Degree</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Your Message (Optional)</Label>
            <Textarea 
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us why you're interested in this program"
              rows={4}
            />
          </div>
          
          <div className="flex items-center space-x-2 pt-2">
            <Checkbox 
              id="terms" 
              checked={formData.acceptTerms}
              onCheckedChange={handleCheckboxChange}
            />
            <Label 
              htmlFor="terms" 
              className="text-sm text-foreground/70 font-normal"
            >
              I accept the terms and conditions and privacy policy
            </Label>
          </div>
          
          <Button type="submit" className="w-full bg-bsd-orange hover:bg-bsd-orange/90">
            Submit Application
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
