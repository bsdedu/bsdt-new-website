
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, UserRound, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { faqData, FAQ } from './faqData';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface Message {
  id: string;
  content: string;
  isBot: boolean;
  faqs?: FAQ[];
}

const generateUniqueId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
};

export const FAQChatbot: React.FC = () => {
  const { toast } = useToast();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      content: 'Hello! I\'m your BSDT assistant. Ask me anything about our programs, admissions, fees, campus life, or any other questions you might have.',
      isBot: true
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  
  // Check if we're on mobile or desktop for responsive UI
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Find matching FAQs based on user input
  const findMatchingFAQs = (query: string): FAQ[] => {
    query = query.toLowerCase();
    const allFAQs = faqData.flatMap(category => category.questions);
    
    return allFAQs
      .filter(faq => 
        faq.question.toLowerCase().includes(query) || 
        faq.answer.toLowerCase().includes(query)
      )
      .slice(0, 3); // Return top 3 matches
  };

  // Generate AI response based on user query and relevant FAQs
  const generateAIResponse = (query: string, matchingFAQs: FAQ[]): string => {
    // For now, this is a simulated AI response
    // In a real implementation, this would call an AI service
    
    if (matchingFAQs.length > 0) {
      // Use information from matching FAQs to construct a response
      return `Based on your question, I've found some information that might help you. I've listed the most relevant FAQs below. If these don't fully answer your question, please feel free to ask for more details.`;
    } else {
      // Generic response when no matches are found
      return `Thank you for your question about "${query}". While I don't have specific information on this topic in my FAQ database, I'd be happy to pass your question to our admissions team. You can also contact us directly at admissions@bsd.edu.in or call +91-1234567890 for immediate assistance.`;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: generateUniqueId(),
      content: input,
      isBot: false
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    
    // Find matching FAQs
    const matchingFAQs = findMatchingFAQs(input);
    
    // Simulate AI processing time
    setTimeout(() => {
      const aiResponse = generateAIResponse(input, matchingFAQs);
      
      const botMessage: Message = {
        id: generateUniqueId(),
        content: aiResponse,
        isBot: true,
        faqs: matchingFAQs.length > 0 ? matchingFAQs : undefined
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
      setInput('');
    }, 1000);
  };

  // Render component based on screen size (Dialog for desktop, Drawer for mobile)
  const ChatbotContent = (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
          >
            <div 
              className={`max-w-[80%] rounded-2xl p-4 ${
                message.isBot 
                  ? 'bg-gray-100 text-bsd-gray' 
                  : 'bg-bsd-orange/90 text-white'
              }`}
            >
              <div className="flex items-start gap-2">
                {message.isBot && <Bot className="w-5 h-5 mt-1 flex-shrink-0" />}
                <div>
                  <p className="whitespace-pre-wrap">{message.content}</p>
                  
                  {/* Display matching FAQs if available */}
                  {message.faqs && message.faqs.length > 0 && (
                    <div className="mt-3 space-y-3">
                      <p className="font-semibold">Relevant FAQs:</p>
                      {message.faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-lg p-3 shadow-sm">
                          <p className="font-medium text-bsd-gray">{faq.question}</p>
                          <p className="text-sm mt-1 text-foreground/80">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {!message.isBot && <UserRound className="w-5 h-5 mt-1 flex-shrink-0" />}
              </div>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-2xl p-4">
              <div className="flex items-center space-x-2">
                <Bot className="w-5 h-5" />
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex space-x-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question..."
            className="flex-1"
            disabled={isLoading}
          />
          <Button type="submit" disabled={isLoading || !input.trim()}>
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </form>
    </div>
  );

  return (
    <div className="w-full">
      {isDesktop ? (
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full mt-6 group" variant="outline">
              <Bot className="mr-2 h-5 w-5 group-hover:text-bsd-orange transition-colors" />
              Ask AI Assistant
            </Button>
          </DialogTrigger>
          <DialogContent className="w-full max-w-2xl h-[600px] p-0 flex flex-col">
            <DialogHeader className="px-6 pt-6 pb-0">
              <DialogTitle className="flex items-center">
                <Bot className="w-5 h-5 mr-2 text-bsd-orange" />
                BSDT AI Assistant
              </DialogTitle>
              <DialogDescription>
                Ask me anything about BSDT programs, admissions, or campus life
              </DialogDescription>
            </DialogHeader>
            {ChatbotContent}
          </DialogContent>
        </Dialog>
      ) : (
        <Drawer>
          <DrawerTrigger asChild>
            <Button className="w-full mt-6 group" variant="outline">
              <Bot className="mr-2 h-5 w-5 group-hover:text-bsd-orange transition-colors" />
              Ask AI Assistant
            </Button>
          </DrawerTrigger>
          <DrawerContent className="h-[80vh] flex flex-col">
            <DrawerHeader>
              <DrawerTitle className="flex items-center">
                <Bot className="w-5 h-5 mr-2 text-bsd-orange" />
                BSDT AI Assistant
              </DrawerTitle>
              <DrawerDescription>
                Ask me anything about BSDT programs, admissions, or campus life
              </DrawerDescription>
            </DrawerHeader>
            {ChatbotContent}
          </DrawerContent>
        </Drawer>
      )}
    </div>
  );
};
