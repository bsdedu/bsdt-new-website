
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HostelSection } from '@/components/campus-life/hostel-transport/HostelSection';
import { TransportSection } from '@/components/campus-life/hostel-transport/TransportSection';
import { TransportRoutes } from '@/components/campus-life/hostel-transport/TransportRoutes';
import { EnquiryFormSection } from '@/components/home/EnquiryFormSection';

const HostelTransport: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Hostel & Transport Facilities | BSD Design School</title>
        <meta 
          name="description" 
          content="Learn about the comfortable hostel accommodations and convenient transport services available to BSD students." 
        />
      </Helmet>
      
      <Navbar />
      
      <main>
        <HostelSection />
        <TransportSection />
        <TransportRoutes />
        <EnquiryFormSection />
      </main>
      
      <Footer />
    </>
  );
};

export default HostelTransport;
