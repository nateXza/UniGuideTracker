import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Separator } from '@/components/ui/separator';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const Cookies: React.FC = () => {
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
          {t('cookies.title', 'Cookie Policy')}
        </h1>
        
        <p className="text-center text-gray-500 mb-8">
          {t('cookies.lastUpdated', 'Last Updated')}: {formattedDate}
        </p>
        
        <div className="prose prose-lg max-w-none">
          <p className="lead text-gray-600">
            {t('cookies.introduction', 'This Cookie Policy explains how UniGuide ("we", "us", "our") uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.')}
          </p>
          
          <p className="text-gray-600 mb-4">
            {t('cookies.policy', 'This Cookie Policy should be read together with our Privacy Policy and Terms of Service.')}
          </p>
          
          <Separator className="my-8" />
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t('cookies.what.title', '1. What Are Cookies?')}
          </h2>
          
          <p className="text-gray-600 mb-4">
            {t('cookies.what.desc', 'Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, work more efficiently, and provide reporting information.')}
          </p>
          
          <p className="text-gray-600 mb-4">
            {t('cookies.what.purpose', 'Cookies set by the website owner (in this case, UniGuide) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics). The parties that set these third-party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.')}
          </p>
          
          <Separator className="my-8" />
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t('cookies.why.title', '2. Why Do We Use Cookies?')}
          </h2>
          
          <p className="text-gray-600 mb-4">
            {t('cookies.why.desc', 'We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies enable us to track and target the interests of our users to enhance the experience on our website. Third parties serve cookies through our website for analytics, personalization, and advertising purposes.')}
          </p>
          
          <Separator className="my-8" />
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t('cookies.types.title', '3. Types of Cookies We Use')}
          </h2>
          
          <p className="text-gray-600 mb-4">
            {t('cookies.types.desc', 'The specific types of first and third-party cookies served through our website and the purposes they perform are described below:')}
          </p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            {t('cookies.types.essential.title', '3.1 Essential Cookies')}
          </h3>
          <p className="text-gray-600 mb-4">
            {t('cookies.types.essential.desc', 'These cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as access to secure areas. Because these cookies are strictly necessary to deliver the website, you cannot refuse them without impacting how our website functions.')}
          </p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            {t('cookies.types.performance.title', '3.2 Performance and Functionality Cookies')}
          </h3>
          <p className="text-gray-600 mb-4">
            {t('cookies.types.performance.desc', 'These cookies are used to enhance the performance and functionality of our website but are non-essential to their use. However, without these cookies, certain functionality may become unavailable.')}
          </p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            {t('cookies.types.analytics.title', '3.3 Analytics and Customization Cookies')}
          </h3>
          <p className="text-gray-600 mb-4">
            {t('cookies.types.analytics.desc', 'These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are, or to help us customize our website for you. We use analytics cookies from providers such as Google Analytics.')}
          </p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            {t('cookies.types.target.title', '3.4 Targeting and Advertising Cookies')}
          </h3>
          <p className="text-gray-600 mb-4">
            {t('cookies.types.target.desc', 'These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed, and in some cases selecting advertisements that are based on your interests.')}
          </p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            {t('cookies.types.social.title', '3.5 Social Media Cookies')}
          </h3>
          <p className="text-gray-600 mb-4">
            {t('cookies.types.social.desc', 'These cookies are used to enable you to share pages and content that you find interesting on our website through third-party social networking and other websites. These cookies may also be used for advertising purposes.')}
          </p>
          
          <Separator className="my-8" />
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t('cookies.specific.title', '4. Specific Cookies We Use')}
          </h2>
          
          <p className="text-gray-600 mb-4">
            {t('cookies.specific.desc', 'The following table provides more information about the specific cookies we use and the purposes for which we use them:')}
          </p>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t('cookies.table.name', 'Cookie Name')}</TableHead>
                  <TableHead>{t('cookies.table.provider', 'Provider')}</TableHead>
                  <TableHead>{t('cookies.table.purpose', 'Purpose')}</TableHead>
                  <TableHead>{t('cookies.table.expiry', 'Expiry')}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>session_id</TableCell>
                  <TableCell>UniGuide</TableCell>
                  <TableCell>{t('cookies.specific.session', 'Used to maintain your session and authentication state.')}</TableCell>
                  <TableCell>{t('cookies.specific.sessionTime', 'Session')}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>preferences</TableCell>
                  <TableCell>UniGuide</TableCell>
                  <TableCell>{t('cookies.specific.preferences', 'Stores your preferences such as language selection and theme.')}</TableCell>
                  <TableCell>1 year</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>_ga</TableCell>
                  <TableCell>Google Analytics</TableCell>
                  <TableCell>{t('cookies.specific.ga', 'Used to distinguish users for analytics purposes.')}</TableCell>
                  <TableCell>2 years</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>_gid</TableCell>
                  <TableCell>Google Analytics</TableCell>
                  <TableCell>{t('cookies.specific.gid', 'Used to distinguish users for analytics purposes.')}</TableCell>
                  <TableCell>24 hours</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>_fbp</TableCell>
                  <TableCell>Facebook</TableCell>
                  <TableCell>{t('cookies.specific.fbp', 'Used by Facebook to deliver advertisements when users have visited our website.')}</TableCell>
                  <TableCell>3 months</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          
          <Separator className="my-8" />
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t('cookies.control.title', '5. How Can You Control Cookies?')}
          </h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            {t('cookies.control.browser.title', '5.1 Browser Settings')}
          </h3>
          <p className="text-gray-600 mb-4">
            {t('cookies.control.browser.desc', 'Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience, as it will no longer be personalized to you. It may also stop you from saving customized settings like login information.')}
          </p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            {t('cookies.control.specific.title', '5.2 Specific Browser Instructions')}
          </h3>
          <p className="text-gray-600 mb-4">
            {t('cookies.control.specific.desc', 'To find information relating to other browsers, visit the browser developer\'s website.')}
          </p>
          
          <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
            <li>
              <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                Google Chrome
              </a>
            </li>
            <li>
              <a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                Microsoft Edge
              </a>
            </li>
            <li>
              <a href="https://support.apple.com/en-za/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                Safari
              </a>
            </li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            {t('cookies.control.analytics.title', '5.3 Google Analytics Opt-Out')}
          </h3>
          <p className="text-gray-600 mb-4">
            {t('cookies.control.analytics.desc', 'To opt out of being tracked by Google Analytics across all websites, you can install the Google Analytics Opt-Out Browser Add-on. This add-on instructs the Google Analytics JavaScript not to send information about website visits to Google Analytics.')}
          </p>
          <p className="text-gray-600 mb-4">
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
              {t('cookies.control.analytics.link', 'Download the Google Analytics Opt-Out Browser Add-on')}
            </a>
          </p>
          
          <Separator className="my-8" />
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t('cookies.changes.title', '6. Changes to This Cookie Policy')}
          </h2>
          
          <p className="text-gray-600 mb-4">
            {t('cookies.changes.desc', 'We may update this Cookie Policy from time to time to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.')}
          </p>
          
          <p className="text-gray-600 mb-4">
            {t('cookies.changes.date', 'The date at the top of this Cookie Policy indicates when it was last updated.')}
          </p>
          
          <Separator className="my-8" />
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t('cookies.contact.title', '7. Contact Us')}
          </h2>
          
          <p className="text-gray-600 mb-6">
            {t('cookies.contact.desc', 'If you have any questions about our use of cookies or this Cookie Policy, please contact us at:')}
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="font-semibold text-gray-900 mb-1">UniGuide</p>
            <p className="text-gray-600">123 Education Street</p>
            <p className="text-gray-600">Cape Town, 8001</p>
            <p className="text-gray-600">South Africa</p>
            <p className="text-gray-600 mt-2">Email: privacy@uniguide.co.za</p>
            <p className="text-gray-600">Phone: +27 21 123 4567</p>
          </div>
          
          <Separator className="my-8" />
          
          <div className="text-center">
            <Link href="/privacy">
              <Button variant="outline" className="mx-2">
                {t('cookies.privacyLink', 'Privacy Policy')}
              </Button>
            </Link>
            <Link href="/terms">
              <Button variant="outline" className="mx-2">
                {t('cookies.termsLink', 'Terms of Service')}
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="mx-2">
                {t('cookies.contactLink', 'Contact Us')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cookies;