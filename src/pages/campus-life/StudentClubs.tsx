
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { StudentClubsHero } from '@/components/campus-life/student-clubs/StudentClubsHero';
import { ClubsOverview } from '@/components/campus-life/student-clubs/ClubsOverview';
import { ClubsList } from '@/components/campus-life/student-clubs/ClubsList';
import { JoinClubSection } from '@/components/campus-life/student-clubs/JoinClubSection';
import { EnquiryFormSection } from '@/components/home/EnquiryFormSection';

const StudentClubs: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Student Clubs | BSD Design School</title>
        <meta 
          name="description" 
          content="Explore the vibrant student clubs at BSD Design School. Join clubs that foster creativity, innovation, and leadership skills." 
        />
      </Helmet>
      
      <Navbar />
      
      <main>
        <StudentClubsHero />
        <ClubsOverview />
        <ClubsList />
        <JoinClubSection />
        <EnquiryFormSection />
      </main>
      
      <Footer />
    </>
  );
};

export default StudentClubs;
