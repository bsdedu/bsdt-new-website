import React, { useEffect, useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import { Helmet } from 'react-helmet-async';
import { Card } from '@/components/ui-elements/Card';
import { TrendingUp, Building, Users, Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { RevealSection } from '@/components/ui-elements/RevealSection';
import { AlumniSuccessStories } from '@/components/placement/AlumniSuccessStories';
import { TopRecruiters } from '@/components/placement/TopRecruiters';
const PlacementReport = () => {
  const navigate = useNavigate();
  const {
    toast
  } = useToast();
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  useEffect(() => {
    // Check if user has access (submitted the form)
    const hasFilledForm = localStorage.getItem('enquiryFormSubmitted') === 'true';
    if (!hasFilledForm) {
      toast({
        title: "Access Restricted",
        description: "Please fill the enquiry form to view the placement report.",
        variant: "destructive"
      });
      navigate('/');
      return;
    }
    setHasAccess(true);

    // Page load animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, [navigate, toast]);
  if (!hasAccess) {
    return null; // Don't render anything while redirecting
  }
  return <div className={`min-h-screen flex flex-col transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Helmet>
        <title>Placement Report | BSDT</title>
        <meta name="description" content="Explore BSDT's impressive placement statistics, industry connections, and student success stories." />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow">
        {/* Cover Image Section */}
        <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/60 z-10" />
          <img src="/lovable-uploads/42704a16-816a-4a24-a602-f88fab23667b.png" alt="Students celebrating placement success" className="w-full h-full object-cover" />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="text-center px-6">
              <h1 className="text-5xl font-display font-bold text-white mb-4 drop-shadow-lg">
                Placement Report
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
                Showcasing the success of our graduates in the professional world
              </p>
            </div>
          </div>
        </div>

        {/* Hero section */}
        <section className="bg-gradient-to-br from-bsd-orange/5 to-white py-16 md:py-[20px]">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="bsdOrange" className="mb-4">Student Placement Report</Badge>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-bsd-gray mb-6">
                BSDT Placement Report 2023-24
              </h1>
              <p className="text-lg text-foreground/70 mb-8">
                Discover how our students are excelling in their careers across creative industries.
                This report highlights our placement statistics, top recruiters, and student success stories.
              </p>
            </div>
          </div>
        </section>
        
        {/* Key statistics section */}
        <RevealSection direction="up" className="py-16">
          <div className="container mx-auto px-6 md:px-8">
            
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 border-bsd-orange/20 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mr-4">
                    <TrendingUp className="w-6 h-6 text-bsd-orange" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-bsd-gray">₹5.2 LPA</div>
                    <div className="text-sm text-foreground/70">Average Starting Salary</div>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 border-bsd-orange/20 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mr-4">
                    <Award className="w-6 h-6 text-bsd-orange" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-bsd-gray">₹12.8 LPA</div>
                    <div className="text-sm text-foreground/70">Highest Package</div>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 border-bsd-orange/20 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mr-4">
                    <Building className="w-6 h-6 text-bsd-orange" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-bsd-gray">150+</div>
                    <div className="text-sm text-foreground/70">Recruiting Companies</div>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 border-bsd-orange/20 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-bsd-orange" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-bsd-gray">87%</div>
                    <div className="text-sm text-foreground/70">Placement Rate</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </RevealSection>
        
        {/* Top recruiters section */}
        <RevealSection direction="up" className="py-16 bg-bsd-light-gray">
          <div className="container mx-auto px-6 md:px-8">
            <h2 className="text-3xl font-display font-bold text-bsd-gray mb-8 text-center">
              Top Recruiters
            </h2>
            
            <TopRecruiters />
          </div>
        </RevealSection>
        
        {/* Program-wise placement section */}
        <RevealSection direction="up" className="py-16">
          <div className="container mx-auto px-6 md:px-8">
            <h2 className="text-3xl font-display font-bold text-bsd-gray mb-12 text-center">
              Program-wise Placement Statistics
            </h2>
            
            <div className="space-y-8 max-w-4xl mx-auto">
              <Card className="p-6 border-bsd-orange/20 shadow-sm">
                <h3 className="text-xl font-bold text-bsd-gray mb-4">B.Sc. Interior Design</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-bsd-gray mb-1">₹4.8 LPA</div>
                    <div className="text-sm text-foreground/70">Average Package</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-bsd-gray mb-1">₹10.2 LPA</div>
                    <div className="text-sm text-foreground/70">Highest Package</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-bsd-gray mb-1">92%</div>
                    <div className="text-sm text-foreground/70">Placement Rate</div>
                  </div>
                </div>
                <Separator className="my-4" />
                <h4 className="font-medium text-bsd-gray mb-2">Top Recruiters</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Design Studio Inc</Badge>
                  <Badge variant="outline">Livspace</Badge>
                  <Badge variant="outline">Homelane</Badge>
                  <Badge variant="outline">Urban Ladder</Badge>
                  <Badge variant="outline">Godrej Interio</Badge>
                </div>
              </Card>
              
              <Card className="p-6 border-bsd-orange/20 shadow-sm">
                <h3 className="text-xl font-bold text-bsd-gray mb-4">BVA Graphic & Communication Design</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-bsd-gray mb-1">₹5.5 LPA</div>
                    <div className="text-sm text-foreground/70">Average Package</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-bsd-gray mb-1">₹11.4 LPA</div>
                    <div className="text-sm text-foreground/70">Highest Package</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-bsd-gray mb-1">89%</div>
                    <div className="text-sm text-foreground/70">Placement Rate</div>
                  </div>
                </div>
                <Separator className="my-4" />
                <h4 className="font-medium text-bsd-gray mb-2">Top Recruiters</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Ogilvy</Badge>
                  <Badge variant="outline">Lowe Lintas</Badge>
                  <Badge variant="outline">Leo Burnett</Badge>
                  <Badge variant="outline">Wieden+Kennedy</Badge>
                  <Badge variant="outline">FCB Interface</Badge>
                </div>
              </Card>
              
              <Card className="p-6 border-bsd-orange/20 shadow-sm">
                <h3 className="text-xl font-bold text-bsd-gray mb-4">BCA with UI/UX & AI/ML</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-bsd-gray mb-1">₹6.8 LPA</div>
                    <div className="text-sm text-foreground/70">Average Package</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-bsd-gray mb-1">₹12.8 LPA</div>
                    <div className="text-sm text-foreground/70">Highest Package</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-bsd-gray mb-1">94%</div>
                    <div className="text-sm text-foreground/70">Placement Rate</div>
                  </div>
                </div>
                <Separator className="my-4" />
                <h4 className="font-medium text-bsd-gray mb-2">Top Recruiters</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Infosys</Badge>
                  <Badge variant="outline">TCS</Badge>
                  <Badge variant="outline">Wipro</Badge>
                  <Badge variant="outline">Microsoft</Badge>
                  <Badge variant="outline">IBM</Badge>
                </div>
              </Card>
            </div>
          </div>
        </RevealSection>
        
        {/* Alumni Success Stories section */}
        <RevealSection direction="up" className="py-16 bg-bsd-light-gray">
          <div className="container mx-auto px-6 md:px-8">
            <h2 className="text-3xl font-display font-bold text-bsd-gray mb-8 text-center">
              Alumni Success Stories
            </h2>
            
            <AlumniSuccessStories />
          </div>
        </RevealSection>
      </main>
      
      <Footer />
    </div>;
};
export default PlacementReport;