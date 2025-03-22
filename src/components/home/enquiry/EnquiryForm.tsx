
import React from 'react';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { AnimatedButton } from "@/components/ui-elements/AnimatedButton";
import { useToast } from "@/hooks/use-toast";

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

interface EnquiryFormProps {
  programSpecific?: boolean;
  onSubmitSuccess: () => void;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({ programSpecific = false, onSubmitSuccess }) => {
  const { toast } = useToast();

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
    onSubmitSuccess();
    toast({
      title: "Enquiry Submitted",
      description: "Thank you for your interest! Our team will contact you shortly."
    });
  }

  return (
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
  );
};
