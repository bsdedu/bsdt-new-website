import React, { useEffect, useRef } from 'react';
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
  const [isExpanded, setIsExpanded] = React.useState(false);
  const formRef = useRef<HTMLDivElement>(null); // Ref for the form container
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  useEffect(() => {
    // Load the widget script dynamically
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://widgets.in5.nopaperforms.com/emwgts.js';
    
    // Add script to document body
    document.body.appendChild(script);
    
    // Cleanup function to remove script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        setIsExpanded(false); // Close the form if clicked outside
      }
    };

    if (isExpanded) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isExpanded]);

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
    <div className={cn(
      "fixed right-0 top-1/2 -translate-y-1/2 z-[99999]", // Ensure it remains fixed
      isExpanded ? "translate-x-0" : "translate-x-[calc(100%-2rem)]"
    )}
    ref={formRef} // Attach ref to the form container
    >
      <div className="relative flex items-start">
        {/* Trigger button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={cn(
            "bg-bsd-orange text-white px-2 py-4 rounded-l-lg writing-vertical transform rotate-180 whitespace-nowrap text-sm",
            "hover:bg-bsd-orange/90 transition-colors flex items-center gap-1"
          )}
          style={{ writingMode: 'vertical-rl', position: 'fixed', top: '50%', transform: 'translateY(-50%)' }} // Ensure button stays fixed
        >
          {isExpanded ? (
            <>
              <X className="w-3 h-3" />
              Close
            </>
          ) : (
            <>
              <MessageSquare className="w-3 h-3" />
              Enquire Now
            </>
          )}
        </button>

        {/* Form panel */}
        <div className={cn(
          "bg-white p-6 shadow-lg w-80 border-l border-t border-b border-gray-200",
          isExpanded ? "opacity-100" : "opacity-0 pointer-events-none",
          "fixed top-1/2 transform -translate-y-1/2 right-0" // Ensure form stays fixed
        )}>
          <button
            onClick={() => setIsExpanded(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            aria-label="Close"
          >
            ✕
          </button>
          <h3 className="text-lg font-semibold text-bsd-gray mb-4">Quick Enquiry</h3>
          <div 
            className="npf_wgts" 
            data-height="400px" 
            data-w="adff9b077808c1fcb8e77a017693b6b9"
          />
        </div>
      </div>
    </div>
  );
};
