import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Separator } from '@/components/ui/separator';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

const Privacy: React.FC = () => {
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
          {t('privacy.title', 'Privacy Policy')}
        </h1>
        
        <p className="text-center text-muted-foreground mb-8">
          {t('privacy.lastUpdated', 'Last Updated')}: {formattedDate}
        </p>
        
        <div className="prose prose-lg max-w-none">
          <p className="lead text-muted-foreground">
            {t('privacy.introduction', 'At UniGuide, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.')}
          </p>
          
          <p className="text-muted-foreground mb-4">
            {t('privacy.popia', 'This policy is designed to comply with the Protection of Personal Information Act (POPIA) of South Africa and other applicable data protection laws.')}
          </p>
          
          <Separator className="my-8" />
          
          <h2 className="text-2xl font-bold text-foreground mb-4">
            {t('privacy.infoCollected.title', '1. Information We Collect')}
          </h2>
          
          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
            {t('privacy.infoCollected.personal.title', '1.1 Personal Information')}
          </h3>
          <p className="text-muted-foreground">
            {t('privacy.infoCollected.personal.desc', 'We may collect the following personal information when you register for an account, complete your profile, or use our services:')}
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-1 mb-4">
            <li>{t('privacy.infoCollected.personal.name', 'Full name')}</li>
            <li>{t('privacy.infoCollected.personal.contact', 'Contact information (email address, phone number)')}</li>
            <li>{t('privacy.infoCollected.personal.dob', 'Date of birth')}</li>
            <li>{t('privacy.infoCollected.personal.education', 'Educational background (school, grade, academic performance)')}</li>
            <li>{t('privacy.infoCollected.personal.interests', 'Academic interests and career aspirations')}</li>
            <li>{t('privacy.infoCollected.personal.assessment', 'Assessment results and preferences')}</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
            {t('privacy.infoCollected.usage.title', '1.2 Usage Information')}
          </h3>
          <p className="text-muted-foreground">
            {t('privacy.infoCollected.usage.desc', 'We may automatically collect certain information about how you access and use our platform, including:')}
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-1 mb-4">
            <li>{t('privacy.infoCollected.usage.ip', 'IP address')}</li>
            <li>{t('privacy.infoCollected.usage.device', 'Device information')}</li>
            <li>{t('privacy.infoCollected.usage.browser', 'Browser type')}</li>
            <li>{t('privacy.infoCollected.usage.pages', 'Pages viewed and features used')}</li>
            <li>{t('privacy.infoCollected.usage.time', 'Time and duration of visits')}</li>
            <li>{t('privacy.infoCollected.usage.referral', 'Referral source')}</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
            {t('privacy.infoCollected.cookies.title', '1.3 Cookies and Similar Technologies')}
          </h3>
          <p className="text-muted-foreground mb-4">
            {t('privacy.infoCollected.cookies.desc', 'We use cookies and similar tracking technologies to enhance your experience, analyze usage patterns, and deliver personalized content. You can control cookie settings through your browser preferences, although this may affect certain platform functionality.')}
          </p>
          
          <Separator className="my-8" />
          
          <h2 className="text-2xl font-bold text-foreground mb-4">
            {t('privacy.infoUse.title', '2. How We Use Your Information')}
          </h2>
          
          <p className="text-muted-foreground">
            {t('privacy.infoUse.desc', 'We may use the information we collect for various purposes, including to:')}
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-1 mb-4">
            <li>{t('privacy.infoUse.provision', 'Provide, maintain, and improve our services')}</li>
            <li>{t('privacy.infoUse.personalize', 'Personalize your experience and deliver tailored content and recommendations')}</li>
            <li>{t('privacy.infoUse.communication', 'Communicate with you about our services, updates, and educational opportunities')}</li>
            <li>{t('privacy.infoUse.research', 'Conduct research and analysis to better understand and improve educational outcomes')}</li>
            <li>{t('privacy.infoUse.security', 'Protect the security and integrity of our platform')}</li>
            <li>{t('privacy.infoUse.legal', 'Comply with legal obligations and enforce our terms of service')}</li>
          </ul>
          
          <Separator className="my-8" />
          
          <h2 className="text-2xl font-bold text-foreground mb-4">
            {t('privacy.infoSharing.title', '3. Information Sharing and Disclosure')}
          </h2>
          
          <p className="text-muted-foreground mb-4">
            {t('privacy.infoSharing.desc', 'We take your privacy seriously and do not sell, rent, or trade your personal information. We may share your information in the following limited circumstances:')}
          </p>
          
          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
            {t('privacy.infoSharing.partners.title', '3.1 Educational Partners')}
          </h3>
          <p className="text-muted-foreground mb-4">
            {t('privacy.infoSharing.partners.desc', 'With your explicit consent, we may share relevant information with universities, colleges, or educational institutions to facilitate the application process or to provide you with information about programs that match your profile and interests.')}
          </p>
          
          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
            {t('privacy.infoSharing.service.title', '3.2 Service Providers')}
          </h3>
          <p className="text-muted-foreground mb-4">
            {t('privacy.infoSharing.service.desc', 'We may share information with third-party service providers who perform services on our behalf, such as hosting, data analysis, payment processing, and customer service. These providers are bound by confidentiality obligations and are prohibited from using your information for any other purpose.')}
          </p>
          
          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
            {t('privacy.infoSharing.legal.title', '3.3 Legal Requirements')}
          </h3>
          <p className="text-muted-foreground mb-4">
            {t('privacy.infoSharing.legal.desc', 'We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).')}
          </p>
          
          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
            {t('privacy.infoSharing.business.title', '3.4 Business Transfers')}
          </h3>
          <p className="text-muted-foreground mb-4">
            {t('privacy.infoSharing.business.desc', 'If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction. We will notify you via email and/or a prominent notice on our website of any change in ownership or uses of your information.')}
          </p>
          
          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
            {t('privacy.infoSharing.aggregate.title', '3.5 Aggregated or De-identified Data')}
          </h3>
          <p className="text-muted-foreground mb-4">
            {t('privacy.infoSharing.aggregate.desc', 'We may share aggregated or de-identified information that cannot reasonably be used to identify you with third parties for research, reporting, or statistical purposes.')}
          </p>
          
          <Separator className="my-8" />
          
          <h2 className="text-2xl font-bold text-foreground mb-4">
            {t('privacy.dataSecurity.title', '4. Data Security')}
          </h2>
          
          <p className="text-muted-foreground mb-4">
            {t('privacy.dataSecurity.desc', 'We implement appropriate technical and organizational measures to protect the security, confidentiality, and integrity of your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.')}
          </p>
          
          <Separator className="my-8" />
          
          <h2 className="text-2xl font-bold text-foreground mb-4">
            {t('privacy.dataRetention.title', '5. Data Retention')}
          </h2>
          
          <p className="text-muted-foreground mb-4">
            {t('privacy.dataRetention.desc', 'We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When determining retention periods, we consider the amount, nature, and sensitivity of the information, the potential risk of harm from unauthorized use or disclosure, and applicable legal requirements.')}
          </p>
          
          <Separator className="my-8" />
          
          <h2 className="text-2xl font-bold text-foreground mb-4">
            {t('privacy.yourRights.title', '6. Your Rights and Choices')}
          </h2>
          
          <p className="text-muted-foreground">
            {t('privacy.yourRights.desc', 'Under POPIA and other applicable data protection laws, you have certain rights regarding your personal information, including:')}
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-1 mb-4">
            <li>{t('privacy.yourRights.access', 'The right to access and obtain a copy of your personal information')}</li>
            <li>{t('privacy.yourRights.correction', 'The right to request correction of inaccurate or incomplete information')}</li>
            <li>{t('privacy.yourRights.deletion', 'The right to request deletion of your personal information in certain circumstances')}</li>
            <li>{t('privacy.yourRights.restriction', 'The right to restrict or object to processing of your personal information')}</li>
            <li>{t('privacy.yourRights.portability', 'The right to data portability')}</li>
            <li>{t('privacy.yourRights.consent', 'The right to withdraw consent at any time (where processing is based on consent)')}</li>
            <li>{t('privacy.yourRights.complaint', 'The right to lodge a complaint with a data protection authority')}</li>
          </ul>
          
          <p className="text-muted-foreground mb-4">
            {t('privacy.yourRights.exercise', 'To exercise these rights, please contact us using the information provided in the "Contact Us" section below.')}
          </p>
          
          <Separator className="my-8" />
          
          <h2 className="text-2xl font-bold text-foreground mb-4">
            {t('privacy.children.title', '7. Children\'s Privacy')}
          </h2>
          
          <p className="text-muted-foreground mb-4">
            {t('privacy.children.desc', 'Our services are intended for use by individuals who are at least 13 years old. If you are a parent or guardian and believe we have collected information from a child under 13 without appropriate consent, please contact us, and we will take steps to remove such information.')}
          </p>
          
          <Separator className="my-8" />
          
          <h2 className="text-2xl font-bold text-foreground mb-4">
            {t('privacy.changes.title', '8. Changes to this Privacy Policy')}
          </h2>
          
          <p className="text-muted-foreground mb-4">
            {t('privacy.changes.desc', 'We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.')}
          </p>
          
          <Separator className="my-8" />
          
          <h2 className="text-2xl font-bold text-foreground mb-4">
            {t('privacy.contact.title', '9. Contact Us')}
          </h2>
          
          <p className="text-muted-foreground mb-6">
            {t('privacy.contact.desc', 'If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:')}
          </p>
          
          <div className="bg-background p-6 rounded-lg mb-8">
            <p className="font-semibold text-foreground mb-1">UniGuide</p>
            <p className="text-muted-foreground">123 Education Street</p>
            <p className="text-muted-foreground">Cape Town, 8001</p>
            <p className="text-muted-foreground">South Africa</p>
            <p className="text-muted-foreground mt-2">Email: privacy@uniguide.co.za</p>
            <p className="text-muted-foreground">Phone: +27 21 123 4567</p>
          </div>
          
          <Separator className="my-8" />
          
          <div className="text-center">
            <Link href="/terms">
              <Button variant="outline" className="mx-2">
                {t('privacy.termsLink', 'Terms of Service')}
              </Button>
            </Link>
            <Link href="/cookies">
              <Button variant="outline" className="mx-2">
                {t('privacy.cookiesLink', 'Cookie Policy')}
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="mx-2">
                {t('privacy.contactLink', 'Contact Us')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;