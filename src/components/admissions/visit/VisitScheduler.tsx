
import React, { useState } from 'react';
import { format } from 'date-fns';
import { CalendarIcon, Clock, Users } from 'lucide-react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { AnimatedButton } from '@/components/ui-elements/AnimatedButton';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const timeSlots = [
  { id: 'morning', label: 'Morning', time: '10:00 AM - 12:00 PM', available: true },
  { id: 'afternoon', label: 'Afternoon', time: '02:00 PM - 04:00 PM', available: true },
  { id: 'evening', label: 'Evening', time: '04:30 PM - 06:00 PM', available: false },
];

export const VisitScheduler: React.FC = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState<string | undefined>(undefined);
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    visitors: 1,
    interestedPrograms: '',
    message: '',
  });
  const { toast } = useToast();

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    if (selectedDate) {
      // In a real app, here you would check availability for this date from the backend
      setTimeout(() => setStep(2), 300); // Move to time slot selection
    }
  };

  const handleTimeSlotSelect = (slot: string) => {
    setTimeSlot(slot);
    setTimeout(() => setStep(3), 300); // Move to form
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real implementation, this would connect to Calendly or a similar service
    toast({
      title: "Visit Request Submitted!",
      description: `Your campus visit has been scheduled for ${date ? format(date, 'PPPP') : ''} at ${timeSlots.find(slot => slot.id === timeSlot)?.time || ''}.`,
    });
    
    // Reset the form
    setDate(undefined);
    setTimeSlot(undefined);
    setStep(1);
    setFormData({
      name: '',
      email: '',
      phone: '',
      visitors: 1,
      interestedPrograms: '',
      message: '',
    });
  };

  return (
    <RevealSection>
      <Card className="border border-border/40 shadow-sm">
        <CardHeader className="bg-bsd-light-gray border-b border-border/20">
          <CardTitle className="text-2xl text-bsd-gray">Book Your Campus Tour</CardTitle>
          <CardDescription>
            Select your preferred date and time, and we'll arrange a personalized campus tour for you.
          </CardDescription>
        </CardHeader>
        
        <CardContent className="pt-6">
          <div className="space-y-8">
            {/* Step 1: Date Selection */}
            <div className={step === 1 ? 'block' : 'hidden'}>
              <div className="mb-4">
                <h3 className="text-lg font-medium text-bsd-gray mb-2">Step 1: Select a Date</h3>
                <p className="text-sm text-foreground/70 mb-4">
                  Choose a date for your campus visit. Campus tours are available on weekdays (Monday-Friday).
                </p>
              </div>
              
              <div className="flex justify-center my-6">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={handleDateSelect}
                  disabled={(date) => {
                    // Disable weekends and past dates
                    const day = date.getDay();
                    return date < new Date() || day === 0 || day === 6;
                  }}
                  className="rounded-md border pointer-events-auto"
                />
              </div>
            </div>
            
            {/* Step 2: Time Slot Selection */}
            <div className={step === 2 ? 'block' : 'hidden'}>
              <div className="mb-4">
                <h3 className="text-lg font-medium text-bsd-gray mb-2">Step 2: Select a Time Slot</h3>
                <p className="text-sm text-foreground/70 mb-2">
                  Choose a convenient time for your visit on {date ? format(date, 'PPPP') : ''}
                </p>
                <Button 
                  variant="link" 
                  className="p-0 text-bsd-orange" 
                  onClick={() => setStep(1)}
                >
                  Change Date
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                {timeSlots.map((slot) => (
                  <div
                    key={slot.id}
                    className={cn(
                      "border rounded-lg p-4 cursor-pointer transition-all duration-200",
                      slot.available 
                        ? timeSlot === slot.id 
                          ? "border-bsd-orange bg-bsd-orange/5" 
                          : "border-border/40 hover:border-bsd-orange/60 hover:bg-bsd-orange/5"
                        : "border-border/20 bg-gray-100 opacity-60 cursor-not-allowed"
                    )}
                    onClick={() => slot.available && handleTimeSlotSelect(slot.id)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-bsd-gray">{slot.label}</span>
                      <Clock className="h-4 w-4 text-foreground/70" />
                    </div>
                    <p className="text-sm text-foreground/80">{slot.time}</p>
                    <p className="text-xs mt-2 text-foreground/60">
                      {slot.available ? "Available" : "Not Available"}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Step 3: Visitor Information Form */}
            <div className={step === 3 ? 'block' : 'hidden'}>
              <div className="mb-4">
                <h3 className="text-lg font-medium text-bsd-gray mb-2">Step 3: Your Information</h3>
                <p className="text-sm text-foreground/70 mb-2">
                  Please provide your details so we can prepare for your visit on{' '}
                  <span className="font-medium">
                    {date ? format(date, 'PPPP') : ''} at {timeSlots.find(slot => slot.id === timeSlot)?.time || ''}
                  </span>
                </p>
                <Button 
                  variant="link" 
                  className="p-0 text-bsd-orange" 
                  onClick={() => setStep(2)}
                >
                  Change Time
                </Button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      placeholder="Enter your full name" 
                      value={formData.name} 
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="Enter your email" 
                      value={formData.email} 
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      placeholder="Enter your phone number" 
                      value={formData.phone} 
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="visitors">Number of Visitors</Label>
                    <div className="flex items-center space-x-2">
                      <Input 
                        id="visitors" 
                        name="visitors" 
                        type="number" 
                        min="1" 
                        max="10" 
                        value={formData.visitors} 
                        onChange={handleFormChange}
                        required
                      />
                      <Users className="h-5 w-5 text-foreground/70" />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="interestedPrograms">Programs of Interest</Label>
                  <select
                    id="interestedPrograms" 
                    name="interestedPrograms" 
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    value={formData.interestedPrograms} 
                    onChange={handleFormChange}
                    required
                  >
                    <option value="">Select a program</option>
                    <option value="B.Sc Interior Design">B.Sc Interior Design</option>
                    <option value="BVA Graphic & Communication Design">BVA Graphic & Communication Design</option>
                    <option value="BVA Animation & Game Design">BVA Animation & Game Design</option>
                    <option value="BCA with UI/UX & AI/ML">BCA with UI/UX & AI/ML</option>
                    <option value="B.Sc Computer Science">B.Sc Computer Science Data Analytics & Cyber Security</option>
                    <option value="B.Des Interaction & Experience Design">B.Des Interaction & Experience Design</option>
                    <option value="B.Des Architectural Construction Design">B.Des Architectural Construction Design</option>
                    <option value="Professional Diploma Programs">Professional Diploma Programs</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    placeholder="Let us know if you have any specific questions or requirements" 
                    rows={3}
                    value={formData.message} 
                    onChange={handleFormChange}
                  />
                </div>
                
                <AnimatedButton type="submit" className="w-full md:w-auto">
                  Schedule My Visit
                </AnimatedButton>
              </form>
            </div>
          </div>
        </CardContent>
      </Card>
    </RevealSection>
  );
};
