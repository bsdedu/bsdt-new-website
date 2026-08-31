
import * as React from 'react';
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
  phone: z.string().regex(/^\d{10,}$/, {
    message: "Please enter a valid phone number (digits only, min 10)"
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

  function onSubmit(_values: z.infer<typeof formSchema>) {
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
                    <optgroup label="Undergraduate Programs">
                      <option value="UG Interior Design">UG Interior Design</option>
                      <option value="UG Fashion Design">UG Fashion Design</option>
                    </optgroup>
                    <optgroup label="Diploma Programs">
                      <option value="P.Diploma Interior Design">P.Diploma Interior Design</option>
                      <option value="P.Diploma Graphic Design">P.Diploma Graphic Design + UI & UX</option>
                      <option value="PG.Diploma Landscape Design">PG.Diploma Landscape Design</option>
                      <option value="Post Graduate Diploma Residential Architecture Design">Post Graduate Diploma in Residential Architecture and Design</option>
                      <option value="P.Diploma UI UX">P.Diploma UI & UX</option>
                      <option value="PG.Diploma Integrated Construction Management">PG.Diploma Integrated Construction Management</option>
                      <option value="P.Diploma Fashion Design">P.Diploma Fashion Design (Coming Soon)</option>
                      <option value="P.Diploma Sustainable Circular Design">P.Diploma Sustainable & Circular Design (Coming Soon)</option>
                    </optgroup>
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
