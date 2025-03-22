
import * as React from 'react';
import { format } from 'date-fns';
import { Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { AnimatedButton } from '@/components/ui-elements/AnimatedButton';
import { VisitorFormProps } from './types';

export const VisitorForm: React.FC<VisitorFormProps> = ({
  date,
  timeSlot,
  timeSlots,
  formData,
  onFormChange,
  onSubmit,
  onBackClick
}) => {
  const selectedTimeSlot = timeSlots.find(slot => slot.id === timeSlot);

  return (
    <div>
      <div className="mb-4">
        <h3 className="text-lg font-medium text-bsd-gray mb-2">Step 3: Your Information</h3>
        <p className="text-sm text-foreground/70 mb-2">
          Please provide your details so we can prepare for your visit on{' '}
          <span className="font-medium">
            {date ? format(date, 'PPPP') : ''} at {selectedTimeSlot?.time || ''}
          </span>
        </p>
        <Button 
          variant="link" 
          className="p-0 text-bsd-orange" 
          onClick={onBackClick}
        >
          Change Time
        </Button>
      </div>
      
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input 
              id="name" 
              name="name" 
              placeholder="Enter your full name" 
              value={formData.name} 
              onChange={onFormChange}
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
              onChange={onFormChange}
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
              onChange={onFormChange}
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
                onChange={onFormChange}
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
            onChange={onFormChange}
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
            onChange={onFormChange}
          />
        </div>
        
        <AnimatedButton type="submit" className="w-full md:w-auto">
          Schedule My Visit
        </AnimatedButton>
      </form>
    </div>
  );
};
