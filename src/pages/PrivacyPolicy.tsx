
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { RevealSection } from '../components/ui-elements/RevealSection';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Bangalore School of Design & Technology</title>
        <meta name="description" content="Privacy Policy for Bangalore School of Design & Technology. Learn how we collect, use, and protect your personal information." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://bsdt.ac.in/privacy-policy" />
      </Helmet>
      
      <Navbar />
      
      <main className="py-20">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <RevealSection>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-bsd-gray mb-6">
                Privacy Policy
              </h1>
              <p className="text-lg text-foreground/70">
                Last updated: January 2024
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={100}>
            <div className="prose prose-lg max-w-none text-foreground/80">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold text-bsd-gray mb-4">Introduction</h2>
                  <p>
                    Bangalore School of Design & Technology ("we," "our," or "us") is committed to protecting your privacy. 
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
                    our website or use our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-bsd-gray mb-4">Information We Collect</h2>
                  <h3 className="text-xl font-medium text-bsd-gray mb-3">Personal Information</h3>
                  <p className="mb-4">
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Fill out application forms or enquiry forms</li>
                    <li>Register for events or workshops</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Contact us through our website</li>
                    <li>Participate in surveys or feedback forms</li>
                  </ul>
                  
                  <h3 className="text-xl font-medium text-bsd-gray mb-3">Automatically Collected Information</h3>
                  <p className="mb-4">
                    When you visit our website, we may automatically collect certain information about your device and usage, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>IP address and location data</li>
                    <li>Browser type and version</li>
                    <li>Pages visited and time spent on pages</li>
                    <li>Referring website addresses</li>
                    <li>Device information and operating system</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-bsd-gray mb-4">How We Use Your Information</h2>
                  <p className="mb-4">We use the information we collect to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Process applications and admissions</li>
                    <li>Provide customer support and respond to inquiries</li>
                    <li>Send administrative information and updates</li>
                    <li>Improve our website and services</li>
                    <li>Send marketing communications (with your consent)</li>
                    <li>Comply with legal obligations</li>
                    <li>Protect against fraudulent or illegal activity</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-bsd-gray mb-4">Information Sharing and Disclosure</h2>
                  <p className="mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                    except in the following circumstances:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Service providers who assist us in operating our website and services</li>
                    <li>Educational partners and accreditation bodies as required</li>
                    <li>Legal compliance when required by law or legal process</li>
                    <li>Protection of our rights, property, or safety</li>
                    <li>Business transfers in case of merger or acquisition</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-bsd-gray mb-4">Data Security</h2>
                  <p>
                    We implement appropriate technical and organizational security measures to protect your personal information 
                    against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over 
                    the internet or electronic storage is 100% secure.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-bsd-gray mb-4">Cookies and Tracking Technologies</h2>
                  <p className="mb-4">
                    We use cookies and similar tracking technologies to enhance your experience on our website. You can control 
                    cookie settings through your browser preferences. We use cookies for:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Essential website functionality</li>
                    <li>Analytics and performance monitoring</li>
                    <li>Personalization of content</li>
                    <li>Marketing and advertising purposes</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-bsd-gray mb-4">Your Rights and Choices</h2>
                  <p className="mb-4">You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access and review your personal information</li>
                    <li>Correct inaccurate or incomplete information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Object to processing of your personal information</li>
                    <li>Withdraw consent for marketing communications</li>
                    <li>Request data portability</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-bsd-gray mb-4">Children's Privacy</h2>
                  <p>
                    Our services are not directed to children under 13 years of age. We do not knowingly collect personal 
                    information from children under 13. If we become aware that we have collected personal information from 
                    a child under 13, we will take steps to delete such information.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-bsd-gray mb-4">International Data Transfers</h2>
                  <p>
                    Your information may be transferred to and processed in countries other than your own. We ensure that 
                    such transfers are conducted in accordance with applicable data protection laws and with appropriate 
                    safeguards in place.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-bsd-gray mb-4">Changes to This Privacy Policy</h2>
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any material changes by 
                    posting the new Privacy Policy on this page and updating the "Last updated" date. Your continued use 
                    of our services after such modifications constitutes acceptance of the updated Privacy Policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-bsd-gray mb-4">Contact Information</h2>
                  <p className="mb-4">
                    If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                  </p>
                  <div className="bg-bsd-light-gray rounded-lg p-6">
                    <p className="mb-2"><strong>Bangalore School of Design & Technology</strong></p>
                    <p className="mb-2">No.4/3, Opposite B.D.S Nagar, Devanna Compound</p>
                    <p className="mb-2">K.Narayanapura, Kothanur Post, Bangalore – 560077</p>
                    <p className="mb-2">Email: enquiry@bsd.edu.in</p>
                    <p>Phone: +91 9620202871 | +91 9845779000</p>
                  </div>
                </section>
              </div>
            </div>
          </RevealSection>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
