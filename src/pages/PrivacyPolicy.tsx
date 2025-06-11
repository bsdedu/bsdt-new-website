
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
            </div>
          </RevealSection>

          <RevealSection delay={100}>
            <div className="prose prose-lg max-w-none text-foreground/80">
              <div className="space-y-8">
                <section>
                  <p>
                    Bangalore School of Design & Technology ("we," "our," or "the Institution") values your privacy and is committed to safeguarding the personal data you provide us. This Privacy Policy outlines how we collect, process, and protect your personal information when you interact with our institution, including via our website or other communication channels. By submitting your personal information to us, you consent to the terms of this Privacy Policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-bsd-gray mb-4">1. Information We Collect</h2>
                  <p className="mb-4">
                    We collect the following personal data when you express interest in our programs or engage with our services:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Name:</strong> For identification and personalized communication.</li>
                    <li><strong>Phone Number:</strong> For contacting you regarding your inquiries and updates about our courses.</li>
                    <li><strong>Email Address:</strong> For sending information related to course details, admission processes, and other relevant communications.</li>
                    <li><strong>City Name:</strong> To understand your geographic location and offer relevant information.</li>
                    <li><strong>State Name:</strong> To customize communication based on your location and to offer region-specific details.</li>
                    <li><strong>Course Interested In:</strong> To provide information tailored to your educational interests.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-bsd-gray mb-4">2. How We Use Your Information</h2>
                  <p className="mb-4">We use the personal information we collect for the following purposes:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Responding to Inquiries:</strong> To address your queries regarding our courses, admissions, and services.</li>
                    <li><strong>Course and Program Updates:</strong> To send you information about our programs, admissions, deadlines, and other educational content.</li>
                    <li><strong>Personalized Communication:</strong> To customize our communication with you based on the courses you are interested in.</li>
                    <li><strong>Application Processing:</strong> To process your applications, conduct follow-ups, and provide necessary information for admission into our courses.</li>
                    <li><strong>Improvement of Services:</strong> To enhance user experience and improve our website and communication systems.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-bsd-gray mb-4">3. Sharing Your Information</h2>
                  <p className="mb-4">
                    We respect your privacy and will not sell, rent, or lease your personal information. However, we may share your data under the following circumstances:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>With Service Providers:</strong> We may share your information with trusted third-party service providers who assist us in operating our website, processing applications, or sending communications. These third parties are obligated to use your data solely for the purpose of providing these services and are required to keep it confidential.</li>
                    <li><strong>Legal Obligations:</strong> We may disclose your information to comply with legal obligations, regulations, or requests from governmental authorities, or to protect the rights, property, or safety of our institution, our users, or others.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-bsd-gray mb-4">4. Data Security</h2>
                  <p>
                    We take appropriate technical and organizational measures to protect the personal data you provide from unauthorized access, disclosure, alteration, and destruction. Despite our efforts to protect your data, please be aware that no method of data transmission over the internet or electronic storage is completely secure. While we strive to protect your personal information, we cannot guarantee its absolute security.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-bsd-gray mb-4">5. Your Rights</h2>
                  <p className="mb-4">As a data subject, you have the following rights regarding your personal data:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Access:</strong> You have the right to request access to the personal data we hold about you.</li>
                    <li><strong>Rectification:</strong> You have the right to request correction of inaccurate or incomplete information.</li>
                    <li><strong>Erasure:</strong> You have the right to request the deletion of your personal data, subject to applicable legal requirements.</li>
                    <li><strong>Restriction of Processing:</strong> You have the right to request restrictions on how your personal data is processed.</li>
                    <li><strong>Data Portability:</strong> You have the right to request a copy of your personal data in a structured, commonly used, and machine-readable format.</li>
                    <li><strong>Withdraw Consent:</strong> You can withdraw your consent to receive communications from us at any time by using the opt-out mechanisms provided in our communications or by contacting us directly.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-bsd-gray mb-4">6. Cookies and Tracking Technologies</h2>
                  <p>
                    We may use cookies and similar technologies on our website to enhance user experience, analyze website traffic, and offer personalized content. Cookies are small files stored on your device that track your interactions with our website. You can manage your cookie preferences through your browser settings. Disabling cookies may limit some website functionalities.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-bsd-gray mb-4">7. Third-Party Links</h2>
                  <p>
                    Our website may contain links to third-party websites. Please be aware that we are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of these third-party websites before sharing any personal data.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-bsd-gray mb-4">8. Changes to This Privacy Policy</h2>
                  <p>
                    We may update this Privacy Policy periodically to reflect changes in our data processing practices, legal obligations, or for other operational reasons. Any changes will be posted on this page with an updated "Effective Date." We encourage you to review this Privacy Policy regularly to stay informed about how we are protecting your personal information.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-bsd-gray mb-4">9. Contact Us</h2>
                  <p className="mb-4">
                    If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
                  </p>
                  <div className="bg-bsd-light-gray rounded-lg p-6">
                    <p className="mb-2"><strong>Bangalore School of Design & Technology</strong></p>
                    <p className="mb-2">No.4/3, Opposite B.D.S Nagar, Devanna Compound, K.Narayanapura, Kothanur Post, Bangalore – 560077</p>
                    <p>Email: enquiry@bsd.edu.in</p>
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
