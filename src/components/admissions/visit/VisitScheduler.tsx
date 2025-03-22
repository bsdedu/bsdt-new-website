
import * as React from 'react';
import { format } from 'date-fns';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { timeSlots } from './timeSlotData';
import { DateSelection } from './DateSelection';
import { TimeSlotSelection } from './TimeSlotSelection';
import { VisitorForm } from './VisitorForm';
import { VisitFormData } from './types';

export const VisitScheduler: React.FC = () => {
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = React.useState<string | undefined>(undefined);
  const [step, setStep] = React.useState<number>(1);
  const [formData, setFormData] = React.useState<VisitFormData>({
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
    const selectedTimeSlotObj = timeSlots.find(slot => slot.id === timeSlot);
    toast({
      title: "Visit Request Submitted!",
      description: `Your campus visit has been scheduled for ${date ? format(date, 'PPPP') : ''} at ${selectedTimeSlotObj?.time || ''}.`,
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
              <DateSelection date={date} onDateSelect={handleDateSelect} />
            </div>
            
            {/* Step 2: Time Slot Selection */}
            <div className={step === 2 ? 'block' : 'hidden'}>
              <TimeSlotSelection 
                date={date}
                timeSlot={timeSlot}
                timeSlots={timeSlots}
                onTimeSlotSelect={handleTimeSlotSelect}
                onBackClick={() => setStep(1)}
              />
            </div>
            
            {/* Step 3: Visitor Information Form */}
            <div className={step === 3 ? 'block' : 'hidden'}>
              <VisitorForm
                date={date}
                timeSlot={timeSlot}
                timeSlots={timeSlots}
                formData={formData}
                onFormChange={handleFormChange}
                onSubmit={handleSubmit}
                onBackClick={() => setStep(2)}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </RevealSection>
  );
};
