import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin } from 'lucide-react';
export const OpenDayPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    // Show popup on page load
    const timer = setTimeout(() => {
      // Check if user has already seen the popup in this session
      const hasSeenPopup = sessionStorage.getItem('openDayPopupSeen');
      if (!hasSeenPopup) {
        setIsOpen(true);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('openDayPopupSeen', 'true');
  };
  return <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-bsd-orange">
            🎉 Open Day
          </DialogTitle>
          <DialogDescription className="text-center text-base pt-2">
            Experience our campus, meet faculty & explore programs
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="flex items-center gap-3 text-foreground">
            <Calendar className="h-5 w-5 text-bsd-orange" />
            <span className="font-medium">Saturday, 24th January, 2026</span>
          </div>
          
          <div className="flex items-center gap-3 text-foreground">
            <Clock className="h-5 w-5 text-bsd-orange" />
            <span className="font-medium">10:00 AM - 4:00 PM</span>
          </div>
          
          <div className="flex items-center gap-3 text-foreground">
            <MapPin className="h-5 w-5 text-bsd-orange" />
            <span className="font-medium">Bangalore School of Design and Technology</span>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-2">
          <Button className="w-full bg-bsd-orange hover:bg-bsd-orange/90 text-white" asChild>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfJHlSTNhMYjU9ulXi8JiPPJQW1Jw-C_JiUe7WGiIHIOpKe3Q/viewform" target="_blank" rel="noopener noreferrer" onClick={handleClose}>
              Register Now
            </a>
          </Button>
          <Button variant="outline" className="w-full" asChild>
            <a href="/open-day" onClick={handleClose}>
              Learn more
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>;
};