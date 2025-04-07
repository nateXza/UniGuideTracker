import React from 'react';
import { Link, useLocation } from 'wouter';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from '@/hooks/useTranslation';

interface MobileMenuProps {
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ onClose }) => {
  const [location] = useLocation();
  const { t } = useTranslation();

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1">
        <Link 
          href="/" 
          className={`block px-3 py-2 rounded-md text-base font-medium ${
            isActive("/") 
              ? "text-primary-600 bg-primary-50" 
              : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          }`}
          onClick={onClose}
        >
          {t('nav.home')}
        </Link>
        <Link 
          href="/universities" 
          className={`block px-3 py-2 rounded-md text-base font-medium ${
            isActive("/universities") 
              ? "text-primary-600 bg-primary-50" 
              : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          }`}
          onClick={onClose}
        >
          {t('nav.universities')}
        </Link>
        <Link 
          href="/assessment" 
          className={`block px-3 py-2 rounded-md text-base font-medium ${
            isActive("/assessment") 
              ? "text-primary-600 bg-primary-50" 
              : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          }`}
          onClick={onClose}
        >
          {t('nav.assessment')}
        </Link>
        <Link 
          href="/about" 
          className={`block px-3 py-2 rounded-md text-base font-medium ${
            isActive("/about") 
              ? "text-primary-600 bg-primary-50" 
              : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          }`}
          onClick={onClose}
        >
          {t('nav.about')}
        </Link>
        <div className="px-3 py-2">
          <div className="text-sm font-medium text-gray-500 mb-2">{t('nav.language')}</div>
          <LanguageSelector />
        </div>
      </div>
      <div className="pt-4 pb-3 border-t border-gray-200">
        <div className="flex items-center px-5 space-x-3">
          <Link 
            href="/login"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            onClick={onClose}
          >
            {t('nav.signIn')}
          </Link>
          <Link 
            href="/profile"
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-primary-600 hover:bg-primary-700"
            onClick={onClose}
          >
            {t('nav.getStarted')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
