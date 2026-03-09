
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { EventsActivitiesHero } from '@/components/events-activities/EventsActivitiesHero';
import { CampusLifeEventsSection } from '@/components/events-activities/CampusLifeEventsSection';
import { EventsOverview } from '@/components/events-activities/EventsOverview';
import { JoinEventsSection } from '@/components/events-activities/JoinEventsSection';
import { EnquiryFormSection } from '@/components/home/EnquiryFormSection';

const EventsActivities: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Events & Activities | BSD Design School</title>
        <meta 
          name="description" 
          content="Discover exciting events and activities at BSD Design School. Join our workshops, competitions, and creative programs." 
        />
      </Helmet>
      
      <Navbar />
      
      <main>
        <EventsActivitiesHero />
        <CampusLifeEventsSection />
        <EventsOverview />
        <EventsGallery />
        <JoinEventsSection />
        <EnquiryFormSection />
      </main>
      
      <Footer />
    </>
  );
};

export default EventsActivities;
