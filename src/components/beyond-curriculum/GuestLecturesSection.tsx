
import React from 'react';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui-elements/Card';
import { User, Calendar, Map } from 'lucide-react';

interface LectureCardProps {
  speaker: string;
  title: string;
  organization: string;
  date: string;
  image: string;
  location: string;
}

const LectureCard: React.FC<LectureCardProps> = ({ speaker, title, organization, date, image, location }) => {
  return (
    <Card className="border-0 shadow-sm overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="md:col-span-1">
          <div className="h-full relative">
            <img src={image} alt={speaker} className="w-full h-full object-cover" style={{ minHeight: '200px' }} />
          </div>
        </div>
        <div className="md:col-span-2">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-bsd-gray mb-1">{title}</h3>
            <div className="flex items-center gap-2 text-bsd-orange mb-4">
              <User className="h-4 w-4" />
              <p className="text-sm font-medium">{speaker}, {organization}</p>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-foreground/70 mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4 text-bsd-orange" />
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Map className="h-4 w-4 text-bsd-orange" />
                <span>{location}</span>
              </div>
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
};

export const GuestLecturesSection: React.FC = () => {
  const lectures: LectureCardProps[] = [
    {
      speaker: "Rahul Sharma",
      title: "The Future of Sustainable Design",
      organization: "Green Design Associates",
      date: "September 15, 2023",
      image: "/lovable-uploads/938cccc7-6337-481e-861d-5cedb08cafd7.png",
      location: "Main Auditorium"
    },
    {
      speaker: "Priya Murthy",
      title: "Innovation in Digital Interfaces",
      organization: "UX Lead, Google India",
      date: "October 22, 2023",
      image: "/lovable-uploads/9ff3e25b-a93f-40fb-87ff-cd765e063b61.png",
      location: "Digital Learning Center"
    },
    {
      speaker: "Vikram Desai",
      title: "Architectural Design Thinking",
      organization: "Principal Architect, Studio Decode",
      date: "November 10, 2023",
      image: "/lovable-uploads/d1e69b3a-6ece-40bb-ba92-363b7d0f3758.png",
      location: "Design Hub"
    }
  ];

  return (
    <section id="guest-lectures" className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="bsdOrange" className="mb-4">INDUSTRY INSIGHTS</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bsd-gray">
              Expert Guest Lectures
            </h2>
            <p className="mt-4 text-foreground/70">
              Industry leaders and visionaries share their expertise, insights, and experiences through our regular guest lecture series.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="space-y-6">
            {lectures.map((lecture, index) => (
              <LectureCard key={index} {...lecture} />
            ))}
          </div>
        </RevealSection>

        <RevealSection delay={200}>
          <div className="mt-12 bg-bsd-light-gray rounded-xl p-8">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold text-bsd-gray mb-4">Guest Lecture Program Benefits</h3>
              <p className="text-foreground/70 mb-8">
                Our guest lectures expose students to diverse perspectives, industry trends, and professional insights that enhance their understanding of their chosen fields.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-5 shadow-sm">
                  <h4 className="font-medium text-bsd-gray mb-2">Industry Insights</h4>
                  <p className="text-sm text-foreground/70">
                    Students gain firsthand knowledge of current industry practices, challenges, and innovations directly from active professionals.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-5 shadow-sm">
                  <h4 className="font-medium text-bsd-gray mb-2">Career Guidance</h4>
                  <p className="text-sm text-foreground/70">
                    Guest speakers provide valuable career advice, sharing personal experiences and pathways to success in various design and technology fields.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-5 shadow-sm">
                  <h4 className="font-medium text-bsd-gray mb-2">Inspiration & Motivation</h4>
                  <p className="text-sm text-foreground/70">
                    Hearing from successful professionals inspires students to set ambitious goals and provides motivation to pursue excellence in their work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
