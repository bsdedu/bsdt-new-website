
import React from 'react';
import { Card, CardContent } from "@/components/ui-elements/Card";
import { Film, Gamepad, Monitor, Eye, Rocket, Headset, Camera, Video } from "lucide-react";

export const CareerOpportunitiesTab: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-xl font-semibold text-bsd-gray mb-3">Career Paths</h3>
        <p className="text-foreground/70">
          The BVA Animation & Game Design program prepares graduates for diverse careers in the rapidly growing animation, gaming, and interactive media industries.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-4">
                <Film className="w-6 h-6 text-bsd-orange" />
              </div>
              <h4 className="text-lg font-semibold text-bsd-gray mb-2">Animation Studios</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>3D Animator</li>
                <li>Character Animator</li>
                <li>Storyboard Artist</li>
                <li>Rigging Artist</li>
                <li>Animation Director</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-4">
                <Gamepad className="w-6 h-6 text-bsd-orange" />
              </div>
              <h4 className="text-lg font-semibold text-bsd-gray mb-2">Game Development</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>Game Designer</li>
                <li>Level Designer</li>
                <li>Game Artist</li>
                <li>Character Artist</li>
                <li>Technical Artist</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-bsd-orange/10 flex items-center justify-center mb-4">
                <Monitor className="w-6 h-6 text-bsd-orange" />
              </div>
              <h4 className="text-lg font-semibold text-bsd-gray mb-2">Digital Media</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>UI/UX Designer</li>
                <li>Motion Graphics Artist</li>
                <li>Digital Content Creator</li>
                <li>Interactive Media Developer</li>
                <li>Art Director</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <h4 className="text-lg font-semibold text-bsd-gray mb-4">Emerging Opportunities</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Headset className="w-4 h-4 text-bsd-orange" />
                </div>
                <div className="ml-3">
                  <h5 className="font-medium text-bsd-gray">VR/AR Development</h5>
                  <p className="text-sm text-foreground/70">Create immersive experiences for virtual and augmented reality platforms</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Video className="w-4 h-4 text-bsd-orange" />
                </div>
                <div className="ml-3">
                  <h5 className="font-medium text-bsd-gray">Real-time Animation</h5>
                  <p className="text-sm text-foreground/70">Work with cutting-edge real-time rendering for film and broadcast</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-bsd-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Rocket className="w-4 h-4 text-bsd-orange" />
                </div>
                <div className="ml-3">
                  <h5 className="font-medium text-bsd-gray">Simulation & Training</h5>
                  <p className="text-sm text-foreground/70">Develop interactive simulations for education, healthcare, and industry</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <h4 className="text-lg font-semibold text-bsd-gray mb-4">Industry Outlook</h4>
            <p className="text-foreground/70 mb-4">
              The animation and gaming industry in India is experiencing tremendous growth, with a projected market value of $4.4 billion by 2025. Our graduates are well-positioned to take advantage of opportunities in:
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Camera className="w-5 h-5 text-bsd-orange mr-2" />
                <span>Entertainment and media production companies</span>
              </li>
              <li className="flex items-center">
                <Gamepad className="w-5 h-5 text-bsd-orange mr-2" />
                <span>Independent game studios and AAA publishers</span>
              </li>
              <li className="flex items-center">
                <Eye className="w-5 h-5 text-bsd-orange mr-2" />
                <span>Advertising and marketing agencies</span>
              </li>
              <li className="flex items-center">
                <Monitor className="w-5 h-5 text-bsd-orange mr-2" />
                <span>Tech startups and innovation labs</span>
              </li>
              <li className="flex items-center">
                <Rocket className="w-5 h-5 text-bsd-orange mr-2" />
                <span>Freelance and entrepreneurial ventures</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
