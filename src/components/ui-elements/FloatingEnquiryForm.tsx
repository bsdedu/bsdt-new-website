import React, { useState } from 'react';
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { MessageSquare, X } from "lucide-react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
});

type FormData = z.infer<typeof formSchema>;

export const FloatingEnquiryForm = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    toast({
      title: "Thanks for your enquiry!",
      description: "We'll get back to you soon.",
    });
    form.reset();
    setIsExpanded(false);
  };

  return (
    <>
      {/* Trigger button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[99999]">
        <button
          onClick={() => setIsExpanded(true)}
          className={cn(
            "bg-bsd-orange text-white px-2 py-4 rounded-l-lg writing-vertical whitespace-nowrap text-sm sticky top-0",
            "hover:bg-bsd-orange/90 transition-colors flex items-center gap-1"
          )}
          style={{ writingMode: 'vertical-lr' }}
        >
          <MessageSquare className="w-3 h-3" />
          Enquire Now
        </button>
      </div>

      {/* Popup */}
      {isExpanded && (
        <div className="fixed inset-0 bg-black/50 z-[99998] flex items-center justify-center">
          <div className="bg-white p-6 shadow-lg w-96 rounded-lg relative">
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-semibold text-bsd-gray mb-4">Quick Enquiry</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormItem>
                  <FormControl>
                    <Input placeholder="Your Name" {...form.register("name")} />
                  </FormControl>
                </FormItem>

                <FormItem>
                  <FormControl>
                    <Input type="email" placeholder="Email Address" {...form.register("email")} />
                  </FormControl>
                </FormItem>

                <FormItem>
                  <FormControl>
                    <Input placeholder="Phone Number" {...form.register("phone")} />
                  </FormControl>
                </FormItem>

                <Button type="submit" className="w-full bg-bsd-orange hover:bg-bsd-orange/90">
                  Submit Enquiry
                </Button>
              </form>
            </Form>
          </div>
        </div>
      )}
    </>
  );
};