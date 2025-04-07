import React from 'react';
import { Link } from 'wouter';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary-700 font-bold text-xl">
                U
              </div>
              <span className="ml-2 text-xl font-semibold">UniGuide</span>
            </div>
            <p className="mt-4 text-gray-300 text-sm">
              {t('footer.description')}
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-gray-300 hover:text-white">{t('nav.home')}</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-gray-300 hover:text-white">{t('nav.about')}</a>
                </Link>
              </li>
              <li>
                <Link href="/universities">
                  <a className="text-gray-300 hover:text-white">{t('nav.universities')}</a>
                </Link>
              </li>
              <li>
                <Link href="/assessment">
                  <a className="text-gray-300 hover:text-white">{t('nav.assessment')}</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-gray-300 hover:text-white">{t('footer.contact')}</a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.resources')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/nsfas">
                  <a className="text-gray-300 hover:text-white">{t('footer.nsfasInfo')}</a>
                </Link>
              </li>
              <li>
                <Link href="/scholarships">
                  <a className="text-gray-300 hover:text-white">{t('footer.scholarshipGuide')}</a>
                </Link>
              </li>
              <li>
                <Link href="/deadlines">
                  <a className="text-gray-300 hover:text-white">{t('footer.applicationDeadlines')}</a>
                </Link>
              </li>
              <li>
                <Link href="/careers">
                  <a className="text-gray-300 hover:text-white">{t('footer.careerGuides')}</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a className="text-gray-300 hover:text-white">{t('footer.blog')}</a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-2"></i>
                <span>Cape Town, South Africa</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-2"></i>
                <span>info@uniguide.co.za</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone mt-1 mr-2"></i>
                <span>+27 21 123 4567</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-2">{t('footer.subscribe')}</h4>
              <form className="flex">
                <Input 
                  type="email" 
                  placeholder={t('footer.yourEmail')} 
                  className="rounded-r-none text-gray-800"
                />
                <Button type="submit" className="rounded-l-none px-4">
                  <i className="fas fa-paper-plane"></i>
                </Button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2023 UniGuide. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0 flex space-x-6 text-sm text-gray-400">
            <Link href="/privacy">
              <a className="hover:text-white">{t('footer.privacyPolicy')}</a>
            </Link>
            <Link href="/terms">
              <a className="hover:text-white">{t('footer.termsOfService')}</a>
            </Link>
            <Link href="/cookies">
              <a className="hover:text-white">{t('footer.cookiePolicy')}</a>
            </Link>
            <Link href="/website-map">
              <a className="hover:text-white">{t('footer.siteMap', 'Site Map')}</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
