
import { SetStateAction, Dispatch } from 'react';

export interface VisitFormData {
  name: string;
  email: string;
  phone: string;
  visitors: number;
  interestedPrograms: string;
  message: string;
}

export interface TimeSlot {
  id: string;
  label: string;
  time: string;
  available: boolean;
}

export interface DateSelectionProps {
  date: Date | undefined;
  onDateSelect: (date: Date | undefined) => void;
}

export interface TimeSlotSelectionProps {
  date: Date | undefined;
  timeSlot: string | undefined;
  timeSlots: TimeSlot[];
  onTimeSlotSelect: (slot: string) => void;
  onBackClick: () => void;
}

export interface VisitorFormProps {
  date: Date | undefined;
  timeSlot: string | undefined;
  timeSlots: TimeSlot[];
  formData: VisitFormData;
  onFormChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  onBackClick: () => void;
}
