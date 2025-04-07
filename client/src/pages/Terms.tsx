import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Separator } from '@/components/ui/separator';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

const Terms: React.FC = () => {
  const { t } = useTranslation();
  
  // Get current date for the "Last Updated" section
  const currentDate = new Date();
  const formattedDate = new Intl.DateTimeFormat('en-ZA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(currentDate);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
          {t('terms.title', 'Terms of Service')}
        </h1>
        
        <p className="text-center text-gray-500 mb-8">
          {t('terms.lastUpdated', 'Last Updated')}: {formattedDate}
        </p>
        
        <div className="prose prose-lg max-w-none">
          <p className="lead text-gray-600">
            {t('terms.introduction', 'Welcome to UniGuide. These Terms of Service ("Terms") govern your access to and use of the UniGuide website, applications, and services (collectively, the "Services"). Please read these Terms carefully before using our Services.')}
          </p>
          
          <p className="text-gray-600 mb-4">
            {t('terms.agreement', 'By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not access or use our Services.')}
          </p>
          
          <Separator className="my-8" />
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t('terms.definitions.title', '1. Definitions')}
          </h2>
          
          <p className="text-gray-600">
            {t('terms.definitions.desc', 'Throughout these Terms, the following definitions apply:')}
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
            <li><strong>"UniGuide," "we," "us," "our"</strong> {t('terms.definitions.uniguide', 'refers to UniGuide, its affiliates, and subsidiaries.')}</li>
            <li><strong>"User," "you," "your"</strong> {t('terms.definitions.user', 'refers to any individual who accesses or uses our Services.')}</li>
            <li><strong>"Content"</strong> {t('terms.definitions.content', 'refers to any information, data, text, graphics, photos, videos, software, or other materials that may be viewed or accessed through our Services.')}</li>
            <li><strong>"Personal Information"</strong> {t('terms.definitions.personalInfo', 'refers to information that identifies or can be used to identify you, as defined in our Privacy Policy.')}</li>
          </ul>
          
          <Separator className="my-8" />
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t('terms.eligibility.title', '2. Eligibility and Registration')}
          </h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            {t('terms.eligibility.age.title', '2.1 Age Requirements')}
          </h3>
          <p className="text-gray-600 mb-4">
            {t('terms.eligibility.age.desc', 'You must be at least 13 years old to use our Services. If you are under 18, you must have permission from a parent or legal guardian to use our Services, and they must agree to these Terms on your behalf.')}
          </p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            {t('terms.eligibility.account.title', '2.2 Account Creation')}
          </h3>
          <p className="text-gray-600 mb-4">
            {t('terms.eligibility.account.desc', 'When creating an account, you must provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.')}
          </p>
          
          <Separator className="my-8" />
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t('terms.services.title', '3. Services Description')}
          </h2>
          
          <p className="text-gray-600 mb-4">
            {t('terms.services.desc', 'UniGuide provides tools and resources to help students in South Africa explore higher education options, career paths, and funding opportunities. Our Services may include, but are not limited to:')}
          </p>
          
          <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
            <li>{t('terms.services.matching', 'University and program matching based on academic performance, interests, and goals')}</li>
            <li>{t('terms.services.assessment', 'Personality and aptitude assessments for career guidance')}</li>
            <li>{t('terms.services.info', 'Information about university application processes, deadlines, and requirements')}</li>
            <li>{t('terms.services.resources', 'Educational resources and articles')}</li>
            <li>{t('terms.services.funding', 'Information about scholarships, bursaries, and NSFAS funding')}</li>
          </ul>
          
          <p className="text-gray-600 mb-4">
            {t('terms.services.disclaimer', 'While we strive to provide accurate and up-to-date information, our Services are for guidance purposes only. You should verify all information with official sources before making educational or financial decisions.')}
          </p>
          
          <Separator className="my-8" />
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t('terms.conduct.title', '4. User Conduct')}
          </h2>
          
          <p className="text-gray-600 mb-4">
            {t('terms.conduct.intro', 'When using our Services, you agree not to:')}
          </p>
          
          <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
            <li>{t('terms.conduct.laws', 'Violate any applicable laws, regulations, or third-party rights')}</li>
            <li>{t('terms.conduct.impersonate', 'Impersonate any person or entity or falsely state or misrepresent your affiliation with a person or entity')}</li>
            <li>{t('terms.conduct.harmful', 'Upload, transmit, or distribute any content that is harmful, abusive, racially or ethnically offensive, vulgar, sexually explicit, defamatory, infringing, invasive of personal privacy or publicity rights, or otherwise objectionable')}</li>
            <li>{t('terms.conduct.malware', 'Introduce viruses, trojan horses, worms, logic bombs, or other materials that are malicious or technologically harmful')}</li>
            <li>{t('terms.conduct.access', 'Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of our Services, the server on which our Services are stored, or any server, computer, or database connected to our Services')}</li>
            <li>{t('terms.conduct.interfere', 'Interfere with or disrupt the use of our Services by other users')}</li>
            <li>{t('terms.conduct.scrape', 'Scrape, crawl, or spider any page, data, or portion of our Services')}</li>
            <li>{t('terms.conduct.modify', 'Modify, adapt, or hack our Services or modify another website to falsely imply that it is associated with UniGuide')}</li>
          </ul>
          
          <Separator className="my-8" />
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t('terms.content.title', '5. Intellectual Property and Content')}
          </h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            {t('terms.content.ownership.title', '5.1 UniGuide Content')}
          </h3>
          <p className="text-gray-600 mb-4">
            {t('terms.content.ownership.desc', 'All content, features, and functionality of our Services, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, software, and the compilation thereof, are owned by UniGuide, its licensors, or other providers of such material and are protected by South African and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.')}
          </p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            {t('terms.content.license.title', '5.2 Limited License')}
          </h3>
          <p className="text-gray-600 mb-4">
            {t('terms.content.license.desc', 'We grant you a limited, non-exclusive, non-transferable, and revocable license to access and use our Services for your personal, non-commercial use. This license does not include the right to collect or harvest any personal information of others, to republish, distribute, prepare derivative works, or otherwise use our content without our prior written consent.')}
          </p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            {t('terms.content.feedback.title', '5.3 Feedback and Suggestions')}
          </h3>
          <p className="text-gray-600 mb-4">
            {t('terms.content.feedback.desc', 'Any feedback, suggestions, ideas, or other information you provide about our Services ("Feedback") may be used by us without restriction or compensation to you. By providing Feedback, you grant us a non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such Feedback throughout the world in any media.')}
          </p>
          
          <Separator className="my-8" />
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t('terms.thirdParty.title', '6. Third-Party Links and Services')}
          </h2>
          
          <p className="text-gray-600 mb-4">
            {t('terms.thirdParty.desc', 'Our Services may contain links to third-party websites, services, or resources that are not owned or controlled by UniGuide. We are not responsible for the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that UniGuide shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.')}
          </p>
          
          <Separator className="my-8" />
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t('terms.disclaimer.title', '7. Disclaimer of Warranties')}
          </h2>
          
          <p className="text-gray-600 mb-4">
            {t('terms.disclaimer.desc', 'YOUR USE OF OUR SERVICES IS AT YOUR SOLE RISK. OUR SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. UNIGUIDE EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.')}
          </p>
          
          <p className="text-gray-600 mb-4">
            {t('terms.disclaimer.accuracy', 'UNIGUIDE MAKES NO WARRANTY THAT OUR SERVICES WILL MEET YOUR REQUIREMENTS, BE AVAILABLE ON AN UNINTERRUPTED, SECURE, OR ERROR-FREE BASIS, OR THAT DEFECTS WILL BE CORRECTED. UNIGUIDE DOES NOT WARRANT THE ACCURACY, COMPLETENESS, OR USEFULNESS OF ANY INFORMATION PROVIDED THROUGH OUR SERVICES.')}
          </p>
          
          <Separator className="my-8" />
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t('terms.limitation.title', '8. Limitation of Liability')}
          </h2>
          
          <p className="text-gray-600 mb-4">
            {t('terms.limitation.desc', 'TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, UNIGUIDE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES.')}
          </p>
          
          <Separator className="my-8" />
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t('terms.modification.title', '9. Modification of Terms')}
          </h2>
          
          <p className="text-gray-600 mb-4">
            {t('terms.modification.desc', 'We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days\' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.')}
          </p>
          
          <p className="text-gray-600 mb-4">
            {t('terms.modification.continued', 'By continuing to access or use our Services after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use our Services.')}
          </p>
          
          <Separator className="my-8" />
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t('terms.termination.title', '10. Termination')}
          </h2>
          
          <p className="text-gray-600 mb-4">
            {t('terms.termination.desc', 'We may terminate or suspend your account and access to our Services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.')}
          </p>
          
          <p className="text-gray-600 mb-4">
            {t('terms.termination.effect', 'Upon termination, your right to use our Services will immediately cease. All provisions of these Terms that by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.')}
          </p>
          
          <Separator className="my-8" />
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t('terms.governing.title', '11. Governing Law')}
          </h2>
          
          <p className="text-gray-600 mb-4">
            {t('terms.governing.desc', 'These Terms shall be governed by and construed in accordance with the laws of the Republic of South Africa, without regard to its conflict of law principles. Any legal action or proceeding arising under these Terms shall be brought exclusively in the courts located in South Africa, and you consent to the personal jurisdiction of such courts.')}
          </p>
          
          <Separator className="my-8" />
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t('terms.contact.title', '12. Contact Us')}
          </h2>
          
          <p className="text-gray-600 mb-6">
            {t('terms.contact.desc', 'If you have any questions about these Terms, please contact us at:')}
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="font-semibold text-gray-900 mb-1">UniGuide</p>
            <p className="text-gray-600">123 Education Street</p>
            <p className="text-gray-600">Cape Town, 8001</p>
            <p className="text-gray-600">South Africa</p>
            <p className="text-gray-600 mt-2">Email: legal@uniguide.co.za</p>
            <p className="text-gray-600">Phone: +27 21 123 4567</p>
          </div>
          
          <Separator className="my-8" />
          
          <div className="text-center">
            <Link href="/privacy">
              <Button variant="outline" className="mx-2">
                {t('terms.privacyLink', 'Privacy Policy')}
              </Button>
            </Link>
            <Link href="/cookies">
              <Button variant="outline" className="mx-2">
                {t('terms.cookiesLink', 'Cookie Policy')}
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="mx-2">
                {t('terms.contactLink', 'Contact Us')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;